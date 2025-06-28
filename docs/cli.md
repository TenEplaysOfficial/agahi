# CLI

The **Agahi CLI** provides commands to quickly scaffold and manage your documentation site.

## Installation

You can use the CLI by either installing it globally or using it via `npx`:

```bash
npm install -g agahi
# or
npx agahi init
```

---

## Commands

### init

Initializes a new Agahi project.

```bash
agahi init [name]
```

#### Arguments

- `name` (optional): Folder name for your project. If omitted, the current directory is used.

#### Behavior

- Clones the [starter template](https://github.com/tenelabs/agahi-starter) into the specified directory.
- Validates the project name.
- Ensures the target folder is empty (or doesn't exist).

#### Example Usages

```bash
# Clone into a new folder named "docs"
agahi init docs

# Clone into the current directory
agahi init
```

If the directory already exists and is **not empty**, initialization will be aborted with an error message.

---

## Notes

- All project names are validated to ensure they are suitable as folder/package names.
- Degit clones a clean copy without version control.

---

## Coming Soon

The CLI will support additional options such as:

- `--template` for choosing different starter templates
- Auto-generate sidebar
