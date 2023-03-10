import { DependencyType, type FileBase, type Project, TextFile } from 'projen'

const filePath = '.prettierrc.js'

export class PrettierConfig {
  private readonly project: Project

  public constructor(project: Project) {
    this.project = project

    project.tryRemoveFile(filePath)

    new TextFile(project, filePath, {
      lines: [
        'module.exports = {',
        `  ...require('@atws/prettier-config')`,
        '}',
      ],
    })

    project.deps.addDependency('@atws/prettier-config', DependencyType.DEVENV)
    project.deps.addDependency('prettier', DependencyType.DEVENV)
  }

  public getFile = () => {
    return this.project.tryFindFile(filePath) as FileBase
  }
}
