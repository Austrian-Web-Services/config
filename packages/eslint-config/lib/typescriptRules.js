const typescriptRules = {
  // conflict with prettier
  '@typescript-eslint/comma-dangle': 'off',

  // conflict with prettier
  '@typescript-eslint/indent': 'off',

  // improve readability
  '@typescript-eslint/member-delimiter-style': 'off',

  // conflict with prettier
  '@typescript-eslint/no-extra-parens': 'off',

  // false positives when reutrn type is `void | Promise<void>`
  '@typescript-eslint/no-misused-promises': 'off',

  // disable due to false positives
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // conflict with prettier
  '@typescript-eslint/quotes': 'off',

  // conflict with prettier
  '@typescript-eslint/semi': ['error', 'never'],

  // conflict with prettier
  '@typescript-eslint/space-before-function-paren': 'off',

  // false positives for `libphonenumber-js`
  'import/no-named-as-default': 'off',

  // common cause of bugs due to unawareness of deletion
  'no-useless-return': 'off',

  // disable semicolons
  semi: ['error', 'never'],
}

module.exports = {
  typescriptRules,
}
