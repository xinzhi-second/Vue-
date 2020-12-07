module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    // 四个空格
    "indent": ["error", 4],
    // vue 缩进
    'vue/script-indent': ['error', 2],
    // 多次重复导入
    'no-duplicate-imports': 0,
    // 不检查分号
    'semi': 0
  },
  'overrides': [
    {
      'files': ['*.vue','*.js'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
