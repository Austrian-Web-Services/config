import { DependencyType, type FileBase, JsonFile, type Project } from 'projen'

const filePath = '.eslintrc.js'

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
       * Regex to match files that should be linted with React rules
       */
      reactFileRegex?: string
    }
  ) {
    this.project = project

    project.tryRemoveFile(filePath)
    project.tryRemoveFile('.eslintrc')
    project.tryRemoveFile('.eslintrc.json')

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

    new JsonFile(project, filePath, {
      obj: {
        extends: ['./packages/eslint-config/index.js'],
        overrides,
        root: true,
      },
    })

    project.deps.addDependency('@atws/eslint-config', DependencyType.DEVENV)
    project.deps.addDependency('eslint', DependencyType.DEVENV)
  }

  public getFile = () => {
    return this.project.tryFindFile(filePath) as FileBase
  }
}
