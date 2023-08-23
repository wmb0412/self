import React, { useMemo, useState, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu, Button, theme } from 'antd';
import  Loading  from '@components/loading';
import baseRouter from '@routes/baseRoutes';

const { Header, Sider, Content } = Layout;

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick = (e) => {
    navigate(e.key)
  }
  const menuItems = useMemo(() => baseRouter.map(item => ({
    key: item.path,
    label: item.title,
  })), [])
  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? 1 : 2}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Suspense  fallback={<Loading />}>
            <Outlet />
          </Suspense>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;