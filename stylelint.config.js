// http://stylelint.cn
// https://stylelint.docschina.org
// https://stylelint.io/user-guide/configuration

module.exports = {
  root: true,
  extends: [
    // 扩展
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
  ],
  plugins: [
    // 插件
    "stylelint-order", // 指定事物的排序，例如声明块中的属性
  ],
  // customSyntax: "postcss-html", // 自定义语法插件库
  overrides: [
    // 指定文件类型 匹配特定规则库
    {
      files: ["**/*.{css,scss,sass}"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.{css,less}"],
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.{html,vue}"],
      customSyntax: "postcss-html",
    },
    // {
    //   files: ["**/*.{css,scss,sass,less,html,vue}"],
    //   customSyntax: "postcss-html",
    // },
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // 覆盖 extends 的配置
    "no-empty-source": null, // 禁止空源码
    "color-function-notation": "legacy", // 为适用的颜色函数指定现代或传统符号
    "alpha-value-notation": "number", // 指定 alpha 值的百分比或数字表示法
    "property-no-unknown": true, // 禁止未知属性
    "function-url-quotes": "always", // 要求或禁止网址的引号。
    "no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "unit-case": null, // 为单位指定小写或大写
    "color-hex-length": "short", // 为十六进制颜色指定短或长符号 "short"|"long"
    "selector-class-pattern": null, // 指定类选择器的模式
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字 { font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif; }
    "block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符  "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
    "declaration-block-no-duplicate-properties": true, // 禁止声明块的重复属性
    "declaration-block-no-redundant-longhand-properties": null, // 禁止可合并为一个简写属性的扩写属性
    "keyframes-name-pattern": null, // 指定关键帧名的模式
    "block-no-empty": null, // 禁止空块
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["/^mixin/", "/^include/", "/^extend/"],
      },
    ], // 禁止未知的@规则
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["/^deep/"],
      },
    ], // 禁止未知的伪类选择器
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["/^v-deep/"],
      },
    ], // 禁止未知的伪元素选择器

    // plugins=>stylelint-order
    "order/order": [
      // 指定声明块内的内容顺序。
      ["custom-properties", "at-variables", "declarations", "at-rules", "rules", "less-mixins"],
      { severity: "warning" },
    ],
    // plugins=>stylelint-order
    "order/properties-order": [
      // 指定声明块中的属性顺序，(css属性)。
      [
        {
          emptyLineBefore: "never",
          properties: ["content"],
        },
        {
          emptyLineBefore: "never",
          properties: ["position", "top", "right", "bottom", "left", "z-index"],
        },
        {
          emptyLineBefore: "never",
          properties: [
            "box-sizing",
            "display",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "float",
            "clear",
            "clip",
            "visibility",
            "overflow",
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "box-shadow",
          ],
        },
        {
          emptyLineBefore: "never",
          properties: [
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
          ],
        },
        {
          emptyLineBefore: "never",
          properties: [
            "color",
            "font",
            "font-family",
            "font-size",
            "font-smoothing",
            "font-style",
            "font-variant",
            "font-weight",
            "letter-spacing",
            "line-height",
            "list-style",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-rendering",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "vertical-align",
            "white-space",
            "word-spacing",
          ],
        },
      ],
      { severity: "warning" },
    ],
  },
};
