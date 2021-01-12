module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-empty-function': 1,
  },
};
