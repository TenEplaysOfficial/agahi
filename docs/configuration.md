# Agahi Configuration

You can customize Agahi by passing a global `window.$agahi` object, which merges with the default configuration.

## Default Configuration

```js
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
```

## Available Options

| Option              | Type          | Default               | Description                                                   |
| ------------------- | ------------- | --------------------- | ------------------------------------------------------------- |
| `name`              | `string`      | `'Agahi.js'`          | Site title displayed in header and browser title.             |
| `repo`              | `string`      | `'owner/repo'`        | GitHub repository used for generating "Edit on GitHub" links. |
| `el`                | `string`      | `'app'`               | ID of the element where Agahi mounts and renders content.     |
| `edit`              | `boolean`     | `true`                | Show or hide the "Edit on GitHub" link.                       |
| `editPath`          | `string`      | full GitHub edit URL  | Base URL used to build edit links for each page.              |
| `editLabel`         | `string`      | `'Edit this page'`    | Text label for the "Edit" button/link.                        |
| `showFooter`        | `boolean`     | `true`                | Display the footer section.                                   |
| `showSearch`        | `boolean`     | `true`                | Enable or disable built-in search.                            |
| `searchPlaceholder` | `string`      | `'Search...'`         | Placeholder text for the search input field.                  |
| `defaultRoute`      | `string`      | `''`                  | Default route (e.g. `'/'`) when no hash is provided in URL.   |
| `tocHeadings`       | `string[]`    | `['h2', 'h3']`        | Headings levels used to generate the Table of Contents.       |
| `tocLabel`          | `string`      | `'Table of Contents'` | Heading label for the TOC section.                            |
| `scrollThreshold`   | `number` (px) | `300`                 | Vertical scroll offset before showing "Back to Top" button.   |

## Usage Example

To override defaults, add something like this in your `index.html` (before loading Agahi's script):

```html
<script>
  window.$agahi = {
    name: 'My Project Docs',
    repo: 'myorg/myproject',
    edit: true,
    defaultRoute: '/getting-started',
    tocHeadings: ['h2', 'h3', 'h4'],
    searchPlaceholder: 'Find in docs...',
  };
</script>
```

Agahi will automatically merge these with `defaultConfig`.

## Notes & Tips

- **Repo Integration**: Make sure `repo` matches your GitHub path (like `user/repo`).
- **Element Mounting (`el`)**: Defaults to `#app`. Change only if your docs have a custom container.
- **Search Setup**: To enable search, keep `showSearch: true` and ensure the content has proper headings.
- **Styling TOC**: Customize `tocLabel` and `tocHeadings` to control which heading levels appear in your sidebar/Tables.
- `scrollThreshold` helps trigger UI elements based on user scroll behavior—adjust to around screen height (\~810px) for better UX.
- **Edit Path**: `editPath` usually follows GitHub's structure:
  `https://github.com/<owner>/<repo>/edit/main/docs`
