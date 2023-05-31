/* global module */

const typescriptRules = {
  // conflict with prettier
  '@typescript-eslint/comma-dangle': 'off',

  // conflict with prettier
  '@typescript-eslint/indent': 'off',

  // improve readability
  '@typescript-eslint/member-delimiter-style': 'off',

  // conflict with prettier
  '@typescript-eslint/no-extra-parens': 'off',

  // false positives when reutrn type is `void | Promise<void>`
  '@typescript-eslint/no-misused-promises': 'off',

  // disable due to false positives
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // conflict with prettier
  '@typescript-eslint/quotes': 'off',

  // conflict with prettier
  '@typescript-eslint/space-before-function-paren': 'off',

  // false positives for `libphonenumber-js`
  'import/no-named-as-default': 'off',

  // common cause of bugs due to unawareness of deletion
  'no-useless-return': 'off',

  // disable semicolons
  semi: ['error', 'never'],
}

module.exports = {
  extends: [
    'canonical',
    'canonical/jsdoc',
    'canonical/regexp',
    'canonical/typescript',
    'canonical/jest',
    'prettier',
    'plugin:security/recommended',
  ],
  ignorePatterns: [
    'package.json',
    'dist',
    'node_modules',
    'cdk.out',
    'package-lock.json',
    'yarn.lock',
    'coverage',
  ],
  overrides: [
    {
      files: '*.test.{ts,tsx}',
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
    {
      extends: ['canonical/json', 'plugin:jsonc/prettier'],
      files: '*.{json,jsonc,json5}',
    },
    {
      extends: ['canonical/yaml'],
      files: '*.yaml',
    },
    {
      extends: ['canonical/graphql'],
      files: '*.graphql',
    },
  ],
  plugins: ['security', 'prettier'],
  rules: {
    ...typescriptRules,
    // conflict with prettier
    'arrow-body-style': 'off',

    // conflict with prettier
    'canonical/destructuring-property-newline': 'off',

    // conflict with prettier
    'canonical/export-specifier-newline': 'off',

    // conflict with prettier
    'canonical/import-specifier-newline': 'off',

    // reducing eslint runtime
    'import/no-deprecated': 'off',

    // allows todo and fixme comments
    'no-warning-comments': 'off',

    // conflict with prettier
    'prefer-arrow-callback': 'off',

    // automatically creates template string literals
    'prefer-template': 'warn',

    // configure prettier
    'prettier/prettier': ['error'],

    // allow `Promise.then`
    'promise/prefer-await-to-then': 'off',
  },
  settings: {
    jest: {
      version: 29,
    },
  },
}
