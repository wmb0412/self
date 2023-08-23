import {postApi} from './index'
import { IUserListData, IUserListRes } from './user.d'

export const userList = async (data?: IUserListData) => postApi<IUserListRes>('user/list', data)