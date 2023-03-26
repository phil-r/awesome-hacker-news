const fs = require('fs');
const { sources } = require('./sources');

let readme = `
# awesome-hacker-news
[![NPM version](https://img.shields.io/npm/v/awesome-hacker-news.svg)](https://www.npmjs.com/package/awesome-hacker-news)

:newspaper: More awesome hacker news!

---
`;

const authorString = author => {
  if (!author) return '';
  const { name, url } = author;
  return url ? `by [${name}](${url})` : `by ${name}`;
};

sources.sort((a, b) => a.name.localeCompare(b.name)).forEach(({ name, items }) => {
  readme += `\n## ${name}\n\n`;
  items.sort((a, b) => a.name.localeCompare(b.name)).forEach(({ name, url, author }) => {
    readme += `- [${name}](${url}) ${authorString(author)}\n`;
  });
});

fs.writeFile('./README.md', readme, err => {
  if (err) {
    return console.error(err);
  }

  console.log('The readme was saved!');
});
