/* eslint-disable node/no-sync */
/* eslint-disable canonical/filename-match-exported */
import { Command, Flags } from '@oclif/core'
import { prompt } from 'inquirer'
import * as Listr from 'listr'
import * as fs from 'node:fs'
import { type PackageManager } from 'nypm'
import { addDevDependency, detectPackageManager, removeDependency } from 'nypm'

const sampleEslintConfig = `module.exports = {
  env: {
    node: true,
  },
  extends: ['@atws/eslint-config/index.js'],
  overrides: [
    {
      extends: ['@atws/eslint-config/typescript.js'],
      files: '*.ts',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
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
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
`

const samplePrettierConfig = `module.exports = {
  ...require("@atws/prettier-config"),
}
`

const packages = [
  'prettier',
  '@atws/prettier-config',
  '@atws/eslint-config',
  'eslint',
  '@typescript-eslint/parser',
]

export const cleanup = async (
  packageManager: PackageManager
): Promise<void> => {
  for (const pkg of packages) {
    await removeDependency(pkg, { packageManager, silent: true }).catch(
      () => {}
    )
  }
}

export const allowWrite = async (filename: string) => {
  if (fs.existsSync(`${filename}`)) {
    const { overwrite } = (await prompt([
      {
        default: false,
        message: `Overwrite existing ${filename}?`,
        name: 'overwrite',
        type: 'confirm',
      },
    ])) as { overwrite: boolean }

    return overwrite
  }

  return true
}

export default class Init extends Command {
  public static override description = 'Init @atws config setup'

  public static override examples = [`$ atws init`, `$ atws init -p yarn`]

  public static override flags = {
    // packageManager: Flags.string({
    //   char: 'p',
    //   description: 'Package manager to use',
    //   options: ['npm', 'yarn', 'pnpm'],
    //   required: false,
    // }),
    force: Flags.boolean({
      char: 'f',
      description: 'Overwrite existing config files',
    }),
  }

  public static override args = {}

  public async run() {
    const {
      flags: { force },
    } = await this.parse(Init)

    const packageManager = await detectPackageManager(process.cwd(), {
      includeParentDirs: true,
    })

    if (!packageManager) {
      throw new Error('No package manager detected')
    }

    this.log(`Installing ${packageManager.name} dependencies`)

    const { components } = (await prompt([
      {
        choices: [
          { checked: true, name: 'Prettier' },
          { checked: true, name: 'ESLint' },
        ],
        message: 'Which components would you like to include?',
        name: 'components',
        type: 'checkbox',
        validate: (answer) => {
          if (answer.length < 1) {
            return 'You must choose at least one component.'
          }

          return true
        },
      },
    ])) as { components: Array<'ESLint' | 'Prettier'> }

    if (!force && !(await allowWrite('.eslintrc.js'))) {
      this.log('Aborting')
      return
    }

    if (!force && !(await allowWrite('.prettierrc.js'))) {
      this.log('Aborting')
      return
    }

    const tasks = new Listr([
      {
        task: async (context, task) => {
          context.packageManager = await detectPackageManager(process.cwd(), {
            includeParentDirs: true,
          })

          task.title = `Detected ${context.packageManager?.name}`
        },
        title: 'Detecting package manager',
      },
      {
        task: async (context, rootTask) => {
          const installList = new Listr([])

          if (components.includes('Prettier')) {
            installList.add({
              skip: () => !components.includes('Prettier'),
              task: async (_context, task) => {
                await addDevDependency('prettier', {
                  packageManager: context.packageManager,
                  silent: true,
                })
                await addDevDependency('@atws/prettier-config', {
                  packageManager: context.packageManager,
                  silent: true,
                })
                task.title = 'Installed Prettier'
              },
              title: 'Installing Prettier',
            })
          }

          if (components.includes('ESLint')) {
            installList.add({
              skip: () => !components.includes('ESLint'),
              task: async (_context, task) => {
                await addDevDependency('eslint', {
                  packageManager: context.packageManager,
                  silent: true,
                })
                await addDevDependency('@atws/eslint-config', {
                  packageManager: context.packageManager,
                  silent: true,
                })
                await addDevDependency('@typescript-eslint/parser', {
                  packageManager: context.packageManager,
                  silent: true,
                })
                task.title = 'Installed ESLint'
                rootTask.title = 'Installed dependencies'
              },
              title: 'Installing ESLint',
            })
          }

          return installList
        },
        title: 'Installing dependencies',
      },
      {
        task: async (_context, task) => {
          task.title = 'Created config files'
          if (components.includes('Prettier')) {
            fs.writeFileSync('.eslintrc.js', sampleEslintConfig)
          }

          if (components.includes('ESLint')) {
            fs.writeFileSync('.prettierrc.js', samplePrettierConfig)
          }

          let vscodeSettings: Record<string, unknown> = {}
          try {
            if (fs.existsSync('.vscode')) {
              vscodeSettings = JSON.parse(
                fs.readFileSync('.vscode/settings.json').toString() ?? '{}'
              )
            }
          } catch {
            /* empty */
          }

          const codeActions: string[] = []

          if (components.includes('Prettier')) {
            codeActions.push('source.fixAll.format')
          }

          if (components.includes('ESLint')) {
            vscodeSettings['editor.defaultFormatter'] = 'esbenp.prettier-vscode'
            vscodeSettings['eslint.execArgv'] = ['--max-old-space-size=16384']
            vscodeSettings['eslint.validate'] = [
              'javascript',
              'javascriptreact',
              'json',
              'typescript',
              'typescriptreact',
              'yaml',
            ]
            codeActions.push('source.fixAll.eslint')
          }

          vscodeSettings['editor.codeActionsOnSave'] = codeActions

          if (!fs.existsSync('.vscode')) {
            fs.mkdirSync('.vscode')
          }

          fs.writeFileSync(
            '.vscode/settings.json',
            JSON.stringify(vscodeSettings, null, 2)
          )
        },
        title: 'Creating config files',
      },
    ])

    await tasks.run()
  }
}
