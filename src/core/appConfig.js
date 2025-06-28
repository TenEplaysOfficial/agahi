// App configuration for Agahi

/**
 * @typedef {Object} AgahiConfig
 * @property {string} name - The name of the documentation site.
 * @property {string} repo - GitHub repository in the format "owner/repo".
 * @property {string} el - The ID of the HTML element where content will be rendered.
 * @property {boolean} edit - Whether to show the "Edit on GitHub" link.
 * @property {string} editPath - The full URL path to edit the markdown files on GitHub.
 * @property {string} editLabel - Text label for edit
 * @property {boolean} showFooter - Whether to display the footer section.
 * @property {boolean} showSearch - Whether to enable the search functionality.
 * @property {string} defaultRoute - The default route to load when no hash is provided.
 * @property {string[]} tocHeadings - An array of heading tags to include in the Table of Contents (TOC).
 * @property {string} searchPlaceholder - Search Placeholder
 * @property {string} tocLabel - Text label for TOC heading
 * @property {number} scrollThreshold - The scroll threshold in pixels to show the "Back to Top" button.
 */

/**
 * Default configuration for Agahi Docs.
 * @type {AgahiConfig}
 */

const defaultConfig = {
  name: 'Agahi.js',
  repo: 'teneplaysofficial/agahi',
  el: 'app',
  edit: true,
  editPath: 'https://github.com/teneplaysofficial/agahi/edit/main/docs',
  editLabel: 'Edit this page',
  showFooter: true,
  showSearch: true,
  searchPlaceholder: 'Search...',
  defaultRoute: '',
  tocHeadings: ['h2', 'h3'],
  tocLabel: 'Table of Contents',
  scrollThreshold: 300,
};

/**
 * User provided configuration via global `window.$agahi`, or falls back to `defaultConfig`.
 * @type {AgahiConfig}
 */

const userConfig = typeof window !== 'undefined' ? window.$agahi || {} : {};

const config = {
  ...defaultConfig,
  ...userConfig,
};

export default config;
