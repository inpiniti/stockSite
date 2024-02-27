import axios from "axios";
import iconv from "iconv-lite";

//https://www.youtube.com/watch?v=isY3rtuSsK8
// 조회하여 조회수 업로드
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const response = await axios.get(`https://www.youtube.com/watch?v=${id}`);
  const html = iconv.decode(Buffer.from(response.data), "utf-8");

  // html 에서 "shortViewCount": { "simpleText": "조회수 5131만회" }, 를 찾아서
  // 5131만회 만 뽑아낸다.

  const regex =
    /"viewCount"\s*:\s*{\s*"simpleText"\s*:\s*"조회수\s*([^회]+)회"\s*}/;
  const match = html.match(regex); // 정규 표현식과 일치하는 부분을 찾습니다.

  if (match) {
    const viewCount = match[1]; // 첫 번째 캡처 그룹이 조회수입니다.

    //57,524,056 이걸 숫자로
    return parseInt(viewCount.replace(/,/g, ""));
  } else {
    return "No match found";
  }
});
