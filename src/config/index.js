// 根据环境变量引入不同配置 process.env.VUE_APP_ENV
// console.log("根据环境变量引入不同配置", process.env);
const environment = process.env.VUE_APP_ENV || "development";
const config = require("./env." + environment);
module.exports = config;
