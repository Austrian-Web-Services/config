# @atws/eslint-config

[![npm](https://img.shields.io/npm/v/@atws/eslint-config?style=flat-square)](https://www.npmjs.com/package/@atws/eslint-config)

This package contains extensive eslint rulesets; it is based on [gajus/eslint-config-canonical
](https://github.com/gajus/eslint-config-canonical) and includes opinionated modifications.

## Usage

Install `eslint` and the package:

```bash
yarn add -D eslint @atws/eslint-config
```

In the root of your project, create a `.eslintrc.js` file and extend the base configuration.
To extend the base configuration for specific files, use the `overrides` property. You can also create a separate `.eslintrc.js` file in the directory where you want to extend the configuration.

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

### Projen

Disable rules that conflic with the [projen](https://projen.io) [jsii](https://github.com/aws/jsii) compiler.

```js
{
  extends: ['@atws/eslint-config/projen']
}
```

### React

Add rules for React projects.

```js
{
  extends: ['@atws/eslint-config/react']
}
```
