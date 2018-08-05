// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
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
  /**
   * "extends": "eslint:recommended" 选项表示启用推荐规则，
   * 在推荐规则的基础上我们还可以根据需要使用 rules 新增自定义规则
   * ，每个规则的第一个值都是代表该规则检测后显示的错误级别
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 将规则视为一个警告
   * "error" 或 2 - 将规则视为一个错误
   */
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
