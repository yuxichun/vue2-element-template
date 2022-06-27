import axios from "axios";
import { baseUrl } from "@/config";
import { Loading } from "element-ui";
let loadingInstance = "";

const instance = axios.create({
  baseURL: baseUrl, // url = base api url + request url
  withCredentials: false, // 表示跨域请求时是否需要使用凭证
  timeout: 5000, // 指定请求超时的毫秒数
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const { headers, isLoading = true } = config;
    // console.log("config", config);
    if (isLoading) {
      loadingInstance = Loading.service({ text: "拼命加载..." });
    }

    // headers["C-Token"] = "test-Token";
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error(`请求拦截器=>error`, error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    loadingInstance && loadingInstance.close();
    const { data = "", status = "" } = response;
    if (status && status !== 200) {
      if (status === 401) {
        // 处理网络层 401 状态
        return Promise.reject(401);
      }
      return Promise.reject("网络层错误");
    }
    return Promise.resolve(data);
  },
  function (error) {
    // 对响应错误做点什么
    loadingInstance && loadingInstance.close();
    console.error(`响应拦截器=>error`, error);
    return Promise.reject(error);
  }
);

export default instance;
