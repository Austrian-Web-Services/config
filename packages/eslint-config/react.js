/* global module */

module.exports = {
  extends: [
    '@atws/eslint-config',
    'canonical/react',
    'canonical/jsx-a11y',
    'plugin:security/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // allows useEffect to be at the top
    '@typescript-eslint/no-use-before-define': 'off',

    // allows className and style as component props
    'react/forbid-component-props': 'off',

    // conflict with prettier
    'react/jsx-curly-newline': 'off',

    // conflict with prettier
    'react/jsx-indent': 'off',

    // missing deps in hooks will display a warning instead of an error
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: '18.0.0',
    },
  },
}
