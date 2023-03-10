const typescriptRules = {
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

  // disable due to false positives
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // no semicolons
  '@typescript-eslint/semi': ['error', 'never'],

  // set to warn only
  '@typescript-eslint/strict-boolean-expressions': [
    'warn',
    {
      allowNumber: false,
      allowString: false,
    },
  ],

  // no semicolons
  semi: ['error', 'never'],
}

// eslint-disable-next-line no-undef
module.exports = {
  extends: ['canonical', 'plugin:prettier/recommended'],
  overrides: [
    {
      extends: [
        'canonical/typescript',
        'canonical/typescript-type-checking',
        'plugin:prettier/recommended',
      ],
      files: '*.ts',
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
      rules: typescriptRules,
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
  },
}