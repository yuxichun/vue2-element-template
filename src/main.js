import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins";

import * as api from "@/api/index";
// console.log("api", api);
Vue.prototype.$http = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => {
    return h(App);
  },
}).$mount("#app");
