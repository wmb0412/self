import axios, { AxiosRequestConfig } from 'axios'
import { message} from 'antd'
import { getRequestErrorMessage } from './utils'
import { IResponse } from './index.d'
import { getAuthorization } from '@/utils/auth'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = getAuthorization()
    return config
})
instance.interceptors.response.use((response) => {
    const res = response.data
    const errorMessage = getRequestErrorMessage(res.code) || res.message
    if(res.code !== 200) message.error(errorMessage)
    return res
})
function postApi<T>(url: string, data: any, config?: AxiosRequestConfig<any> | undefined){

    return instance.post<any, IResponse<T>, any>(url, data, config)
} 

function getApi<T> (url: string, config?: AxiosRequestConfig<any> | undefined){
    return instance.get<any, IResponse<T>, any>(url, config)
}
export {
    postApi,
    getApi,
}
export default instance