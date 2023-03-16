// @ts-expect-error: text loader is setup at build time
import editorConfig from '../../../.editorconfig'
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore: load from workspace root
import vscodeSettings from '../../../.vscode/settings.json'
import { type AnyProject } from './types'
import {
  type FileBase,
  JsonFile,
  type ObjectFile,
  type Project,
  TextFile,
} from 'projen'

const vscodeSettingsFilePath = '.vscode/settings.json'
const editorConfigFilePath = '.editorconfig'
const vscodeExtensionsFilePath = '.vscode/extensions.json'

export class VscodeConfig {
  private readonly project: Project

  public constructor(
    project: AnyProject,
    options?: {
      /**
       * List of additional files to exclude or override from search and watcher
       */
      additionalSearchExclusion?: Record<string, boolean>
      /**
       * Additional settings to add to the VSCode workspace settings file
       */
      additionalSettings?: Record<string, unknown>
      /**
       * Configure the `.vscode/extensions.json` file that is used to
       * automatically install recommended extensions for the project.
       */
      vscodeExtensions?: {
        /**
         * Add extensions that are recommended for all AWS CDK projects.
         * These include the AWS Toolkit and Serverless Console.
         */
        addCdkExtensions?: boolean
        /**
         * Add extensions that are recommended for all core typescript projects.
         * These include ESLint, Prettier, EditorConfig, and VSCode Icons.
         */
        addCoreExtensions?: boolean
        /**
         * Add extensions that are recommended for all Node.js projects.
         * These include OpenAPI and Node.Js Notebook.
         */
        addNodeExtensions?: boolean
        /**
         * Add extensions that boost productivity.
         * These include GitLens, Turbo Console Log, Todo Highlight, Markdown Preview Enhanced, and more.
         */
        addProductivityExtensions?: boolean
        /**
         * Add extensions that are recommended for all React projects.
         */
        addReactExtensions?: boolean
        /**
         * Add extensions that are recommended for all Tailwind CSS projects.
         */
        addTailwindCSSExtensions?: boolean
        /**
         * List of additional extensions to install. Must be in the form of
         * `publisher.name` (e.g. `ms-azuretools.vscode-docker`)
         */
        additionalExtensions?: string[]
        /**
         * List of extensions that should not be used. Must be in the form of
         * `publisher.name` (e.g. `ms-azuretools.vscode-docker`)
         */
        unwantedExtensions?: string[]
      }
    }
  ) {
    this.project = project as Project

    if (options?.additionalSearchExclusion) {
      Object.assign(
        vscodeSettings['search.exclude'],
        options.additionalSearchExclusion
      )
      Object.assign(
        vscodeSettings['files.watcherExclude'],
        options.additionalSearchExclusion
      )
    }

    new JsonFile(this.project, vscodeSettingsFilePath, {
      marker: false,
      obj: vscodeSettings,
    })

    new TextFile(this.project, editorConfigFilePath, {
      lines: editorConfig.split('\n'),
    })

    const extensions = []

    if (options?.vscodeExtensions?.addCoreExtensions === true) {
      extensions.push(
        'dbaeumer.vscode-eslint',
        'EditorConfig.EditorConfig',
        'esbenp.prettier-vscode',
        'vscode-icons-team.vscode-icons'
      )
    }

    if (options?.vscodeExtensions?.addNodeExtensions === true) {
      extensions.push(
        '42Crunch.vscode-openapi',
        'donjayamanne.typescript-notebook'
      )
    }

    if (options?.vscodeExtensions?.addReactExtensions === true) {
      extensions.push('ecmel.vscode-html-css')
    }

    if (options?.vscodeExtensions?.addTailwindCSSExtensions === true) {
      extensions.push(
        'bradlc.vscode-tailwindcss',
        'csstools.postcss',
        'ecmel.vscode-html-css'
      )
    }

    if (options?.vscodeExtensions?.addProductivityExtensions === true) {
      extensions.push(
        'albert.TabOut',
        'eamodio.gitlens',
        'ChakrounAnas.turbo-console-log',
        'eamodio.gitlens',
        'formulahendry.auto-close-tag',
        'formulahendry.auto-rename-tag',
        'shd101wyy.markdown-preview-enhanced',
        'usernamehw.errorlens',
        'VisualStudioExptTeam.intellicode-api-usage-examples',
        'VisualStudioExptTeam.vscodeintellicode',
        'WallabyJs.console-ninja',
        'wayou.vscode-todo-highlight',
        'yzhang.markdown-all-in-one',
        'christian-kohler.npm-intellisense'
      )
    }

    if (options?.vscodeExtensions?.addCdkExtensions === true) {
      extensions.push(
        'amazonwebservices.aws-toolkit-vscode',
        'devadvice.serverlessconsole'
      )
    }

    new JsonFile(this.project, vscodeExtensionsFilePath, {
      obj: {
        recommendations: [
          ...extensions,
          ...(options?.vscodeExtensions?.additionalExtensions ?? []),
        ],
        unwantedRecommendations: options?.vscodeExtensions?.unwantedExtensions,
      },
    })
  }

  public getFiles = () => {
    return {
      editorConfig: this.project.tryFindFile(editorConfigFilePath) as FileBase,
      extensions: this.project.tryFindObjectFile(
        vscodeExtensionsFilePath
      ) as ObjectFile,
      settings: this.project.tryFindFile(vscodeSettingsFilePath) as ObjectFile,
    }
  }
}
