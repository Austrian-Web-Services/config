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
  },
}
