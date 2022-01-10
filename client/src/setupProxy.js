const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};

//프록시 사용이유
//1. 아이피를 proxy server에서 임의로 바꿀 수 있다.
// 그래서 인터넷에서 접근하는 사람의 IP를 모르게 할 수 있음
//2. 보내는 데이터도 임의로 바꿀 수 있다.
//방화벽기능, 웹 필터 기능, 캐쉬 데이터, 공유 데이터 제공 기능

//!!!
//1. 회사에서 직원들이나 집안에서 아이들 인터넷 사용제어
//2. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
//3. 더 나은 보안 제공
//4. 이용 제한된 사이트 제공
