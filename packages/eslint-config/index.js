const typescriptRules = require('./lib/typescriptRules').typescriptRules

module.exports = {
  extends: [
    'canonical',
    'canonical/jsdoc',
    'canonical/regexp',
    'canonical/jest',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'cdk.out',
    'package-lock.json',
    'yarn.lock',
    'coverage',
  ],
  overrides: [
    {
      extends: ['canonical/typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
      rules: {
        ...typescriptRules,
      },
    },
    {
      files: '*.test.{ts,tsx}',
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      extends: ['canonical/json', 'prettier', 'plugin:jsonc/prettier'],
      files: '*.{json,jsonc,json5}',
    },
    {
      extends: ['prettier'],
      files: 'package.json',
      rules: {
        'jsonc/sort-keys': 'off',
      },
    },
    {
      files: 'tsconfig*.json',
      rules: {
        'jsonc/no-comments': 'off',
      },
    },
    {
      extends: ['canonical/yaml', 'prettier'],
      files: '*.yaml',
    },
    {
      extends: ['canonical/graphql', 'prettier'],
      files: '*.graphql',
    },
  ],
  plugins: ['prettier'],
  rules: {
    // conflict with prettier
    'arrow-body-style': 'off',

    // conflict with prettier
    'canonical/destructuring-property-newline': 'off',

    // conflict with prettier
    'canonical/export-specifier-newline': 'off',

    // not necessary, @typescript-eslint/naming-convention is used instead
    'canonical/id-match': 'off',

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
