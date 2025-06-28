import { Command } from 'commander';
import pkg from '../../package.json';
import ora from 'ora';
import process from 'process';
import path from 'path';
import { validName } from './utils';
import degit from 'degit';
import fs from 'fs';

const program = new Command();

program
  .name(pkg.displayName)
  .description(pkg.description)
  .version(pkg.version)
  .enablePositionalOptions();

program
  .command('init')
  .alias('i')
  .description(`Initialize a new ${pkg.displayName} project`)
  .argument(
    '[name]',
    'Project name (optional to create folder with given name in current directory)',
  )
  .action(async (name) => {
    const cwd = process.cwd();

    const projectName = name ? name.trim() : path.basename(cwd);
    validName(projectName);
    const targetDir = name ? path.resolve(cwd, projectName) : cwd;

    if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
      console.error(
        `The directory "${projectName}" already exists and is not empty.`,
      );
      process.exit(1);
    }

    const spinner = ora({
      text: `Cloning starter template...`,
      spinner: 'dots',
    }).start();

    try {
      const emitter = degit('tenelabs/agahi-starter', {
        cache: false,
        force: true,
        verbose: false,
      });

      await emitter.clone(targetDir);
      spinner.succeed(`Project "${projectName}" initialized in "${targetDir}"`);
    } catch (error) {
      spinner.fail('Failed to initialize project.');
      console.error(error);
      process.exit(1);
    }
  });

program.parse();
