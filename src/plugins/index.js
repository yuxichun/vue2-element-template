/* 公共引入,勿随意修改,修改时需经过确认 */
import "normalize.css";
import "animate.css";
import "./element";

import VConsole from "vconsole";
const VUE_APP_ENV = process.env.VUE_APP_ENV;
if ("staging".includes(VUE_APP_ENV)) {
  new VConsole();
}
