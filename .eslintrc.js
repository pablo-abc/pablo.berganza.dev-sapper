module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: ['warn', 'never'],
    quotes: ['error', 'single'],
    'dot-location': ['warn', 'property'],
    'guard-for-in': ['warn'],
    'no-multi-spaces': ['warn'],
    yoda: ['warn', 'never'],
    camelcase: ['warn'],
    'comma-style': ['warn'],
    'comma-dangle': ['warn', 'always-multiline'],
  },
  settings: {
    // ...
  },
  globals: {
    process: true,
    require: true,
  },
};
