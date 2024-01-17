// 이메이 전송

// 모듈 npm i nodemailer
// npm i --save-dev @types/nodemailer
// nuxt 에서 쓸려면 두번째 것도 설치해야하는데, 첫번째꺼는 설치꼭 해야 되는건지 좀 의문임;;

// 전송 옵션
// let transporter = nodemailer.createTransport({
//     // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이기에 'gmail'
//     service: 'gmail',
//     // host를 gmail로 설정
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       // Gmail 주소 입력, 'testmail@gmail.com'
//       user: process.env.NODEMAILER_USER,
//       // Gmail 패스워드 입력
//       pass: process.env.NODEMAILER_PASS,
//     },
//   });

// 전송하기
// let info = await transporter.sendMail({
//     // 보내는 곳의 이름과, 메일 주소를 입력
//     from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
//     // 받는 곳의 메일 주소를 입력
//     to: email,
//     // 보내는 메일의 제목을 입력
//     subject: 'WDMA Auth Number',
//     // 보내는 메일의 내용을 입력
//     // text: 일반 text로 작성된 내용
//     // html: html로 작성된 내용
//     text: generatedAuthNumber,
//     html: `<b>${generatedAuthNumber}</b>`,
//   });

// 기타 설정
// 1. imap 설정을 한다.
// 2. 보안 수준이 낮은 앱의 액세스를 허용한다. (휴대폰 인증)
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  let transporter = nodemailer.createTransport({
    // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이기에 'gmail'
    service: "gmail",
    // host를 gmail로 설정
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // Gmail 주소 입력, 'testmail@gmail.com'
      user: "younginpiniti@gmail.com",
      // Gmail 패스워드 입력
      pass: "bblb enkn uucj prnd",
    },
  });

  await transporter.sendMail({
    from: `younginpiniti@gmail.com`,
    to: `wjd0r@naver.com`,
    subject: "타이틀", // 타이틀
    text: "text231", // 일반 text로 작성된 내용ㄴ
  });

  return {
    hello: "world",
  };
});
