import { ISignIn, ISignInRes } from './auth.d'
import { defHttp } from '@utils/http/axios'

export const signIn = async (data: ISignIn) => defHttp.post<ISignInRes>({
    url: 'auth/signIn',
    data
})