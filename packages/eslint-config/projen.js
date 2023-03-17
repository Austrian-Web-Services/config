/* global module */

module.exports = {
  extends: ['@atws/eslint-config/cdk'],
  parserOptions: {
    project: './tsconfig.dev.json',
  },
  rules: {
    /**
     * JSII only supports types via the `interface` keyword.
     */
    '@typescript-eslint/consistent-type-definitions': 'off',
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
    'canonical/prefer-inline-type-import': 'off',
    /**
     * Dependencies like `aws-sdk` are available in the Lambda runtime.
     * In projen projects, we use `devDependencies` to indicate that a
     * dependency is only used in development (e.g. tests).
     *
     * Upon compilation, projen will complain anyway if a depencies are
     * not declared correctly.
     */
    'import/no-extraneous-dependencies': 'off',
  },
}
