import { DependencyType, type Project, TextFile } from 'projen'

export const PrettierConfig = (project: Project) => {
  project.tryRemoveFile('.prettierrc.js')

  new TextFile(project, '.prettierrc.js', {
    lines: ['module.exports = {', `  ...require('@atws/prettier-config')`, '}'],
  })

  project.deps.addDependency('@atws/prettier-config', DependencyType.DEVENV)
  project.deps.addDependency('prettier', DependencyType.DEVENV)
}
