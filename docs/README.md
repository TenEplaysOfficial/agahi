<h1 align="center">Agahi.js</h1>

<p align="center"><em>Serve Markdown as Docs</em></p>

## Introduction

Agahi is a zero-build, client-side documentation engine that transforms plain Markdown files into a fully featured docs site right in the browser.

- **No Build Step**: Write or update `.md` files.
- **Client-Side Only**: All parsing and rendering occur in the user’s browser no Node.js bundlers required.
- **Deploy Anywhere**: Ideal for GitHub Pages, Netlify, Vercel, or any static host.
- **Lightweight & Zero-Config**: Start with defaults, or add a minimal config to customize title, sidebar, search, and themes.

Agahi (Kurdish for “_information_” or “_knowledge_”) lives up to its name by delivering your content directly—no hassle, no extra steps.

---

## Navigation Links

Agahi uses hash-based routing. You can link between pages or sections using Markdown like this:

```md
[Go to Getting Started](#/getting-started.md)
[View Plugins](#/plugins.md)
[Configuration Guide](#/configuration.md)
```

These links will work in both static hosting and live environments with no server configuration required.

---

## Available Plugins

Agahi provides a set of built-in plugins to enhance your documentation experience:

| Plugin                | Description                                       | CDN Script                                                                                       |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Back to Top**       | Displays a floating button to scroll back to top. | [`back_to_top.min.js`](https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/back_to_top.min.js) |
| **Copy Code**         | Adds a copy button to every code block.           | [`copy_code.min.js`](https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/copy_code.min.js)     |
| **Image Zoom**        | Allows fullscreen zoom on images.                 | [`image_zoom.min.js`](https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/image_zoom.min.js)   |
| **Table of Contents** | Generates a dynamic TOC from markdown headings.   | [`toc.min.js`](https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/toc.min.js)                 |

For detailed plugin documentation, [see Plugins](#/plugins.md).

## Getting Started

To quickly get started, include Agahi via CDN and add your Markdown container:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Docs</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/agahi@latest/dist/theme/light.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script>
      window.$agahi = {
        name: 'My Docs',
        repo: 'your/repo',
        el: 'app',
      };
    </script>

    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/agahi.min.js"></script>
  </body>
</html>
```

## Configuration

Agahi can be customized by defining `window.$agahi` before the script loads. For a full list of configuration options, [see Configuration](#/configuration.md).
