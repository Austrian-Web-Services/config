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
  },
}