module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: `eslint:recommended`,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
  },

  rules: {
    'no-console':  [`warn`, {allow: [`info`, `warn`, `error`]}],
    'no-debugger': [`warn`],

    'arrow-parens':                [`error`, `as-needed`],
    'camelcase':                   [`error`, {'properties': `always`}],
    'comma-dangle':                [`error`, `always-multiline`],
    'comma-spacing':               [`error`, {'before': false, 'after': true}],
    'eol-last':                    [`error`],
    'eqeqeq':                      [`error`],
    'indent':                      [`error`, 2, {SwitchCase: 1}],
    'key-spacing':                 ['error', {beforeColon: false, afterColon: true, mode: `minimum`}],
    'keyword-spacing':             [`error`],
    'linebreak-style':             [`error`, `unix`],
    'no-multi-spaces':             ['error', {exceptions: {Property: true }}],
    'multiline-ternary':           [`error`, `never`],
    'no-trailing-spaces':          [`error`],
    'no-unused-expressions':       [`error`],
    'no-use-before-define':        [`error`, {classes: false}],
    'object-curly-spacing':        [`error`, `never`],
    'object-shorthand':            [`error`, `always`],
    'quotes':                      [`error`, `backtick`],
    'semi':                        [`error`, `always`],
    'space-before-blocks':         [`error`, `always`],
    'space-before-function-paren': [`error`, {anonymous: `never`, named: `never`, asyncArrow: `always`}],
  },
};
