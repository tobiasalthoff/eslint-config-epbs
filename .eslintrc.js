const eslintRules = require('./rules/eslintRules');
const importRules = require('./rules/importRules');
const prettierRules = require('./rules/prettierRules');
const jsxRules = require('./rules/jsxRules');
const reactRules = require('./rules/reactRules');
const reactHooksRules = require('./rules/reactHooksRules');

module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react-hooks",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es2020": true,
    "node": true,
    "worker": true,
    "jest": true,
    "mongo": true,
    "serviceworker": true,
  },
  "rules": {
    ...eslintRules,
    ...importRules,
    ...prettierRules,
    ...jsxRules,
    ...reactRules,
    ...reactHooksRules,
  },
};