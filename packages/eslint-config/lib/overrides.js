const prettierConflictRules = {
  '@babel/object-curly-spacing': 0,
  '@babel/semi': 0,
  '@typescript-eslint/comma-dangle': 0,
  '@typescript-eslint/indent': 0,
  '@typescript-eslint/no-extra-parens': 0,
  '@typescript-eslint/quotes': 0,
  '@typescript-eslint/semi': 0,
  '@typescript-eslint/space-before-function-paren': 0,
  'array-bracket-newline': 0,
  'array-element-newline': 0,
  'arrow-body-style': 0,
  'canonical/destructuring-property-newline': 0,
  'canonical/export-specifier-newline': 0,
  'canonical/import-specifier-newline': 0,
  'line-comment-position': 0,
  'no-extra-parens': 0,
  'no-inline-comments': 0,
  'object-curly-newline': 0,
  'operator-linebreak': 0,
  'prefer-arrow-callback': 0,
  'unicorn/template-indent': 0,
}

const generalDisabledRules = {
  // not necessary, @typescript-eslint/naming-convention is used instead
  'canonical/id-match': 0,

  // needs way to much time to process
  'import/no-cycle': 0,

  // reducing eslint runtime
  'import/no-deprecated': 0,

  // allows todo and fixme comments
  'no-warning-comments': 0,

  // automatically creates template string literals
  'prefer-template': 'warn',

  // allow `Promise.then`
  'promise/prefer-await-to-then': 0,
}

const typescriptRules = {
  // improve readability
  '@typescript-eslint/member-delimiter-style': 0,

  // false positives when reutrn type is `void | Promise<void>`
  '@typescript-eslint/no-misused-promises': 0,

  // disable due to false positives
  '@typescript-eslint/no-unnecessary-condition': 0,

  'id-length': [
    'error',
    {
      // for tRPC and zod
      exceptions: ['t', 'z', '_'],
    },
  ],

  // false positives for `libphonenumber-js`
  'import/no-named-as-default': 0,

  // common cause of bugs due to unawareness of deletion
  'no-useless-return': 0,

  // disable semicolons
  semi: ['error', 'never'],
}

module.exports = {
  generalDisabledRules,
  prettierConflictRules,
  typescriptRules,
}
