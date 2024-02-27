export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  // 조회수 업데이트
  const data = await useSupabase()
    .from("youtube")
    .select()
    .eq("video_id", id)
    .order("created_at", { ascending: false })
    .limit(1);

  if (data.data && data.data.length > 0) {
    return data.data[0];
  }

  return null;
});
