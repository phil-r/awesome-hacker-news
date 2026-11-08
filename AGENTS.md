# Agent instructions

This repository maintains a curated list of Hacker News projects, published as a
README and an npm package. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
contribution workflow.

## Source of truth

- `src/sources.js` contains the project data and is the npm package entry point.
  Add or update projects here, following the existing category and entry format.
- `README.md` is generated. Never update a listing only in the README.
- `src/generate-md.js` controls README formatting and introductory text. Make
  layout or copy changes there, not in the generated file.

## Making changes

- Keep changes focused and preserve the existing CommonJS JavaScript style.
- Include author details and source repository links when available, using the
  existing entry format.
- After changing project data or the generator, run from the repository root:

  ```sh
  npm run generate-md
  ```

- Review the generated diff and include `README.md` with the source changes.
  The generator sorts categories and projects alphabetically; manual sorting
  isn't needed.

## Verification

Node.js and npm are required. There are no dependencies to install.

- For JavaScript changes, run `node --check src/sources.js` and
  `node --check src/generate-md.js`.
- Regenerate the README and check that the intended entries and formatting appear.
- Run `git diff --check` before finishing.
- `npm test` is a placeholder, not an automated test suite.
