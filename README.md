[![Austrian Web Services / Config](logo.png)](https://github.com/Austrian-Web-Services/config)

[![🚀 Release](https://github.com/Austrian-Web-Services/config/actions/workflows/release.yml/badge.svg?event=push)](https://github.com/Austrian-Web-Services/config/actions/workflows/release.yaml)
[![Maintainer](https://img.shields.io/badge/Mainainer-%40NimmLor-blue)](https://img.shields.io/badge/Maintainer-%40NimmLor-blues)

<h3 align="center">An opinionated collection of configuration files</h3>

---

This repository, organized as a yarn monorepo, includes an assortment of configuration files that can be used in other projects.

## Quickstart

Install prettier, eslint and VSCode settings using the cli:

```properties
npx @atws/cli init
```

## Packages

| Package                                            | Description                                                                           | Downloads                                                                                                                                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@atws/cli](/packages/cli)                    | Setup atws config files with ease                                                     | [![npm](https://img.shields.io/npm/v/@atws/cli?style=flat-square)](https://www.npmjs.com/package/@atws/cli) [![npm](https://img.shields.io/npm/dm/@atws/cli?color=%23175ed1&style=flat-square)](https://www.npmjs.com/package/@atws/cli)                                                 |
| [@atws/tsconfig](/packages/tsconfig)               | Opinionated tsconfig setup                                                            | [![npm](https://img.shields.io/npm/v/@atws/tsconfig?style=flat-square)](https://www.npmjs.com/package/@atws/tsconfig) [![npm](https://img.shields.io/npm/dm/@atws/tsconfig?color=%23175ed1&style=flat-square)](https://www.npmjs.com/package/@atws/tsconfig)                             |
| [@atws/eslint-config](/packages/eslint-config)     | Extensive eslint ruleset with optimized variants for AWS CDK and React.js             | [![npm](https://img.shields.io/npm/v/@atws/eslint-config?style=flat-square)](https://www.npmjs.com/package/@atws/eslint-config) [![npm](https://img.shields.io/npm/dm/@atws/eslint-config?color=%23175ed1&style=flat-square)](https://www.npmjs.com/package/@atws/eslint-config)         |
| [@atws/prettier-config](/packages/prettier-config) | Simple prettier base configuration                                                    | [![npm](https://img.shields.io/npm/v/@atws/prettier-config?style=flat-square)](https://www.npmjs.com/package/@atws/prettier-config) [![npm](https://img.shields.io/npm/dm/@atws/prettier-config?color=%23175ed1&style=flat-square)](https://www.npmjs.com/package/@atws/prettier-config) |
| [@atws/projen-config](/packages/projen-config)     | Extensions for [projen](https://projen.io) to use custom `@atws` packages and configs | [![npm](https://img.shields.io/npm/v/@atws/projen-config?style=flat-square)](https://www.npmjs.com/package/@atws/projen-config) [![npm](https://img.shields.io/npm/dm/@atws/projen-config?color=%23175ed1&style=flat-square)](https://www.npmjs.com/package/@atws/projen-config)         |

## Scripts

| Script                                        | Description                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| [atws-shell-theme](/scripts/atws-shell-theme) | Make your shell look nice, a theme for [oh-my-posh](https://ohmyposh.dev) |

## VSCode Extension Packs

| Extension Pack                                                                                        | Description                                                  |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [atws-core-extensions](https://marketplace.visualstudio.com/items?itemName=atws.atws-core-extensions) | A collection of essential extensions                         |
| [atws-full-extensions](https://marketplace.visualstudio.com/items?itemName=atws.atws-full-extensions) | A collection of extensions that are useful for most projects |
