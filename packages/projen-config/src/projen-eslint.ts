import { type AnyProject } from './types'
import {
  DependencyType,
  type FileBase,
  JsonFile,
  type ObjectFile,
  type Project,
  TextFile,
} from 'projen'

const configFilePath = '.eslintrc'
const ignoreFilePath = '.eslintignore'

export class EslintConfig {
  private readonly project: Project

  public constructor(
    project: AnyProject,
    options?: {
      /**
       * Regex to match files that should be linted with CDK rules
       */
      cdkFileRegex?: string
      /**
       * List of paths to ignore when linting
       */
      ignorePaths?: string[]
      /**
       * Regex to match files that should be linted with [projen](https://projen.io) rules
       */
      projenFileRegex?: string
      /**
       * Regex to match files that should be linted with React rules
       */
      reactFileRegex?: string
    }
  ) {
    this.project = project as Project

    this.project.tryRemoveFile(configFilePath)
    this.project.tryRemoveFile('.eslintrc.js')
    this.project.tryRemoveFile('.eslintrc.json')
    this.project.tryRemoveFile(ignoreFilePath)

    const overrides = []

    if (options?.cdkFileRegex !== undefined) {
      overrides.push({
        extends: ['@atws/eslint-config/cdk'],
        files: options.cdkFileRegex,
      })
    }

    if (options?.reactFileRegex !== undefined) {
      overrides.push({
        extends: ['@atws/eslint-config/react'],
        files: options.reactFileRegex,
      })
    }

    if (options?.projenFileRegex !== undefined) {
      overrides.push({
        extends: ['@atws/eslint-config/projen'],
        files: options.projenFileRegex,
      })
    }

    new JsonFile(this.project, configFilePath, {
      marker: false,
      obj: {
        extends: ['@atws/eslint-config'],
        overrides,
        root: true,
      },
    })

    this.project.deps.addDependency(
      '@atws/eslint-config',
      DependencyType.DEVENV
    )
    this.project.deps.addDependency('eslint', DependencyType.DEVENV)

    new TextFile(this.project, ignoreFilePath, {
      lines: [
        '.*/*',
        'generated',
        'coverage',
        '.eslintrc.js',
        '*.png',
        'tsconfig.json',
        ...(options?.ignorePaths ?? []),
      ],
      marker: false,
    })
  }

  public getFiles = () => {
    return {
      eslintConfig: this.project.tryFindObjectFile(
        configFilePath
      ) as ObjectFile,
      eslintIgnore: this.project.tryFindFile(ignoreFilePath) as FileBase,
    }
  }
}
