// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'vue/no-parsing-error': [0, {
      'x-invalid-end-tag': false
    }],
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "allowFirstLine": true
      }
    }],
    'func-names': ['error', 'as-needed'],
    'no-console': [0],
    'object-shorthand': [0],
    'arrow-parens': ['error', 'as-needed'],
    'vue/html-indent': ['error', 2],
    'no-unused-vars': [0],
    'prefer-template': [0],
    'no-plusplus': [0],
    'no-mixed-operators': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'default-case': [0],
    'vue/attributes-order': [0],
    'vue/require-valid-default-prop': [0],
    'no-bitwise': [0],
    'no-param-reassign': ["error", { "props": false }],
    'func-names': ["error", "never"],
    'linebreak-style': ["error", "unix"],
    'consistent-return': [0],
    'no-unused-expressions': [0],
    'eqeqeq': [0]
  }
}
