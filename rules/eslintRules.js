// https://eslint.org/docs/rules/

module.exports = {
  'consistent-return': 'error',
  'func-names': ['error', 'as-needed'],
  'no-alert': 'off',
  'no-await-in-loop': 'warn',
  'no-console': 'warn',
  'no-debugger': 'off',
  'no-return-assign': ['error', 'always'],
  'no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
  'no-unused-expressions': [
    'error',
    {
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: 'res|next|^err',
      ignoreRestSiblings: true,
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  'space-before-function-paren': 'off',
  quotes: [
    'error',
    'single',
    {
      allowTemplateLiterals: false,
      avoidEscape: true,
    },
  ],
};
