import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { useRequest } from 'ahooks'
import { deleteUserApi, getUserListApi } from '@/api/user'
import AddUer from './AddUer'
import UpdateUer from './UpdateUser'



export default function UserList() {
  const [ params, setParams ] = useState({
    pageSize: 10,
    pageNo: 1,
  })
  const { data, run } = useRequest(() => getUserListApi(params), {
    refreshDeps: [ params ]
  })
  const onChange = (nextPageNo, nextPageSize) => {
    setParams({
      pageSize: nextPageSize,
      pageNo: nextPageNo
    })
  }
  const { pageNo, pageSize } = params
  const refresh = () => {
    run()
  }
  const deleteUser = async (id) => {
   await deleteUserApi(id)
   refresh()
  }
  const columns = [
    {
      dataIndex: 'id',
      title: 'id'
    },
    {
      dataIndex: 'username',
      title: '用户名'
    },
    {
      dataIndex: 'option',
      render: (_, record) => {
        return <>
          <Button onClick={() => deleteUser(record.id)} > 删除</Button>
          <UpdateUer refresh={refresh} user={record} />
        </>
      }
    }
  ]
  return (
    <div>
      <AddUer refresh={refresh} />
      <Table size="small" rowKey="id" columns={columns} dataSource={data?.list} pagination={{ total: data?.total, current: pageNo, pageSize, onChange }} />
    </div>
  )
}
