// https://prettier.io/docs/en/options.html
// 代码规范检测-格式化
module.exports = {
  // 打印宽度 指定打印机将环绕的行长度
  printWidth: 120,
  // 标签宽度 指定每个缩进级别的空格数
  tabWidth: 2,
  // 标签 用制表符，而不是空格缩进行
  useTabs: false,
  // 分号 在语句末尾打印分号
  semi: true,
  // 引号 是否使用单引号
  singleQuote: false,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // 在 JSX 中使用单引号代替双引号
  jsxSingleQuote: false,
  // 尾随逗号
  trailingComma: "es5",
  // 对象大括号内两边是否加空格 { a:0 }
  bracketSpacing: true,
  // 将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾
  bracketSameLine: true,
  // 单个参数的箭头函数不加括号 (x) => x
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 需要编译指示 不需要写文件开头的 @prettier
  requirePragma: false,
  // 插入编译指示 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // Markdown 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // 是否缩进Vue 文件中的代码<script>和<style>标签
  vueIndentScriptAndStyle: true,
  // 文件换行格式 lf/crlf//cr/auto
  endOfLine: "auto",
  // 控制 Prettier 是否格式化文件中嵌入的引用代码
  embeddedLanguageFormatting: "auto",
  ignorePath: ".prettierignore",
};
