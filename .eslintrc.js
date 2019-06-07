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
    "prettier",
    "react-hooks"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2019,
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
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