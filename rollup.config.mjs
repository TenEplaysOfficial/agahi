import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import del from 'rollup-plugin-delete';
import { string } from 'rollup-plugin-string';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import postcssLib from 'postcss';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const name = pkg.name.replace(/-/g, '_');
const input = 'src/core/index.js';
const pluginDir = 'src/plugins';
const pluginOutputDir = 'dist/plugin';
const themeFiles = glob.sync('src/themes/!(*default).css');

const defaultCss = fs.readFileSync('src/themes/default.css', 'utf8');
const parsed = postcssLib.parse(defaultCss);
parsed.nodes = parsed.nodes.filter(
  (node) => !(node.type === 'rule' && node.selector === ':root'),
);
const cleanedDefaultCss = parsed.toString().trim();

// Append default theme to each theme file
function appendDefaultCss() {
  return {
    postcssPlugin: 'append-default-css',
    Once(root) {
      if (cleanedDefaultCss) {
        root.append(postcssLib.parse(cleanedDefaultCss));
      }
    },
  };
}
appendDefaultCss.postcss = true;

// Base PostCSS plugins
const commonPostCSSPlugins = [
  postcssImport(),
  autoprefixer(),
  postcssPresetEnv({ stage: 1 }),
];

// Theme-specific PostCSS plugins
const cssPlugins = [...commonPostCSSPlugins, appendDefaultCss()];

const runOncePlugin = del({ targets: ['dist/*'], runOnce: true });

const basePlugins = [
  json(),
  resolve(),
  commonjs(),
  postcss({
    extract: false,
    plugins: commonPostCSSPlugins,
  }),
  string({ include: 'src/layouts/*.html' }),
];

// Theme configurations
const themeCSSConfigs = themeFiles.flatMap((file, index) => {
  const themeName = path.basename(file, '.css');
  return [
    {
      input: file,
      output: { file: `dist/theme/${themeName}.css` },
      plugins: [
        ...(index === 0
          ? [del({ targets: 'dist/theme/*', runOnce: true })]
          : []),
        postcss({
          extract: true,
          minimize: false,
          plugins: cssPlugins,
        }),
      ],
    },
    {
      input: file,
      output: { file: `dist/theme/${themeName}.min.css` },
      plugins: [
        postcss({
          extract: true,
          minimize: true,
          plugins: [...cssPlugins, cssnano()],
        }),
      ],
    },
  ];
});

// Main core build
const baseConfigs = [
  {
    input,
    output: [
      { file: `dist/${name}.js`, format: 'iife', sourcemap: false, name },
      {
        file: `dist/${name}.min.js`,
        format: 'iife',
        sourcemap: false,
        name,
        plugins: [terser()],
      },
    ],
    plugins: [runOncePlugin, ...basePlugins],
  },
  {
    input: 'src/bin/cli.js',
    output: {
      file: 'dist/bin/cli.js',
      format: 'esm',
      sourcemap: false,
      banner: '#!/usr/bin/env node',
    },
    external: ['commander', 'ora', 'degit', 'marked', 'dompurify'],
    plugins: [...basePlugins, terser()],
  },
];

// Plugins build
const pluginConfigs = fs
  .readdirSync(pluginDir)
  .filter((file) => file.endsWith('.js'))
  .map((file) => {
    const baseName = path.parse(file).name.replace(/-/g, '_');
    return {
      input: path.join(pluginDir, file),
      output: [
        {
          file: `${pluginOutputDir}/${baseName}.js`,
          format: 'iife',
          name: baseName,
          sourcemap: false,
        },
        {
          file: `${pluginOutputDir}/${baseName}.min.js`,
          format: 'iife',
          name: baseName,
          sourcemap: false,
          plugins: [terser()],
        },
      ],
      plugins: [...basePlugins],
    };
  });

export default [...baseConfigs, ...pluginConfigs, ...themeCSSConfigs];
