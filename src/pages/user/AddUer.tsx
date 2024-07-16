import { userAddApi } from '@/api/user'
import { useRequest } from 'ahooks'
import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'

export default function AddUer({ refresh }) {
    const [ visible, setVisible ] = useState(false)
  return (
    <>
        <Button onClick={() => setVisible(true)}>添加</Button>
        {visible && <AddModal refresh={refresh} onClose={() => setVisible(false)} />}
    </>
  )
}

function AddModal({ onClose, refresh }){
    const [ form ] = Form.useForm()
    const { loading, run } = useRequest(userAddApi, {
        manual: true,
        onSuccess(){
            refresh()
            onClose()
        }
    })
    const onOk = async () => {
        run(form.getFieldsValue())
    }
    return <Modal open title="用户添加" onOk={onOk} onCancel={onClose} confirmLoading={loading}>
        <Form form={form} >
        <Form.Item label="用户名" name="username">
            <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
            <Input />
        </Form.Item>
        </Form>
    </Modal>
}