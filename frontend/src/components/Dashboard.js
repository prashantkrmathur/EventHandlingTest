import React from "react";
import { Layout, theme } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import ScreenRecord from "./ScreenRecord";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const { Header, Content } = Layout;

const Dashboard = (props) => {
  const { user } = props.location.state;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login")
  }
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent :"space-between",
            alignItems: "center",
          }}
        >
          <UserOutlined
            style={{ fontSize: "2em", color: "grey", margin: "1em" }}
          />
          <h3 className="demo-logo" style={{ color: "white" }}>
            Welcome user : {user?.firstName} {user?.lastName}
          </h3>
          <LogoutOutlined onClick={handleLogout} style={{ fontSize: "2em", color: "grey", margin: "1em" }} />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            <ScreenRecord />
          </div>
        </Content>
      </Layout>
    </>
  );
};
export default Dashboard;
