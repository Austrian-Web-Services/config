const {
  generalDisabledRules,
  prettierConflictRules,
  typescriptRules,
} = require('./lib/overrides')

module.exports = {
  env: {
    node: true,
  },
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

    // prevents unexpected behaivour changes
    '@typescript-eslint/no-confusing-void-expression': 0,

    // allow kebap case
    'canonical/filename-match-regex': 0,

    // allows constructing without assignment
    'no-new': 0,

    // allows using process.env
    'node/no-process-env': 0,
  },
}
