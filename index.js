/* eslint-env node */
const {NODE_ENV = `development`} = process.env;
const WARN_IF_DEV = NODE_ENV === `development` ? `warn` : `error`;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [`eslint:recommended`, `prettier`],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
  },

  rules: {
    'arrow-parens': [`error`],
    camelcase: [`error`, {properties: `never`, ignoreDestructuring: true}],
    'comma-dangle': [`error`, `always-multiline`],
    'comma-spacing': [`error`, {before: false, after: true}],
    'eol-last': [`error`],
    eqeqeq: [`error`],
    'key-spacing': [`error`, {beforeColon: false, afterColon: true, mode: `minimum`}],
    'keyword-spacing': [`error`],
    'linebreak-style': [`error`, `unix`],
    'no-console': [WARN_IF_DEV, {allow: [`info`, `warn`, `error`, `assert`]}],
    'no-control-regex': [`off`],
    'no-debugger': [WARN_IF_DEV],
    'no-multi-spaces': [`error`, {exceptions: {Property: true}}],
    'no-prototype-builtins': [`off`],
    'no-trailing-spaces': [`error`],
    'no-unused-expressions': [`error`, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-vars': [`error`, {argsIgnorePattern: `^_`}],
    'no-use-before-define': [
      `error`,
      {
        functions: false,
        classes: false,
      },
    ],
    'no-var': [`error`],
    'object-curly-spacing': [`error`, `never`],
    'object-shorthand': [`error`, `always`],
    'prefer-const': [`error`, {destructuring: `all`, ignoreReadBeforeAssign: true}],
    quotes: [`error`, `backtick`],
    semi: [`error`, `always`],
    'sort-keys': [`off`],
    'space-before-blocks': [`error`, `always`],
    'space-before-function-paren': [`error`, {anonymous: `never`, named: `never`, asyncArrow: `always`}],
  },
};
