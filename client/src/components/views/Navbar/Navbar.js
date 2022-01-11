import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Navbar.css";
const { Header, Content, Footer } = Layout;

function Navbar() {
  return (
    // <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", top: "0" }}>
      <div className="Navbar_logo" />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}> */}
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Main</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/video/upload">Video</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/login">Login</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    </Header>
    // </Layout>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     width: "100%",
    //     height: "70px",
    //     top: 0,
    //     // position: "absolute",
    //     marginTop: "10px",
    //     borderBottom: "1px solid black",
    //   }}
    // >
    //   <Link to="/register">회원가입</Link>
    //   <Link to="/login">로그인</Link>
    //   <Link to="/">메인</Link>
    //   <Link to="/video/upload">비디오 업로드</Link>
    // </div>
  );
}

export default Navbar;
