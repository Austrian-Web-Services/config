# @atws/tsconfig

[![npm](https://img.shields.io/npm/v/@atws/tsconfig?style=flat-square)](https://www.npmjs.com/package/@atws/tsconfig)

This package contains a set of tsconfig.json files that can be used as a base for other projects. Typescript is configured as strict as possible, but still allows for some flexibility.

## Usage

Install the package:

```bash
yarn add -D @atws/tsconfig
```

Create a tsconfig.json file in the root of your project and extend the base config:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@atws/tsconfig/node18/base",
  "include": ["src/**/*.{ts}"]
}
```

## Variants

There are additional variants of the base config that can be used to extend the base config.

| Name                                    | Dir             | Description          |
| --------------------------------------- | --------------- | -------------------- |
| [Node 18](/node18/base.json)            | `node18/base`   | Base for Node 18     |
| [Node 18 / React](/node18/react.json)   | `node18/react`  | React using Node 18  |
| [Node 18 / Svelte](/node18/svelte.json) | `node18/svelte` | Svelte using Node 18 |
| [Node 16](/node16/base.json)            | `node16/base`   | Base for Node 16     |
| [Node 16 / React](/node16/react.json)   | `node16/react`  | React using Node 18  |
