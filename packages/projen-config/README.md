# @atws/projen-config

[![npm](https://img.shields.io/npm/v/@atws/projen-config?style=flat-square)](https://www.npmjs.com/package/@atws/projen-config)

This package contains extensions for [projen](https://projen.io/).

## Usage

Install the package:

```bash
yarn add -D @atws/projen-config
```

Add to your `projenrc.js` file:

```js
const { awscdk } = require("projen")
const { PrettierConfig, EslintConfig, VscodeConfig } = require("@atws/projen-config")

const project = new awscdk.AwsCdkConstructLibrary({ ... })

new PrettierConfig(project)

new EslintConfig(project, {
  cdkFileRegex: "**/src/**/*.ts",
  reactFileRegex: "**/webapp/**/*.{ts,tsx}",
})

new VscodeConfig(project, {
  additionalSearchExclusion: {
    '**/public': true,
  },
})
```

## Features

### Setup [@atws/prettier-config](https://github.com/Austrian-Web-Services/config/tree/main/packages/prettier-config)

An opinionated base config for prettier. In contrast to the default config, it uses single quotes, adds a trailing comma to objects and arrays and does not use semicolons at the end.

```js
new PrettierConfig(project)
```

### Setup [@atws/eslint-config](https://github.com/Austrian-Web-Services/config/tree/main/packages/eslint-config)

Add an opinionated base config for eslint. It allows to specify the file regex for projects that use AWS CDK and/or React.

```js
new EslintConfig(project, {
  cdkFileRegex: "**/src/**/*.ts",
  reactFileRegex: "**/webapp/**/*.{ts,tsx}",
})
```

### Setup a VS Code workspace settings file

Add a `.vscode/settings.json` file to the project. It defines some standard search exclusions and enables `formatOnSave`.

```js
new VscodeConfig(project, {
  additionalSearchExclusion: {
    '**/public': true,
  },
})
```
