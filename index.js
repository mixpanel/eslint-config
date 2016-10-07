module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  rules: {
    'camelcase': [2, {'properties': 'always'}],
    'comma-dangle': [2, 'always-multiline'],
    'eol-last': 2,
    'eqeqeq': 2,
    'indent': [2, 2, {SwitchCase: 1}],
    'linebreak-style': [2, 'unix'],
    'multiline-ternary': [2, 'never'],
    'no-console': [1, {allow: ['info', 'warn', 'error']}],
    'no-debugger': 1,
    'no-unused-expressions': 2,
    'no-use-before-define': [2, {classes: false}],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-before-blocks': [2, 'always'],
  },
};
