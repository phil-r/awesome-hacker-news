# Contributing

Thanks for helping improve awesome-hacker-news!

## Adding or updating a project

[`src/sources.js`](src/sources.js) is the source of truth for the list and is also
published in the npm package. `README.md` is generated from it, so **don't edit the
README alone**: those changes will be overwritten the next time it is generated.

1. Add or update the project in the appropriate category in `src/sources.js`.
   Follow the format of the existing entries, including the project name, URL,
   and author details where available.
2. With Node.js and npm installed, regenerate the README from the repository root:

   ```sh
   npm run generate-md
   ```

   The generator sorts categories and projects alphabetically.
3. Review the generated `README.md` and include both `src/sources.js` and
   `README.md` in your pull request.

To change the README's introductory text or formatting, edit
[`src/generate-md.js`](src/generate-md.js) and run the same command rather than
editing the generated file directly.
