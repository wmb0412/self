import { postApi, deleteApi, getApi, putApi } from './index'
import { IUserListData, IUserListRes, UserAdd, UserUpdate } from './user.d'

export const getUserListApi = async (params?: IUserListData) => getApi<IUserListRes>('user/list', { params })

export const userAddApi = async (data?: UserAdd) => postApi<IUserListRes>('user', data)

export const deleteUserApi = async (id: number) => deleteApi(`user/${id}`)

export const putUserApi = async (id, data: UserUpdate) => putApi<IUserListRes>(`user/${id}`, data)