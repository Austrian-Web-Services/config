# @atws/projen-config

[![npm](https://img.shields.io/npm/v/@atws/projen-config?style=flat-square)](https://www.npmjs.com/package/@atws/projen-config)

This package contains extensions for [projen](https://projen.io/).

## Usage

Install the package:

```bash
yarn add -D @atws/projen-config
```

Add to your `.projenrc.ts` file:

```ts
import { awscdk } from 'projen'
import {
  PrettierConfig,
  EslintConfig,
  VscodeConfig,
  GitConfig,
} from "@atws/projen-config"

const project = new awscdk.AwsCdkConstructLibrary({ 
  devDeps: ["@atws/projen-config"],
})

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

new GitConfig(project)
```

## Features

### Setup [@atws/prettier-config](https://github.com/Austrian-Web-Services/config/tree/main/packages/prettier-config)

An opinionated base config for prettier. In contrast to the default config, it uses single quotes, adds a trailing comma to objects and arrays and does not use semicolons at the end.

```ts
new PrettierConfig(project)
```

### Setup [@atws/eslint-config](https://github.com/Austrian-Web-Services/config/tree/main/packages/eslint-config)

Add an opinionated base config for eslint. It allows to specify the file regex for projects that use AWS CDK and/or React.

```ts
new EslintConfig(project, {
  cdkFileRegex: "**/src/**/*.ts",
  reactFileRegex: "**/webapp/**/*.{ts,tsx}",
})
```

### Setup a VS Code workspace settings file

Add a `.vscode/settings.json` and `.vscode/extensions.json` file to the project. It defines some standard search exclusions and enables `formatOnSave`. The extensions file is used to recommend extensions that should be installed for the project.

```ts
new VscodeConfig(project, {
  additionalSearchExclusion: {
    '**/public': true,
  },
  additionalSettings: {
    'editor.stickyScroll.enabled': true,
  },
  vscodeExtensions: {
    addCdkExtensions: true,
    addCoreExtensions: true,
    additionalExtensions: ['ms-azuretools.vscode-docker'],
    addNodeExtensions: true,
    addProductivityExtensions: true,
    addReactExtensions: true,
    addTailwindCSSExtensions: true,
  },
})
```

### Setup a `.gitattributes` file

Modify the `.gitattributes` file to use LF line endings for all files, use binary encoding and treat VSCode settings files as JSON5.

```ts
new GitConfig(project, {
  gitAttributes: {
    additionalLines: [
      {
        glob: '/packages/api/generated/**',
        attribute: 'linguist-generated',
      },
    ],
  },
})
```
