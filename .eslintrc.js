module.exports = {
  env: {
    node: true,
  },
  extends: ['./packages/eslint-config/index.js'],
  overrides: [
    {
      extends: ['./packages/eslint-config/typescript.js'],
      files: '*.ts',
    },
    {
      extends: ['@atws/eslint-config/projen'],
      files: '**/projen-config/**/*.ts',
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
