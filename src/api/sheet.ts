import { defHttp } from '@utils/http/axios'
import { Sheet } from './sheet.d'

export const getSheetByIdApi = async (id: number) => defHttp.get<Sheet>({
    url: `sheet/${id}`,
})

export const createSheet = async (data: Sheet) => defHttp.post({
    url: 'sheet',
    data
})