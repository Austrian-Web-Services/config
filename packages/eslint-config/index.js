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
  '@typescript-eslint/semi': ['error', 'never'],

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
