export const constantRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => {
      return import(/* webpackChunkName: "home" */ "@/views/Home/index.vue");
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/About/index.vue");
    },
  },
  {
    path: "/401",
    name: "Abnormal",
    component: () => {
      return import(/* webpackChunkName: "error" */ "@/components/ErrorPage/401.vue");
    },
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => {
      return import(/* webpackChunkName: "error" */ "@/components/ErrorPage/404.vue");
    },
  },
  {
    path: "*",
    redirect: "/404",
  },
];
