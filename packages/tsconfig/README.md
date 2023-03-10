# @atws/tsconfig

[![npm](https://img.shields.io/npm/v/@atws/tsconfig?style=flat-square)](https://www.npmjs.com/package/@atws/tsconfig)

This package contains a set of tsconfig.json files that can be used as a base for other projects.

## Usage

Install the package:

```bash
yarn add -D @atws/tsconfig
```

Create a tsconfig.json file in the root of your project and extend the base config:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@atws/tsconfig/base",
  "include": ["src/**/*.{ts,tsx}"]
}
```

## Variants

There are additional variants of the base config that can be used to extend the base config.

### React

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@atws/tsconfig/react",
  "include": ["src/**/*.{ts,tsx}"]
}
```
