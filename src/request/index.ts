import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { getRequestErrorMessage } from './utils'
import { IResponse } from './index.d'
import { getAuthorization } from '@/utils/auth'
import router from '@/routes'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
})

instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = getAuthorization()
    return config
})
instance.interceptors.response.use((response) => {
    console.log('234',response.data)
    const res = response.data
    const errorMessage = getRequestErrorMessage(res.code) || res.message
    if(res.code !== 0) message.error(errorMessage)
    return res
}, ({ response }) => {
    if([ 403 ].includes(response.status)){
        router.navigate('/login')
    }
    console.log(response,'123')
})

function getApi<T> (url: string, config?: AxiosRequestConfig<any> | undefined){
    return instance.get<any, IResponse<T>, any>(url, config)
}
function postApi<T>(url: string, data: any, config?: AxiosRequestConfig<any> | undefined){

    return instance.post<any, IResponse<T>, any>(url, data, config)
} 
function deleteApi<T>(url: string,config?: AxiosRequestConfig<any> | undefined){

    return instance.delete<any, IResponse<T>, any>(url, config)
} 
function putApi<T>(url: string, data: any, config?: AxiosRequestConfig<any> | undefined){

    return instance.put<any, IResponse<T>, any>(url, data, config)
} 
export {
    postApi,
    getApi,
    deleteApi,
    putApi
}
export default instance