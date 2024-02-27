import axios from "axios";
import iconv from "iconv-lite";

//https://www.youtube.com/watch?v=isY3rtuSsK8
// 조회하여 조회수 업로드
export default defineEventHandler(async (event) => {
  const { data: video_ids } = await useSupabase()
    .from("youtube")
    .select("video_id");

  // video_id가 null인지 확인
  if (!video_ids) {
    console.log("video_id is null");
    return;
  }

  //1초에 한번씩 루프문 돌면서 조회수 업데이트
  for (let i = 0; i < video_ids.length; i++) {
    const response = await axios.get(
      `https://www.youtube.com/watch?v=${video_ids[i].video_id}`
    );
    const html = iconv.decode(Buffer.from(response.data), "utf-8");

    // html 에서 "shortViewCount": { "simpleText": "조회수 5131만회" }, 를 찾아서
    // 5131만회 만 뽑아낸다.

    const regex =
      /"shortViewCount"\s*:\s*{\s*"simpleText"\s*:\s*"조회수\s*([^회]+)회"\s*}/;
    const match = html.match(regex); // 정규 표현식과 일치하는 부분을 찾습니다.

    if (match) {
      const viewCount = match[1]; // 첫 번째 캡처 그룹이 조회수입니다.

      // 조회수 업데이트
      await useSupabase()
        .from("youtube")
        .update({ view_count: viewCount })
        .eq("video_id", video_ids[i].video_id);
    } else {
      console.log("No match found");
    }
  }

  return "success";
});
