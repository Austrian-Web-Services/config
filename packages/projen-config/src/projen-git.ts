import { type Project } from 'projen'

/**
 * Git attributes to add to the `.gitattributes` file.
 *
 * @example { glob: '/.vscode/*.json', attribute: 'linguist-language=JSON5' }
 */
type GitAttributeEntry = {
  /**
   * Attributes to assign to these files.
   */
  attribute: string
  /**
   *
   * Glob pattern to match files in the repo
   */
  glob: string
}

const gitAttributesContent: GitAttributeEntry[] = [
  { attribute: 'eol=lf', glob: '* text=auto' },
  { attribute: 'binary', glob: '*.png' },
  { attribute: 'linguist-language=JSON5', glob: '/.vscode/*.json' },
]

export class GitConfig {
  private readonly project: Project

  public constructor(
    project: Project,
    options?: {
      gitAttributes?: {
        additionalLines?: GitAttributeEntry[]
      }
    }
  ) {
    this.project = project

    for (const item of [
      ...gitAttributesContent,
      ...(options?.gitAttributes?.additionalLines ?? []),
    ]) {
      project.gitattributes.addAttributes(item.glob, item.attribute)
    }
  }
}
