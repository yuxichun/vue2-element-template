const path = require("path");
const setting = require("./src/config/index.js");

const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  devServer: {
    port: 9527,
    open: true,
    https: false,

    // 配置跨域
    proxy: {
      // 匹配laobai
      "/laobai": {
        target: "https://192.168.31.37",
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 正则替换掉 /laobai 剩余追加
          "^/laobai": "/api/v1/", // 匹配 baseUrl = '/laobai',
          // 直接追加
          "^/*": "/api/v1/", // 匹配 baseUrl = '/laobai*'
        },
      },
      "/dev": {
        target: "https://dev-api.cosee.cc",
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/dev": "/api/v1/",
          "^/*": "/api/v1/",
        },
      },
      "/test": {
        target: "https://test-api.cosee.cc",
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/test": "/api/v1/",
          "^/*": "/api/v1/",
        },
      },
      "/prod": {
        target: "https://api.cosee.cc",
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/prod": "/api/v1/",
          "^/*": "/api/v1/",
        },
      },
    },

    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: true,
      errors: true,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                  @import "@/assets/css/index.scss";
                `,
      },
    },
  },
  // 合并到最终的配置中
  configureWebpack: (config) => {},
  // webpack 配置进行更细粒度的修改
  chainWebpack: (config) => {
    // 设置 title
    config.plugin("html").tap((args) => {
      args[0].title = setting.title;
      return args;
    });
    // 设置 alias
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
  },
  pwa: {
    name: "Cosee|客达达", // name short_name
    themeColor: "#ffffff", // theme_color
    msTileColor: "#000000", // background_color
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW", // InjectManifest GenerateSW
    assetsVersion: "",
    // manifestPath: "",
    manifestOptions: "",
    manifestCrossorigin: "",
    iconPaths: {
      faviconSVG: "./img/icons/favicon.png",
      favicon32: "./img/icons/favicon-32x32.png",
      favicon16: "./img/icons/favicon-16x16.png",
      appleTouchIcon: "./img/icons/apple-touch-icon-152x152.png",
      maskIcon: "./img/icons/safari-pinned-tab.svg",
      msTileImage: "./img/icons/msapplication-icon-144x144.png",
    },
  },
};
