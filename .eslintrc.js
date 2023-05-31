module.exports = {
  extends: ['./packages/eslint-config/node.js'],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: '**/projen-config/**/*.ts',
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
    },
  ],
  root: true,
}
