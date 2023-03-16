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
     * Type imports cause issues with the JSII compiler.
     */
    '@typescript-eslint/consistent-type-imports': 'off',
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
