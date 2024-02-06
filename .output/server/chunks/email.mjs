import { d as defineEventHandler } from './user.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@supabase/supabase-js';
import 'axios';
import 'cheerio';
import 'iconv-lite';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const email = defineEventHandler(async (event) => {
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
      pass: "bblb enkn uucj prnd"
    }
  });
  await transporter.sendMail({
    from: `younginpiniti@gmail.com`,
    to: `wjd0r@naver.com`,
    subject: "\uD0C0\uC774\uD2C0",
    // 타이틀
    text: "text231"
    // 일반 text로 작성된 내용ㄴ
  });
  return {
    hello: "world"
  };
});

export { email as default };
//# sourceMappingURL=email.mjs.map
