import request from "@/utils/request";

// 访客访问同屏文件
export const screenSyncDoc = (id = "", params = {}, data = {}) => {
  return request({
    url: `/screenSyncDoc/view/${id}`,
    method: "get",
    params,
    data,
    // isLoading: false,
  });
};
