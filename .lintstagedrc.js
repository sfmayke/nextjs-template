const path = require('path');

const buildEslintCommand = (filenames) =>
  `npm run test:eslint -- --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'npm run test:prettier --'],
  '*.{css, scss}': 'npm run test:stylelint --',
};
