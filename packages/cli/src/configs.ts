
export const sampleEslintConfig = `module.exports = {
  env: {
    node: true,
  },
  extends: ['@atws/eslint-config'],
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

export const recommendations = [
  'editorconfig.editorconfig',
  'esbenp.prettier-vscode',
  'rohit-gohri.format-code-action',
  'dbaeumer.vscode-eslint',
]

export const editorConfig = `# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false
`
