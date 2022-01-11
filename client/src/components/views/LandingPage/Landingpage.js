import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("Logout Fail");
      }
    });
  };
  return (
    <div
      style={{
        padding: 24,
        minHeight: 380,
        backgroundColor: "#fff",
      }}
    >
      <h1>Landingpage</h1>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default Landingpage;
