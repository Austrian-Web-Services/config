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

    // allow import of css files and locales
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.less', '*locale*'],
      },
    ],

    // Disabled due to bug caused when using a type for the function handler
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: '18.0.0',
    },
  },
}
