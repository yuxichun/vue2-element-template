import Vue from "vue";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./custom-element-variables.scss"; // 自定义主题色

Vue.use(ElementUI, {
  size: "mini",
  zIndex: 3000,
});
