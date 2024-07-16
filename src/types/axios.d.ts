
export interface RequestOptions {
  // 需要对返回数据进行处理
  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  isTransformResponse?: boolean;
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  // 是否携带token
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
  // 请求成功后是否要提示
  tipSuccess?: boolean
}

export interface RetryRequest {
  isOpenRetry: boolean;
  count: number;
  waitTime: number;
}
export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  data: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
