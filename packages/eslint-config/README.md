# @atws/eslint-config

This package contains a base setups for eslint, relies on [gajus/eslint-config-canonical
](https://github.com/gajus/eslint-config-canonical) with some modifications.

## Usage

Install `eslint` and the package:

```bash
yarn add -D eslint @atws/eslint-config
```

Create a `.eslintrc.js` file in the root of your project and extend the base config.
Use the `overrides` property to extend the base config for specific files. Alternatively, you can create a separate `.eslintrc.js` file in the directory you want to extend the config for.

```js
/* global module */

module.exports = {
  extends: ['@atws/eslint-config',],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: '**/infrastructure/**/*.ts',
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
    },
  ],
  root: true,
}
```

## Variants

There are a few variants of the base config that can be used to extend the base config.

### CDK

Disable rules that conflict with common CDK patterns.

```js
{
  extends: ['@atws/eslint-config/cdk']
}
```

### React

Add rules for React projects.

```js
{
  extends: ['@atws/eslint-config/react']
}
```
