import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import LandigPage from "./components/views/LandingPage/Landingpage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Navbar from "./components/views/Navbar/Navbar";
import Bottom from "./components/views/Bottom/Bottom";
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";

import { Layout, Menu, Breadcrumb } from "antd";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Navbar />
      <Content
        className="App_layout"
        style={{ padding: "0 150px", marginTop: 64 }}
      >
        <Routes>
          <Route exact path="/" element={Auth(LandigPage, null)} />
          <Route path="/login" element={Auth(LoginPage, false)} />
          <Route path="/register" element={Auth(RegisterPage, false)} />
          <Route path="/video/upload" element={Auth(VideoUploadPage, true)} />
        </Routes>
      </Content>
      <Bottom />
    </Router>
  );
}

export default App;
