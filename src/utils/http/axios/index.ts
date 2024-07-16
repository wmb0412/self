// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { AxiosInstance, AxiosResponse } from "axios";
import { clone } from "lodash-es";
import type { RequestOptions, Result } from "@/types/axios";
import type { AxiosTransform, CreateAxiosOptions } from "./axiosTransform";
import { VAxios } from "./Axios";
import { ContentTypeEnum, HttpStatusEnum, RequestEnum, ResultCodeEnum } from "@/enums/httpEnum";
import { AxiosMessageTip } from "./axiosMessgeTip";
import { checkStatus } from "./checkStatus";
import { AxiosRetry } from "./axiosRetry";
import { deepMerge } from "@/utils";
import router from "@/routes";
import { PageEnum } from "@/enums/pageEnum";
import { message } from "antd";

const baseURL = import.meta.env.VITE_BASE_API;

const logoutByRequest  = ({ code, status }: { code?: ResultCodeEnum, status?:HttpStatusEnum}) => {
  const logoutOfCode = [ ResultCodeEnum.TIMEOUT, ResultCodeEnum.NO_LOGIN ].includes(code!)
  const logoutOfStatus = [ HttpStatusEnum.Forbidden ].includes(status!)
  if(logoutOfCode || logoutOfStatus){
    router.navigate(PageEnum.BASE_LOGIN)
  }
}
/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
   */
  transformResponseHook: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => {
    console.log('你吗')
    const {
      isReturnNativeResponse,
      isTransformResponse,
      tipSuccess,
    } = options;
    if (isReturnNativeResponse) {
      return res;
    }
    if (!isTransformResponse) {
      return res.data;
    }
    console.log('你妈')
    if (!res.data) {
      throw new Error("请求出错，请稍后尝试");
    }
    //  这里 code，data，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, data, message } = res.data;
    const hasSuccess = code === ResultCodeEnum.SUCCESS;

    // 请求提示信息
    const axiosMessageTip = new AxiosMessageTip({
      message,
      code
    });
    tipSuccess && axiosMessageTip.showTip(hasSuccess);
    if (hasSuccess) {
      return data;
    }
    // 一些错误，需要重新登录
    logoutByRequest({ code })
    throw new Error(axiosMessageTip.getErrorMessage());
  },

  // 请求之前处理config
  beforeRequestHook: (config) => {
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config) => {
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    console.log('nima1x')
    const { code, message:msg } = res.data
    if(code !== ResultCodeEnum.SUCCESS){
      message.error(msg)
    }
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (axiosInstance: AxiosInstance, error: any) => {
    console.log('nimax')
    const { config } = error || {};

    // HTTP 状态码
    const status = error.response?.status;
    const msg: string = error.response?.data?.error?.message ?? "";
    checkStatus(status, msg);
    logoutByRequest({ status })
    // 添加自动重试机制 保险起见 只针对幂等的GET请求
    const retryRequest = new AxiosRetry();
    const { isOpenRetry } = config.requestOptions.retryRequest;
    config.method?.toUpperCase() === RequestEnum.GET &&
      isOpenRetry &&
      retryRequest.retry(axiosInstance, error);
    return Promise.reject(error);
  }
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    // 深度合并
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // authentication schemes，e.g: Bearer
        // authenticationScheme: 'Bearer',
        withCredentials: true,
        authenticationScheme: "",
        timeout: 10 * 1000,
        // 基础接口地址
        baseURL,

        headers: { "Content-Type": ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform: clone(transform),
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
          tipSuccess: false,
          retryRequest: {
            isOpenRetry: false,
            count: 0,
            waitTime: 100
          }
        }
      },
      opt || {}
    )
  );
}
export const defHttp = createAxios();
