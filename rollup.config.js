import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'
import sveltePreprocessPostcss from 'svelte-preprocess-postcss'
import { mdsvex } from 'mdsvex'
import hljs from 'highlight.js'
import hljsDefineGraphQL from 'highlightjs-graphql'

hljsDefineGraphQL(hljs)

function highlighter(code, language) {
  const highlighted = hljs.highlight(code, { language })
  const value = highlighted.value
  return (
    '{@html `<pre class="hljs ' +
    language +
    '"><code class="hljs">' +
    value +
    '</code></pre>`}'
  )
}

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const stylePreprocessor = sveltePreprocessPostcss({
  useConfigFile: false,
  plugins: [require('postcss-preset-env')()],
})

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warning.code === 'THIS_IS_UNDEFINED' ||
  onwarn(warning)

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        preventAssignment: true,
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions: ['.svelte', '.svx'],
        preprocess: [
          mdsvex({
            highlight: { highlighter },
            layout: {
              blog: './src/components/blogs/BlogLayout.svelte',
            },
          }),
          {
            style: stylePreprocessor,
          },
        ],
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          compact: true,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],
    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        preventAssignment: true,
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        dev,
        extensions: ['.svelte', '.svx'],
        hydratable: true,
        preprocess: [
          mdsvex({
            highlight: { highlighter },
            layout: {
              blog: './src/components/blogs/BlogLayout.svelte',
            },
          }),
          {
            style: stylePreprocessor,
          },
        ],
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives')),
    ),
    preserveEntrySignatures: 'strict',
    onwarn,
  },
  // serviceworker: {
  //   input: config.serviceworker.input(),
  //   output: config.serviceworker.output(),
  //   plugins: [
  //     resolve(),
  //     replace({
  //       'process.browser': true,
  //       'process.env.NODE_ENV': JSON.stringify(mode)
  //     }),
  //     commonjs(),
  //     !dev && terser()
  //   ],

  //   preserveEntrySignatures: 'false',
  //   onwarn,
  // }
}
