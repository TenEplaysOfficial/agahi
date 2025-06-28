# Contributing to Agahi.js

First off, thank you for taking the time to contribute to **Agahi.js**! ❤️

Your help makes this project better, and we appreciate your interest in making it great.

Whether it's a bug fix, new feature, or documentation improvement — all contributions are welcome.

## Getting Started

### Install Yarn

If you don't already have **[Yarn](https://classic.yarnpkg.com/lang/en/docs/install)** installed, here’s how to do it:

#### Option 1: Via npm (recommended for most developers)

```bash
npm install --global yarn
```

#### Option 2: Using Corepack (comes with Node.js ≥ 16.10)

If you're using Node.js version **16.10 or later**, you can enable Corepack:

```bash
corepack enable
```

Then ensure Yarn is set up:

```bash
corepack prepare yarn@stable --activate
```

> You can check your Yarn version with:
>
> ```bash
> yarn --version
> ```

### Setup the Project

1. **Fork** the repo and clone it locally:

   ```bash
   git clone https://github.com/teneplaysofficial/agahi.git
   cd agahi
   ```

2. **Install dependencies**:

   ```bash
   yarn
   ```

3. **Run tests**:

   ```bash
   yarn test
   ```

## Folder Structure

```
agahi/
├── dist/              # Output of the build process
├── docs/              # Documentation files
├── src/
│   ├── bin/           # CLI entry point and related commands
│   ├── core/          # Core runtime code for rendering and navigation
│   ├── theme/         # Theme assets like CSS
├── test/              # Unit and integration tests
├── .github/           # GitHub configuration (actions, issue templates, etc.)
├── rollup.config.js   # Rollup bundler configuration
├── package.json       # Project metadata and scripts
└── README.md          # Main readme for GitHub
```

## How to Contribute

### Reporting Bugs

If you encounter a bug:

- Search [existing issues](https://github.com/teneplaysofficial/agahi/issues) to avoid duplicates.
- Open a new issue with:

  - Expected vs actual behavior
  - Steps to reproduce
  - Environment (OS, browser, Node version, etc.)

> Please **do not report security vulnerabilities** in public issues. Email us directly instead.

### Suggesting Enhancements

Got an idea?

- Check if it already exists in [issues](https://github.com/teneplaysofficial/agahi/issues).
- If not, open a new feature request with:

  - Problem statement
  - Proposed solution
  - Alternatives considered (if any)

### Improving Documentation

We appreciate documentation improvements!
Typo fixes, clarifications, or missing sections — all are valuable.

- Edit `.md` files in the `docs/` folders.
- Preview locally if needed.

Here’s an improved, polished version of your **Working with JavaScript (Functionality)** section, including a note encouraging the use of JSDoc for clear code documentation:

### Working with JavaScript (Functionality)

If you’re contributing to the interactive parts of Agahi—such as routing, dynamic rendering, or CLI commands—here’s how to get started:

- **Core runtime logic** lives in the `src/core/` directory. This includes navigation, Markdown rendering, page loading, and other essential behaviors.

- **CLI commands and scripts** are located in `src/bin/cli.js`. Modify here for commands like `agahi init` and other CLI utilities.

- Use the test suite to verify your changes:

  ```bash
  yarn test
  ```

- When adding new features or functions:

  - Follow the existing project structure and coding patterns.
  - Export your modules clearly to keep the codebase modular and maintainable.
  - **Document your code with [JSDoc](https://jsdoc.app/)** to provide inline explanations, parameter details, and return types. This helps maintain clarity and eases future contributions.

### Working with CSS (Styling & Themes)

If you're contributing to visual styling, layout, or creating themes:

- The **main styling file** is: `src/theme/default.css`
  This defines the base styles for components like buttons, links, code blocks, etc.

- To create a **new theme** (e.g., dark mode), add a new CSS file in `src/theme/` such as:

  ```plaintext
  src/theme/dark.css
  ```

- In the new theme file (like `dark.css`), define your overrides under the `:root {}` selector.
  Only CSS variables should be defined here, based on the structure in `default.css`.

- During development, run:

  ```bash
  yarn build
  ```

  This compiles the CSS files into JavaScript in `dist/theme/`, like:

  ```plaintext
  dist/theme/default.js
  dist/theme/dark.js
  ```

> All themes inherit from `default.css`. Your custom themes should **only override variables** — not define full styles.

### Submitting Pull Requests

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Ensure tests and lint pass: `yarn test && yarn lint`
4. Commit and push
5. Open a PR against `main` with a clear title and description

## Style Guide

Follow these conventions:

- Use consistent formatting (`Prettier` and `ESLint` enforced)
- Stick to existing naming conventions
- Write clean and readable code

## Commit Messages

Use conventional commits:

```
feat: add new animation support
fix: resolve scroll snapping issue
docs: improve usage guide
```

Prefixes:

- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation only
- `refactor`, `test`, `style`, `chore`

## Join the Team

We welcome long-term contributors!

- Regular PRs?
- Want to help review issues?
- Interested in maintaining?

Feel free to open a discussion or reach out — we’d love to collaborate.

**Thank you! Let’s build Agahi.js together.**
