# Usage Guide

This guide explains how to use the plugins and themes from the `agahi` package via [jsDelivr CDN](https://cdn.jsdelivr.net/).

## CDN Access

All assets are hosted and can be used directly from:

```
https://cdn.jsdelivr.net/npm/agahi@latest/dist/...
```

## Plugin Scripts

Include only the plugins you need:

```html
<!-- Back to Top -->
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/back_to_top.min.js"></script>

<!-- Copy Code -->
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/copy_code.min.js"></script>

<!-- Image Zoom -->
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/image_zoom.min.js"></script>

<!-- Table of Contents (TOC) -->
<script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/toc.min.js"></script>
```

## Themes

Pick a theme and include it in your `<head>`:

```html
<!-- Light Theme -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/agahi@latest/dist/theme/light.min.css"
/>

<!-- Dark Theme -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/agahi@latest/dist/theme/dark.min.css"
/>
```

> You can also switch between light and dark modes manually using JavaScript or media queries.

## Quick Start Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Agahi Demo</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/agahi@latest/dist/theme/light.min.css"
    />
  </head>
  <body>
    <!-- Your content -->

    <!-- Plugins -->
    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/agahi.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/back_to_top.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/copy_code.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/image_zoom.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/agahi@latest/dist/plugin/toc.min.js"></script>
  </body>
</html>
```
