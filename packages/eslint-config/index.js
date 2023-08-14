const {
  generalDisabledRules,
  prettierConflictRules,
} = require('./lib/overrides')

module.exports = {
  extends: ['canonical', 'prettier'],
  ignorePatterns: [
    'dist',
    'node_modules',
    'cdk.out',
    'package-lock.json',
    'yarn.lock',
    'coverage',
    'package.json',
  ],
  overrides: [
    {
      extends: ['canonical/json', 'prettier', 'plugin:jsonc/prettier'],
      files: '*.{json,jsonc,json5}',
    },
    {
      files: 'tsconfig*.json',
      rules: {
        'jsonc/no-comments': 0,
      },
    },
    {
      extends: ['canonical/yaml', 'prettier'],
      files: '*.{yml,yaml}',
    },
    {
      extends: ['canonical/graphql', 'prettier'],
      files: '*.graphql',
    },
    {
      extends: ['canonical', 'prettier'],
      files: '*.config.js',
      rules: {
        // allow @type
        'jsdoc/valid-types': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2_022,
  },
  rules: {
    ...generalDisabledRules,
    ...prettierConflictRules,
  },
}
