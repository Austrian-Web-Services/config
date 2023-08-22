export const sampleEslintConfig = `module.exports = {
  env: {
    node: true,
  },
  extends: ['@atws/eslint-config/index.js'],
  overrides: [
    {
      extends: ['@atws/eslint-config/typescript.js'],
      files: '*.ts',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
`

export const samplePrettierConfig = `module.exports = {
  ...require("@atws/prettier-config"),
}
`
