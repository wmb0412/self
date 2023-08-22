import {postApi} from './index'
import { ISignIn, ISignInRes } from './auth.d'

export const signIn = async (data: ISignIn) => postApi<ISignInRes>('auth/signIn', data)