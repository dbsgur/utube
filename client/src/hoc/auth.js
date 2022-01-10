import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  //option
  //null >> 아무나 출입 가능한 페이지
  //true >> 로그인한 유저만 출입이 가능한 페이지
  //false >> 로그인한 유저는 출입이 불가능한 페이지 ex) signup, login

  function AuthenticationCheck() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // console.log(response);
        // console.log("option:", option);
        //로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            //로그인하지 않았는데,
            //로그인한 유저만 들어갈수 있는 페이지로 들어오면 로그인 페이지로 go
            navigate("/login");
          }
        } else {
          //로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            //adminRoute페이지 들어가려는데 response.payload.isAdmin이 false
            //즉, 관리자 권한이 없을때 랜딩페이지로 이동
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return <AuthenticationCheck />;
}
