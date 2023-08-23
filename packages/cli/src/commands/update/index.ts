/* eslint-disable canonical/filename-match-exported */
import {
  detectPackageManagerTask,
  type InstallComponents,
  lookupVersions,
  printUpdateMessage,
} from '../../utils'
import { installEslint, installPrettier } from '../../utils'
import { Command } from '@oclif/core'
import * as Listr from 'listr'

export default class Update extends Command {
  public static override description = 'Update @atws config setup'

  public static override examples = [`$ atws update`]

  public async run() {
    const components: InstallComponents[] = []

    const initialVersions = await lookupVersions()

    if (initialVersions.eslintConfigVersion) {
      components.push('ESLint')
    }

    if (initialVersions.prettierConfigVersion) {
      components.push('Prettier')
    }

    const logMessage: string[] = []

    const tasks = new Listr([
      detectPackageManagerTask,
      {
        task: async (context, rootTask) => {
          const installList = new Listr([])

          if (components.includes('Prettier')) {
            installList.add({
              skip: () => !components.includes('Prettier'),
              task: async (_context, task) => {
                await installPrettier(context.packageManager)
                task.title = 'Updated Prettier'
              },
              title: 'Updating Prettier',
            })
          }

          if (components.includes('ESLint')) {
            installList.add({
              skip: () => !components.includes('ESLint'),
              task: async (_context, task) => {
                await installEslint(context.packageManager)
                task.title = 'Updated ESLint'
                rootTask.title = 'Updated dependencies'
              },
              title: 'Updating ESLint',
            })
          }

          if (components.length === 0) {
            installList.add({
              task: () => (rootTask.title = 'No dependencies installed'),

              title: 'Finshing',
            })
          } else {
            installList.add({
              task: async () => {
                logMessage.push(...(await printUpdateMessage(initialVersions)))

                rootTask.title = 'Installed dependencies'
              },
              title: '',
            })
          }

          return installList
        },
        title: 'Updating dependencies',
      },
    ])

    await tasks.run()

    for (const message of logMessage) {
      this.log(message)
    }
  }
}
