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

  // 중복제거
  const uniqueVideoIds = video_ids.filter(
    (v, i, a) => a.findIndex((t) => t.video_id === v.video_id) === i
  );

  // 루프문 돌면서 조회수 업데이트
  for (let i = 0; i < uniqueVideoIds.length; i++) {
    const baseURL = "http://localhost:3000";

    const res = await axios.get(
      `${baseURL}/api/youtube/viewCount/${uniqueVideoIds[i].video_id}`
    );

    const res2 = await axios.get(
      `${baseURL}/api/youtube/dbViewCount/${uniqueVideoIds[i].video_id}`
    );

    const viewCount = res.data;

    if (res2.data.view_count == null) {
      // 조회수 업데이트
      await useSupabase()
        .from("youtube")
        .update({ view_count: viewCount })
        .eq("video_id", uniqueVideoIds[i].video_id);

      continue;
    }

    const dbViewCount = res2.data.view_count;

    const viewCountChange = viewCount - dbViewCount;

    const { id, created_at, ...rest } = res2.data;

    // 조회수 인서트
    const test = await useSupabase()
      .from("youtube")
      .insert([
        {
          ...rest,
          view_count: viewCount,
          view_count_change: viewCountChange,
        },
      ]);
  }

  return "success";
});
