# @atws/cli

[![npm](https://img.shields.io/npm/v/@atws/cli?style=flat-square)](https://www.npmjs.com/package/@atws/cli)

Quickly setup `@atws` config packages in your project.

<!-- toc -->
* [@atws/cli](#atwscli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @atws/cli
$ atws COMMAND
running command...
$ atws (--version)
@atws/cli/0.0.0 win32-x64 node-v18.15.0
$ atws --help [COMMAND]
USAGE
  $ atws COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`atws help [COMMANDS]`](#atws-help-commands)
* [`atws init`](#atws-init)

## `atws help [COMMANDS]`

Display help for atws.

```
USAGE
  $ atws help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for atws.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `atws init`

Init @atws config setup

```
USAGE
  $ atws init [-f]

FLAGS
  -f, --force  Overwrite existing config files

DESCRIPTION
  Init @atws config setup

EXAMPLES
  $ atws init

  $ atws init -p yarn
```

_See code: [dist/commands/init/index.ts](https://github.com/Austrian-Web-Services/config/blob/v0.0.0/dist/commands/init/index.ts)_
<!-- commandsstop -->
