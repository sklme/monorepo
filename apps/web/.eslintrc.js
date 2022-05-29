module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    // prefer代码风格系列
    'prefer-const': 1,
    'prefer-destructuring': 1,
    'prefer-exponentiation-operator': 1,
    'prefer-named-capture-group': 1,
    'prefer-numeric-literals': 1,
    'prefer-object-has-own': 1,
    'prefer-object-spread': 1,
    'prefer-promise-reject-errors': 1,
    'prefer-regex-literals': 1,
    'prefer-template': 1,
    // prefer代码风格系列

    radix: 1,
    'block-scoped-var': 1,
    'class-methods-use-this': 1,
    eqeqeq: 1,

    // vue
    // 因为不会用native dom写组件， 这个规则没必要
    'vue/v-on-event-hyphenation': 0,
  },
  overrides: [
    {
      // 取消对js文件的type解析
      // https://typescript-eslint.io/docs/linting/type-linting
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
};
