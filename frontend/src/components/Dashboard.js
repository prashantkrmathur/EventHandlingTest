import React from 'react';
import { Layout, theme } from 'antd';
const { Header, Content } = Layout;
const Dashboard = (props) => {
  const { user } = props.location.state
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" style={{ color: "white" }} >Welcome user : {user?.firstName} {user?.lastName}</div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
    </Layout>
  );
};
export default Dashboard;