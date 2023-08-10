const {
  generalDisabledRules,
  prettierConflictRules,
  typescriptRules,
} = require('./lib/overrides')

module.exports = {
  extends: [
    'canonical',
    'canonical/node',
    'canonical/jsdoc',
    'canonical/regexp',
    'canonical/typescript',
    'canonical/typescript-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...prettierConflictRules,
    ...generalDisabledRules,
    ...typescriptRules,

    // prevents unexpected behaivour changes
    '@typescript-eslint/no-confusing-void-expression': 0,

    // allow kebap case
    'canonical/filename-match-regex': 0,

    // allows constructing without assignment
    'no-new': 0,

    /**
     * JSII only supports types via the `interface` keyword.
     */
    '@typescript-eslint/consistent-type-definitions': 0,
    /**
     * Inline type imports cause issues with the JSII compiler.
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    /**
     * Disable autofix that uses unsupported inline type imports.
     */
    'canonical/prefer-inline-type-import': 0,
    /**
     * Dependencies like `aws-sdk` are available in the Lambda runtime.
     * In projen projects, we use `devDependencies` to indicate that a
     * dependency is only used in development (e.g. tests).
     *
     * Upon compilation, projen will complain anyway if a depencies are
     * not declared correctly.
     */
    'import/no-extraneous-dependencies': 0,
  },
}
