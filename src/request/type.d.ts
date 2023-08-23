export interface IPageData {
    pageSize?: number;
    pageNo?: number
}
export interface IPageRes<T>{
    list: T;
    pageSize: number;
    pageNo: number;
    total: number;
}
