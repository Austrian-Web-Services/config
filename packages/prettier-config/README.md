# @atws/prettier-config

This package contains a simple base config for prettier.

## Usage

Install `prettier` and the package:

```bash
yarn add -D prettier @atws/prettier-config
```

Create a `.prettierrc.js` file in the root of your project and extend the base config.

```js
module.exports = {
  ...require("@atws/prettier-config")
}
```
