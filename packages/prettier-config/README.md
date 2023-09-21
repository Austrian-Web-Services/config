# @atws/prettier-config

[![npm](https://img.shields.io/npm/v/@atws/prettier-config?style=flat-square)](https://www.npmjs.com/package/@atws/prettier-config)

This package contains a simple base config for [prettier](https://prettier.io/).

## Usage

Install `prettier` and the package:

```bash
yarn add -D prettier @atws/prettier-config
```

Create a `.prettierrc.js` file in the root of your project and extend the base config.

```js
const preset = require('@atws/prettier-config')

/** @type {import("prettier").Options} */
const config = {
  ...preset,
  plugins: [...preset.plugins],
}

module.exports = config
```
