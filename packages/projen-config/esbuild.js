/* eslint-disable no-undef */
const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild
  .build({
    bundle: true,
    entryPoints: ['./src/index.ts'],
    format: 'cjs',
    minify: true,
    outfile: 'dist/index.js',
    platform: 'node',
    plugins: [nodeExternalsPlugin()],
    target: 'node14',
    treeShaking: true,
  })
  .catch(() => process.exit(1))
