const {
  generalDisabledRules,
  prettierConflictRules,
  typescriptRules,
  typescriptDeclarationOverride,
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
  overrides: [typescriptDeclarationOverride],
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
  },
}
