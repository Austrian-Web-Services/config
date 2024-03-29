const {
  generalDisabledRules,
  prettierConflictRules,
  typescriptRules,
  typescriptDeclarationOverride,
} = require('./lib/overrides')

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'canonical',
    'canonical/react',
    'canonical/jsdoc',
    'canonical/regexp',
    'canonical/typescript',
    'canonical/jsx-a11y',
    'canonical/typescript-type-checking',
    'prettier',
  ],
  overrides: [typescriptDeclarationOverride],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-refresh'],
  rules: {
    ...typescriptRules,
    ...generalDisabledRules,
    ...prettierConflictRules,

    // allow import of css files and locales
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '**/*.css',
          '**/*.scss',
          '**/*.sass',
          '**/*.less',
          'dayjs/locale/*',
          'expo-router/entry',
          'babel-register',
          '@total-typescript/ts-reset',
          '@testing-library/jest-dom',
        ],
      },
    ],

    // allows className and style as component props
    'react/forbid-component-props': 0,

    // Disabled due to bug caused when using a type for the function handler
    'react/prop-types': 0,

    // missing deps in hooks will display a warning instead of an error
    'react-hooks/exhaustive-deps': 'warn',

    // guarantees that the component is exported correctly
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
        allowExportNames: ['loader'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
