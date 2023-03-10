/* global module */

module.exports = {
  extends: ['./packages/eslint-config/index.js'],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: '**/infrastructure/**/*.ts',
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
    },
  ],
  root: true,
}
