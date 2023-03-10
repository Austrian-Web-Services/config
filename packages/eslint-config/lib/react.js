module.exports = {
  extends: [
    '@atws/eslint-config',
  ],
  rules: {
    // allows useEffect to be at the top
    '@typescript-eslint/no-use-before-define': 'off',

    // allows className and style as component props
    'react/forbid-component-props': 'off',
  },
  settings: {
    react: {
      version: '18.0.0',
    },
  },
}
