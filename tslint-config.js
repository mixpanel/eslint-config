// Rules documentation: https://palantir.github.io/tslint/rules/
module.exports = {
  extends: `tslint:recommended`,
  defaultSeverity: `error`,
  rules: {
    'array-type': [true, `array-simple`],
    'arrow-parens': false,
    'arrow-return-shorthand': true,
    'import-spacing': true,
    'indent': [true, `spaces`],
    'interface-name': [true, `never-prefix`],
    'max-line-length': [true, 140],
    'no-angle-bracket-type-assertion': false,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': [true, 1],
    'no-duplicate-variable': true,
    'no-invalid-template-strings': true,
    'only-arrow-functions': [false],
    'quotemark': [true, `single`, `avoid-escape`],
    'semicolon': [true, `always`],
    'switch-default': true,
  },
};
