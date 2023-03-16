import { type AnyProject } from './types'
import { DependencyType, type FileBase, type Project, TextFile } from 'projen'

const filePath = '.prettierrc.js'

export class PrettierConfig {
  private readonly project: Project

  public constructor(project: AnyProject) {
    this.project = project as Project

    this.project.tryRemoveFile(filePath)
    this.project.tryRemoveFile('.prettierrc')
    this.project.tryRemoveFile('.prettierrc.json')

    this.project.files.push(
      new TextFile(this.project, filePath, {
        lines: [
          'module.exports = {',
          `  ...require('@atws/prettier-config')`,
          '}',
        ],
      })
    )

    this.project.deps.addDependency(
      '@atws/prettier-config',
      DependencyType.DEVENV
    )
    this.project.deps.addDependency('prettier', DependencyType.DEVENV)
  }

  public getFile = () => {
    return this.project.tryFindFile(filePath) as FileBase
  }
}
