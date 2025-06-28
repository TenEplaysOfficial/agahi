# Agahi Plugins

This document provides usage and functionality details for all plugins included in the [`agahi`](https://www.npmjs.com/package/agahi) package.

## CDN Usage

To use any plugin, include the desired minified script from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/<plugin>.min.js"></script>
```

> Make sure your content is rendered before loading the plugin, or manually trigger the `agahi:ready` event.

---

## Back to Top Button

- **Script:** `back_to_top.min.js`
- **Style:** `back-to-top.css`

### Description

Displays a "Back to Top" button when the user scrolls past a certain threshold. Clicking the button smoothly scrolls the page to the top.

### Requirements

- HTML snippet from `back-to-top.html` must be present.
- An element with `id="back-to-top"` must exist in the DOM.
- Configuration: `config.scrollThreshold`

### Example

```html
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/back_to_top.min.js"></script>
```

---

## Copy Code Button

- **Script:** `copy_code.min.js`
- **Style:** `copy-code.css`

### Description

Adds a "Copy" button to every `<pre><code>` block inside the element with `id="md"`. Automatically handles both static and dynamically added code blocks.

### Features

- Uses `MutationObserver` to track newly added code blocks.
- Displays "Copied!" feedback after successful copy.

### Requirements

- Your content container must have `id="md"`.

### Example

```html
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/copy_code.min.js"></script>
```

---

## Image Zoom Preview

- **Script:** `image_zoom.min.js`
- **Style:** `image-zoom.css`

### Description

Click any image within the article to view it in a fullscreen overlay. Clicking again toggles zoom. ESC or clicking outside the image closes the overlay.

### Features

- Dynamically binds to new images via `MutationObserver`.
- Smooth zoom toggle on click.
- Overlay is automatically created on first run.

### Requirements

- Your content container must have `id="md"`.

### Example

```html
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/image_zoom.min.js"></script>
```

---

## Table of Contents (TOC)

- **Script:** `toc.min.js`
- **Style:** `toc.css`

### Description

Dynamically generates a table of contents from all `h2` to `h6` tags in your article. Clicking TOC items scrolls smoothly to their corresponding section.

### Features

- Uses `MutationObserver` to update when new headings appear.
- Reflects the current heading via `?id=` query param.
- Customizable with `config.tocHeadings` and `config.tocLabel`.

### Requirements

- Your content container must have `id="md"`.
- You must provide a TOC layout file (e.g., `toc.html`).
- Relevant config keys:

```js
window.$agahi = {
    tocHeadings = ['h2', 'h3', 'h4'];
    tocLabel = 'On this page';
}
```

### Example

```html
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/toc.min.js"></script>
```
