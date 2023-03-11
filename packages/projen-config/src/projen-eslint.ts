import {
  DependencyType,
  type FileBase,
  JsonFile,
  type Project,
  TextFile,
} from 'projen'

const configFilePath = '.eslintrc'
const ignoreFilePath = '.eslintignore'

export class EslintConfig {
  private readonly project: Project

  public constructor(
    project: Project,
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
       * Regex to match files that should be linted with React rules
       */
      reactFileRegex?: string
    }
  ) {
    this.project = project

    project.tryRemoveFile(configFilePath)
    project.tryRemoveFile('.eslintrc.js')
    project.tryRemoveFile('.eslintrc.json')
    project.tryRemoveFile(ignoreFilePath)

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

    new JsonFile(project, configFilePath, {
      marker: false,
      obj: {
        extends: ['@atws/eslint-config'],
        overrides,
        root: true,
      },
    })

    project.deps.addDependency('@atws/eslint-config', DependencyType.DEVENV)
    project.deps.addDependency('eslint', DependencyType.DEVENV)

    new TextFile(project, ignoreFilePath, {
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
      eslintConfig: this.project.tryFindFile(configFilePath) as FileBase,
      eslintIgnore: this.project.tryFindFile(ignoreFilePath) as FileBase,
    }
  }
}
