<h1 align="center">✨ atws-full-extensions</h1>

The **ATWS Full Extensions** pack is a extended of extensions for Visual Studio Code that are essential for web developers. With this pack, you will have access to a wide range of features that will enhance your productivity and make your coding experience more enjoyable. Here are the extensions included in this pack:

Includes the [ATWS Core Extensions](https://marketplace.visualstudio.com/items?itemName=atws.atws-core-extensions) - A pack of essential extensions for web development.

- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log) - Quickly log variables and values for debugging purposes.
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - Lint your markdown files to ensure they follow best practices.
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - View and manage your TODOs in a tree view.
- [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja) - View console log output inline in your code.
- [Markdown Preview Github Styles](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles) - Preview your markdown files with the styles of Github.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocomplete for Tailwind CSS.
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) - Language support for PostCSS.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Supercharge the Git capabilities built into VS Code.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically rename paired HTML/XML tags.
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) - Preview and edit SVG files.
- [AWS CLI Configure](https://marketplace.visualstudio.com/items?itemName=mark-tucker.aws-cli-configure) - Simplify AWS CLI configuration.
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - Manage your Docker containers and images.
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) - Develop inside a containerized environment.
- [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) - Open a Folder in WSL.
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - Peek into CSS classes and IDs in your HTML files.
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Show errors and warnings inline in your code.

## Recommended VSCode Settings

Add the following settings to your VSCode settings.json file to get the most out of this pack. You can access your settings.json file by pressing `Ctrl + ,` or `Cmd + ,` on your keyboard.

This changes the style of the [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) errors/warnings to be more subtle.

```json
"errorLens.delay": 1500,
"errorLens.enabledInMergeConflict": false,
"errorLens.fontSize": "0.85em",
"errorLens.fontStyleItalic": true,
"errorLens.messageBackgroundMode": "message",
"errorLens.messageTemplate": "$source: $message",
"errorLens.padding": "0.15rem",
```

<details>
  <summary>Preview</summary>

![Error Lens](https://raw.githubusercontent.com/Austrian-Web-Services/config/main/packages/atws-full-extensions/error_lense_settings.jpg)

</details>
