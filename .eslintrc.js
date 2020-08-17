module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-implicit-coercion': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-use-before-define': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
        "react/prop-types": 0
    }
  }