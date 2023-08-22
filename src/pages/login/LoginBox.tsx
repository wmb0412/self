import React from "react";
import { Form, Input, Button } from "antd";
import { useForm } from "antd/es/form/Form";

export default function LoginBox() {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Form.Item name="username">
        <Input />
      </Form.Item>
      <Form.Item name="password">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
