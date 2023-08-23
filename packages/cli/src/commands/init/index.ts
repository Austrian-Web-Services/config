/* eslint-disable canonical/filename-match-exported */
import { type InstallComponents } from '../../utils'
import {
  allowWrite,
  createConfigFiles,
  installEslint,
  installPrettier,
} from '../../utils'
import { Command, Flags } from '@oclif/core'
import { prompt } from 'inquirer'
import * as Listr from 'listr'
import { detectPackageManager } from 'nypm'

export default class Init extends Command {
  public static override description = 'Init @atws config setup'

  public static override examples = [`$ atws init`, `$ atws init -p yarn`]

  public static override flags = {
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

    const components = (
      (await prompt([
        {
          choices: [
            { checked: true, name: 'Prettier' },
            { checked: true, name: 'ESLint' },
            { checked: true, name: 'VSCode Settings' },
            { checked: true, name: 'EditorConfig' },
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
      ])) as { components: InstallComponents[] }
    ).components

    if (!force && !(await allowWrite('.eslintrc.js'))) {
      this.log('Aborting')
      return
    }

    if (!force && !(await allowWrite('.prettierrc.js'))) {
      this.log('Aborting')
      return
    }

    if (!force && !(await allowWrite('.editorconfig'))) {
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
                await installPrettier(context.packageManager)
                task.title = 'Installed Prettier'
              },
              title: 'Installing Prettier',
            })
          }

          if (components.includes('ESLint')) {
            installList.add({
              skip: () => !components.includes('ESLint'),
              task: async (_context, task) => {
                await installEslint(context.packageManager)
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
          createConfigFiles(components)
          task.title = 'Created config files'
        },
        title: 'Creating config files',
      },
    ])

    await tasks.run()
  }
}
