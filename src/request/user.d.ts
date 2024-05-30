import { IPageData, IPageRes } from './type.d'

interface User {
    id: number;
    username: string;
}
export interface IUserListData extends IPageData { }

export interface IUserListRes extends IPageRes<User[]> {

}

export interface UserAdd {
    password: number;
    username: string;
}
export type UserUpdate =  {
    id: number
} & UserAdd