import Vue from "vue";
import VueRouter from "vue-router";
import { constantRoutes } from "./constantRoutes";

Vue.use(VueRouter);

const createRouter = () => {
  return new VueRouter({
    mode: "history", // 默认 hash
    base: process.env.BASE_URL,
    // scrollBehavior: () => {
    //   return { y: 0 };
    // },
    routes: constantRoutes,
  });
};

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
