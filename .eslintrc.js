// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  // 当前配置（主流）：extends配置vue校验规则，parser移至parserOptions下，plugins中配置为vue
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 按从上往下的规则匹配
    //推荐校验(会和 vscode 中设置的相冲突)
    'plugin:vue/recommended',
    //基本校验
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
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
    // 'generator-star-spacing': 'off',
    // "semi": [2, "always"], //语句强制分号结尾
    // "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    'linebreak-style': ['error', 'windows']
  }
}
