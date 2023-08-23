const preset = require('@atws/prettier-config')

/** @type {import("prettier").Options} */
const config = {
  ...preset,
  plugins: [...preset.plugins],
}

module.exports = config
