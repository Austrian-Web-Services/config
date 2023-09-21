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

Create a `.eslintrc.js` in your project root

```js
/* global module */

module.exports = {
  extends: ['@atws/eslint-config'],
  overrides: [
    {
      extends: ['@atws/eslint-config/cdk'],
      files: 'infrastructure/**/*.ts',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: `${__dirname}/infrastructure/cdk-backend`,
      },
    },
    {
      extends: ['@atws/eslint-config/react'],
      files: '*.tsx',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    {
      extends: ['@atws/eslint-config/typescript'],
      files: 'backend/**/*.ts',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: `${__dirname}/backend`,
      },
    },
  ],
  root: true,
}
```

## Integration with prettier

Create a `.prettierrc.js` in your project root. You can use [@atws/prettier-config](https://www.npmjs.com/package/@atws/prettier-config) to get started with prettier.

Previously in v2, we used prettier as an eslint plugin. This is no longer the case. We now use prettier as a standalone tool and run it before the eslint fixer. This means that prettier will fix all formatting issues and eslint will fix all linting issues.

```properties
yarn add -D prettier @atws/prettier-config
```

`.prettierrc.js`

```js
const preset = require('@atws/prettier-config')

/** @type {import("prettier").Options} */
const config = {
  ...preset,
}

module.exports = config
```

To run prettier before eslint you need to install the [Format Code Action
VSCode extension](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action) and add the following to your `.vscode/settings.json` file.

```json
{
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
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

### React

Add rules for React projects.

```js
{
  extends: ['@atws/eslint-config/react']
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
