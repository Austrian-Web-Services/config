/* global module */

const typescriptRules = {
  // conflict with prettier
  '@typescript-eslint/comma-dangle': 'off',

  // conflict with prettier
  '@typescript-eslint/indent': 'off',

  // improve readability
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'none',
        requireLast: false,
      },
    },
  ],

  // false positives when reutrn type is `void | Promise<void>`
  '@typescript-eslint/no-misused-promises': 'off',

  // disable due to false positives
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // conflict with prettier
  '@typescript-eslint/quotes': 'off',

  // disable semicolons
  '@typescript-eslint/semi': ['error', 'never'],

  // set to warn only
  '@typescript-eslint/strict-boolean-expressions': [
    'warn',
    {
      allowNumber: false,
      allowString: false,
    },
  ],

  // false positives for `libphonenumber-js`
  'import/no-named-as-default': 'off',

  // common cause of bugs due to unawareness of deletion
  'no-useless-return': 'off',

  // disable semicolons
  semi: ['error', 'never'],
}

module.exports = {
  extends: ['canonical', 'plugin:prettier/recommended'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    'package-lock.json',
    '*.lock',
    'package.json',
  ],
  overrides: [
    {
      extends: [
        'canonical/typescript',
        'canonical/typescript-type-checking',
        'plugin:prettier/recommended',
      ],
      files: '*.{ts,tsx}',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: typescriptRules,
    },
    {
      extends: [
        'canonical/jest',
        'canonical/typescript',
        'canonical/typescript-type-checking',
      ],
      files: '*.test.{ts,tsx}',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...typescriptRules,
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
  plugins: ['security'],
  rules: {
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

    // automatically creates template string literals
    'prefer-template': 'warn',

    // allow `Promise.then`
    'promise/prefer-await-to-then': 'off',
  },
}
