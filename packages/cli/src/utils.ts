/* eslint-disable no-console */
/* eslint-disable node/no-sync */
import {
  editorConfig,
  recommendations,
  sampleEslintConfig,
  samplePrettierConfig,
} from './configs'
import * as chalk from 'chalk'
import { prompt } from 'inquirer'
import { type ListrTask } from 'listr'
import * as fs from 'node:fs'
import {
  detectPackageManager,
  type PackageManager,
  removeDependency,
} from 'nypm'
import { addDevDependency } from 'nypm'

export type InstallComponents =
  | 'EditorConfig'
  | 'ESLint'
  | 'Prettier'
  | 'VSCode Settings'

const packages = [
  'prettier',
  '@atws/prettier-config',
  '@atws/eslint-config',
  'eslint',
  '@typescript-eslint/parser',
]

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

export const cleanup = async (
  packageManager: PackageManager
): Promise<void> => {
  for (const pkg of packages) {
    await removeDependency(pkg, { packageManager, silent: true }).catch(
      () => {}
    )
  }
}

export const installEslint = async (
  packageManager: PackageManager
): Promise<void> => {
  await addDevDependency('eslint', {
    packageManager,
    silent: true,
  })
  await addDevDependency('@atws/eslint-config', {
    packageManager,
    silent: true,
  })
  await addDevDependency('@typescript-eslint/parser', {
    packageManager,
    silent: true,
  })
}

export const installPrettier = async (
  packageManager: PackageManager
): Promise<void> => {
  await addDevDependency('prettier', {
    packageManager,
    silent: true,
  })
  await addDevDependency('@atws/prettier-config', {
    packageManager,
    silent: true,
  })
}

export const createConfigFiles = (
  components: Readonly<InstallComponents[]>
) => {
  if (components.includes('Prettier')) {
    fs.writeFileSync('.eslintrc.js', sampleEslintConfig)
  }

  if (components.includes('ESLint')) {
    fs.writeFileSync('.prettierrc.js', samplePrettierConfig)
  }

  let extensionsSettings: Record<string, unknown> = {}
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

  try {
    if (fs.existsSync('.vscode/extensions.json')) {
      extensionsSettings = JSON.parse(
        fs.readFileSync('.vscode/extensions.json').toString() ?? '{}'
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

  if (components.includes('VSCode Settings')) {
    if (!fs.existsSync('.vscode')) {
      fs.mkdirSync('.vscode')
    }

    const existingRecommendations: unknown[] = Array.isArray(
      extensionsSettings.recommendations
    )
      ? extensionsSettings.recommendations
      : []

    extensionsSettings.recommendations = [
      ...new Set([...existingRecommendations, ...recommendations]),
    ]

    fs.writeFileSync(
      '.vscode/settings.json',
      JSON.stringify(vscodeSettings, null, 2)
    )

    fs.writeFileSync(
      '.vscode/extensions.json',
      JSON.stringify(extensionsSettings, null, 2)
    )
  }

  if (components.includes('EditorConfig')) {
    fs.writeFileSync('.editorconfig', editorConfig)
  }
}

export const detectPackageManagerTask: ListrTask = {
  task: async (context, task) => {
    context.packageManager = await detectPackageManager(process.cwd(), {
      includeParentDirs: true,
    })

    if (context.packageManager) {
      task.title = `Detected ${context.packageManager?.name}`
    } else {
      throw new Error('No package manager detected, aborting')
    }
  },
  title: 'Detecting package manager',
}

export const lookupDependencyVersion = async (
  dependency: string,
  props?: {
    prod?: boolean
  }
) => {
  const packageJson = JSON.parse(fs.readFileSync('package.json').toString())

  const version =
    packageJson[props?.prod ? 'dependencies' : 'devDependencies']?.[dependency]

  if (typeof version !== 'string') return undefined

  return {
    name: dependency,
    version,
  }
}

export const lookupVersions = async () => {
  const prettierVersion = await lookupDependencyVersion('prettier')
  const eslintVersion = await lookupDependencyVersion('eslint')
  const prettierConfigVersion = await lookupDependencyVersion(
    '@atws/prettier-config'
  )
  const eslintConfigVersion = await lookupDependencyVersion(
    '@atws/eslint-config'
  )
  const eslintParserVersion = await lookupDependencyVersion(
    '@typescript-eslint/parser'
  )

  return {
    eslintConfigVersion,
    eslintParserVersion,
    eslintVersion,
    prettierConfigVersion,
    prettierVersion,
  }
}

export const printUpdateMessage = async (
  initialVersions: Awaited<ReturnType<typeof lookupVersions>>
) => {
  const newVersions = await lookupVersions()

  const messages: string[] = []

  // loop through newVersions and initialVersions
  // print out the differences
  // if there are no differences, print out a message saying that everything is up to date

  for (const [key, value] of Object.entries(newVersions)) {
    const oldValue = initialVersions[key as keyof typeof initialVersions]

    if (oldValue?.version !== value?.version && value?.name) {
      // print out the difference, add colors with chalk
      messages.push(
        `Updated ${chalk.blue(
          value.name
        )}\t${oldValue?.version}\t➜\t${chalk.green(value.version)}`
      )
    }
  }

  if (messages.length === 0) {
    messages.push('Everything was up to date')
  }

  return messages
}
