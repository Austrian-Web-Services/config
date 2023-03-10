module.exports = {
  extends: [
    'canonical/typescript',
    'canonical/typescript-type-checking',
    'plugin:prettier/recommended',
  ],
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
    },
    {
      extends: ['canonical/jest'],
      files: '*.test.{ts,tsx}',
      parserOptions: {
        project: './tsconfig.json',
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
    // no semicolons
    '@babel/semi': ['error', 'never'],

    // conflict with prettier
    'canonical/destructuring-property-newline': 'off',

    // conflict with prettier
    'canonical/export-specifier-newline': 'off',

    // conflict with prettier
    'canonical/import-specifier-newline': 'off',

    // reducing eslint runtime
    'import/no-cycle': [2, { ignoreExternal: true, maxDepth: 1 }],

    // reducing eslint runtime
    'import/no-deprecated': 'off',

    // allows todo and fixme comments
    'no-warning-comments': 'off',

    // automatically creates template string literals
    'prefer-template': 'warn',

    // only warn on then/catch/finally
    'promise/prefer-await-to-then': 'warn',

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

    // no semicolons
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],

    // disable due to false positives
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // set to warn only
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowNumber: false,
        allowString: false,
      },
    ]
  },
}
