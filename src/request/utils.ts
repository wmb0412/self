export const getRequestErrorMessage = (code) => ({
    10002: '用户已存在',
    10003: '用户名或密码错误',
})[code]