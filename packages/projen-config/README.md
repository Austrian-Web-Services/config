# @atws/projen-config

[![npm](https://img.shields.io/npm/v/@atws/projen-config?style=flat-square)](https://www.npmjs.com/package/@atws/projen-config)

This package contains a simple base config for [projen](https://projen.io/).

## Usage

Install the package:

```bash
yarn add -D @atws/projen-config
```

Add to your `projenrc.js` file:

```js
const { awscdk } = require("projen");
const { PrettierConfig } = require("@atws/projen-config");

const project = new awscdk.AwsCdkConstructLibrary({ ... });

PrettierConfig(project);
```
