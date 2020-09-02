// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 6
  },
  env: {
    browser: true,
    jquery: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  plugins: ['vue'],
  rules: {
    // allow async-await
    'indent': [
      'error', 2, {
        'SwitchCase': 1,
        'ignoredNodes': ['ConditionalExpression'],
        'FunctionExpression': {
          'body': 1,
          'parameters': 2
        }
      }
    ], // // 强制在对象字面量的属性中键和值之间使用一致的间距
    'generator-star-spacing': 'off', // // 强制 generator 函数中 * 号周围使用一致的空格
    // allow semicolon
    'semi': [2, 'always'], // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，
    'no-tabs': 'off', // 禁用 tab
    "camelcase": [1, {
      "properties": "never"
    }], // 是否强制使用驼峰
    'lines-between-class-members': 'off', // 要求或禁止类成员之间出现空行
    'no-template-curly-in-string': 'off', // 禁止在常规字符串中出现模板字面量占位符语法
    'no-mixed-spaces-and-tabs': 'off', // 禁止空格和 tab 的混合缩进
    'no-inner-declarations': 'off', // // 禁止 RegExp 构造函数中无效的正则表达式字符串
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }], // 有些便签自闭合
    'vue/no-template-key': 'off', // 禁止template 使用key
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production'
                   ? 'error'
                   : 'off'
  }
};
