# @atws/eslint-config

[![npm](https://img.shields.io/npm/v/@atws/eslint-config?style=flat-square)](https://www.npmjs.com/package/@atws/eslint-config)

This package contains extensive eslint rulesets; it is based on [gajus/eslint-config-canonical
](https://github.com/gajus/eslint-config-canonical) and includes opinionated modifications.

## Usage

Install `eslint` and the package:

```bash
yarn add -D eslint @atws/eslint-config @typescript-eslint/parser@^5.62.0
```

In the root of your project, create a `.eslintrc.js` file and extend the base configuration.

To extend the base configuration for specific files, use the `overrides` property. You can also create a separate `.eslintrc.js` file in the directory where you want to extend the configuration.

Create a `.eslintrc.js` in your project root

```js
/* global module */

module.exports = {
  extends: ['@atws/eslint-config'],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: 'infrastructure/**/*.ts',
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
    },
    {
      extends: ['@atws/eslint-config/typescript'],
      files: 'backend/**/*.ts',
    },
  ],
  root: true,
}
```

## Integration with prettier-eslint

Create a `.prettierrc.js` in your project root. You can use [@atws/prettier-config](https://www.npmjs.com/package/@atws/prettier-config) to get started with prettier.

Don't forget to install the [Prettier ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint).

```bash
yarn add -D prettier-eslint prettier@^2.8.8 @atws/prettier-config
```

```js
module.exports = {
  ...require('@atws/prettier-config'),
}
```

## Variants

There are a few variants of the base config that can be used to extend the base config.

### Typescript

Add rules for typescript projects.

```js
{
  extends: ['@atws/eslint-config/typescript']
}
```

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
