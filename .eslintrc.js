// https://eslint.bootcss.com
// "off"或 0 - 关闭规则
// "warn"或 1 - 开启规则， 使用警告级别的错误： warn(不会导致程序退出)
// "error"或 2 - 开启规则， 使用错误级别的错误： error(当被触发的时候， 程序会退出)
// 代码质量检测-语法检测
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-useless-escape": 0,
    "no-else-return": ["warn", { allowElseIf: false }], // 禁止在 return 之后有 else if 块
    "no-bitwise": [0, { int32Hint: true }], // 禁止使用按位运算符
    "no-var": 1, // 要求使用 let 或 const 而不是 var
    "no-lonely-if": 1, // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-mixed-spaces-and-tabs": 1, // 禁止使用 空格 和 tab 混合缩进
    "no-compare-neg-zero": 1, // 禁止与 -0 进行比较
    strict: ["error"], // 使用严格模式
    curly: ["error", "all"], // 强制所有控制语句使用一致的括号风格 时刻保留大括号
    eqeqeq: ["error", "always"], // 要求使用 === 和 !==
    yoda: ["error", "never", { exceptRange: true, onlyEquality: true }], // 比较绝不能是 Yoda 条件(字面量值放在首位)
    "arrow-body-style": ["error", "always"], // 要求箭头函数体使用大括号
    "arrow-parens": ["error", "always"], // 要求箭头函数的参数使用圆括号
    "arrow-spacing": ["error", { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
    "prefer-rest-params": ["off"], // 建议使用剩余参数代替 arguments
    "new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }], // 要求构造函数首字母大写
    "constructor-super": ["error"], // 验证构造函数中 super() 的调用
    "default-case": ["error"], // 要求 Switch 语句中有 Default 分支
    "switch-colon-spacing": ["error", { before: false, after: true }], // 强制在 switch 的冒号左右有空格
    "getter-return": ["error"], // 强制在 getter 属性中出现一个 return 语句
    "multiline-ternary": ["error", "never"], // 禁止三元操作数之间有换行 (强制整个三元表达式在同一行)
    "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }], // 要求或禁止在首字母//或/*注释后立即出现空格
    "vue/component-name-in-template-casing": ["error", "PascalCase"], // PascalCase kebab-case
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
