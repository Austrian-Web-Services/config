import { type FileBase, JsonFile, type Project } from 'projen'

const filePath = '.vscode/settings.json'

export class VscodeConfig {
  private readonly project: Project

  public constructor(
    project: Project,
    options?: {
      /**
       * List of additional files to exclude or override from search and watcher
       */
      additionalSearchExclusion?: Record<string, boolean>
      additionalSettings?: Record<string, unknown>
    }
  ) {
    this.project = project

    const searchExclusions: Record<string, boolean> = {
      '**/*.lock': true,
      '**/.cache': true,
      '**/.git': true,
      '**/.yarn': true,
      '**/cdk.out': true,
      '**/dist': true,
      '**/node_modules': true,
      'package-lock.json': true,
    }

    if (options?.additionalSearchExclusion) {
      Object.assign(searchExclusions, options.additionalSearchExclusion)
    }

    new JsonFile(project, filePath, {
      marker: false,
      obj: {
        'editor.codeActionsOnSave': {
          'source.fixAll.eslint': true,
        },
        'editor.formatOnSave': true,
        'eslint.validate': [
          'javascript',
          'javascriptreact',
          'json',
          'typescript',
          'typescriptreact',
          'yaml',
        ],
        'files.watcherExclude': searchExclusions,
        'git.autofetch': true,
        'javascript.format.enable': false,
        'json.format.enable': false,
        'search.exclude': searchExclusions,
        'typescript.format.enable': false,
        ...options?.additionalSettings,
      },
    })
  }

  public getFile = () => {
    return this.project.tryFindFile(filePath) as FileBase
  }
}
