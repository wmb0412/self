/**
 * @description: Request result set
 */
export enum ResultCodeEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
  NO_LOGIN = 10004,
  OTHER_CUSTOM = 100001,
}
export enum HttpStatusEnum {
  Forbidden = 403
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8"
}
