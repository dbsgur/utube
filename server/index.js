// --save >> package.json에 추가
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

//서버에서 가져온 데이터를 파싱해서 가져와준다.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected ... "))
  .catch((err) => console.log(err));

app.use("/api/users", require("./routes/users"));

// //회원가입
// app.post("/api/users/register", (req, res) => {
//   const user = new User(req.body);

//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).json({
//       success: true,
//     });
//   });
// });

// //로그인
// app.post("/api/users/login", (req, res) => {
//   //1. 요청된 이메일이 데이터베이스에 있는 지 찾는다.
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if (!user) {
//       return res.json({
//         loginSuccess: false,
//         message: "이메일에 해당하는 유저가 없습니다.",
//       });
//     }
//     //2. 1조건 충족 시, 비번 맞는 지 확인
//     user.comparePassword(req.body.password, (err, isMatch) => {
//       if (!isMatch)
//         return res.json({
//           loginSuccess: false,
//           message: "비밀번호가 틀렸습니다.",
//         });
//       //3. 2조건 충족 시, 토큰 생성
//       user.generateToken((err, user) => {
//         if (err) return res.status(400).send(err);
//         //토큰을 저장한다. where? 쿠키 OR 로컬 스토리지 OR 세션스토리지
//         //쿠키 name : value
//         res
//           .cookie("x_auth", user.token)
//           .status(200)
//           .json({ loginSuccess: true, userId: user._id });
//       });
//     });
//   });
// });

// //Authentication 자격 (관리자화면, 비회원화면)
// //auth는 미들웨어
// app.get("/api/users/auth", auth, (req, res) => {
//   //여기까지 오면 미들웨어를 통과했다는 거임
//   //그렇다면 Auth가 True라는 뜻
//   res.status(200).json({
//     _id: req.user._id,
//     // 0> 일반 유저 ^ 나머지 관리자
//     isAdmin: req.user.role === 0 ? false : true,
//     isAuth: true,
//     email: req.user.email,
//     name: req.user.name,
//     lastname: req.user.lastname,
//     role: req.user.role,
//     image: req.user.image,
//   });
// });

// //LogOut
// app.get("/api/users/logout", auth, (req, res) => {
//   User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).send({ success: true });
//   });
// });

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
