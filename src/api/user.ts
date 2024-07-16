import { defHttp } from '@/utils/http/axios'
import { IUserListData, IUserListRes, UserAdd, UserUpdate } from './user.d'

export const getUserListApi = async (params?: IUserListData) => defHttp.get({
    url: 'user/list',
    params
})

export const userAddApi = async (data?: UserAdd) => defHttp.post({
    url: 'user',
    data
})

export const deleteUserApi = async (id: number) => defHttp.delete({
    url: `user/${id}`
})

export const putUserApi = async (id, data: UserUpdate) => defHttp.put<IUserListRes>({
    url:`user/${id}`,
    data
})