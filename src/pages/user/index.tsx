import React, { useState } from 'react'
import { Table } from 'antd'
import { useRequest } from 'ahooks'
import { userList } from '@/request/user'


const columns = [
  {
    dataIndex: 'id',
    title: 'id'
  },
  {
    dataIndex: 'username',
    title: '用户名'
  }
]
export default function UserList() {
  const [ params, setParams ] = useState({
    pageSize: 10,
    pageNo: 1,
  })
  const { data: res } = useRequest(() => userList(params), {
    refreshDeps: [ params ]
  })
  const onChange = (nextPageNo, nextPageSize) => {
    setParams({
      pageSize: nextPageSize,
      pageNo: nextPageNo
    })
  }
  const { pageNo, pageSize } = params
  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={res?.data?.list} pagination={{ total: res?.data?.total, current: pageNo, pageSize, onChange }} />
    </div>
  )
}
