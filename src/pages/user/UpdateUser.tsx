import { putUserApi } from '@/request/user'
import { useRequest } from 'ahooks'
import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'

export default function UpdateUer({ refresh, user }) {
    const [ visible, setVisible ] = useState(false)
  return (
    <>
        <Button onClick={() => setVisible(true)}>编辑</Button>
        {visible && <UpdateModal user={user} refresh={refresh} onClose={() => setVisible(false)} />}
    </>
  )
}

function UpdateModal({ onClose, refresh, user }){
    const [ form ] = Form.useForm()
    const { id, ...userAttrs } = user
    const { loading, run } = useRequest((newUser) => putUserApi(id,{
        ...userAttrs,
        ...newUser
    }), {
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
        <Form form={form} initialValues={user} >
        <Form.Item label="用户名" name="username">
            <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
            <Input />
        </Form.Item>
        </Form>
    </Modal>
}