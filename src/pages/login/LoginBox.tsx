import { Form, Input, Button } from "antd";
import { useRequest } from 'ahooks'
import { signIn } from "@/api/auth";
import { useNavigate } from "react-router-dom";
export default function LoginBox() {
  const [ form ] = Form.useForm();
  const navigate = useNavigate()
  const { loading, runAsync } = useRequest(signIn, {
    manual: true,
    onSuccess: () => {
      navigate('/')
    }
  })
  return (
    <Form form={form} onFinish={runAsync} initialValues={{ username: 'zhangsan', password: 'string' }}>
      <Form.Item name="username">
        <Input />
      </Form.Item>
      <Form.Item name="password">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
