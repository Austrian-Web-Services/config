# @atws/eslint-config

This package contains a base setups for eslint.

## Usage

Install the package:

```bash
yarn add -D eslint @atws/eslint-config
```

Create a `.eslintrc.js` file in the root of your project and extend the base config.
Use the `overrides` property to extend the base config for specific files.

```js
/* global module */

module.exports = {
  extends: [
    '@atws/eslint-config',
  ],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: '**/infrastructure/**/*.ts'
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx'
    }
  ],
  root: true,
}
```

## Variants

There are a few variants of the base config that can be used to extend the base config.

