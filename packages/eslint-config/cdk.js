/* global module */

module.exports = {
  extends: ['@atws/eslint-config'],
  rules: {
    // prevents unexpected behaivour changes
    '@typescript-eslint/no-confusing-void-expression': 'off',

    // allow kebap case
    'canonical/filename-match-regex': 'off',

    // allows imports with underscores
    'canonical/id-match': 'off',

    // allows constructing without assignment
    'no-new': 'off',
  },
}
