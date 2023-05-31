module.exports = {
  extends: [
    '@atws/eslint-config',
    'canonical/node',
    'plugin:security/recommended',
  ],
  rules: {},
  plugins: ['security'],
}
