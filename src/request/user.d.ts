import { IPageData, IPageRes } from './type.d'

interface User {
    id: number;
    username: string;
}
export interface IUserListData extends IPageData { }

export interface IUserListRes extends IPageRes<User[]> {

}