import { d as defineEventHandler, u as useSupabase } from './user.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@supabase/supabase-js';
import 'cheerio';
import 'iconv-lite';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const dbInsert = defineEventHandler(async (event) => {
  const { data: video_ids } = await useSupabase().from("youtube").select("video_id");
  if (!video_ids) {
    console.log("video_id is null");
    return;
  }
  const uniqueVideoIds = video_ids.filter(
    (v, i, a) => a.findIndex((t) => t.video_id === v.video_id) === i
  );
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
      await useSupabase().from("youtube").update({ view_count: viewCount }).eq("video_id", uniqueVideoIds[i].video_id);
      continue;
    }
    const dbViewCount = res2.data.view_count;
    const viewCountChange = viewCount - dbViewCount;
    const { id, created_at, ...rest } = res2.data;
    await useSupabase().from("youtube").insert([
      {
        ...rest,
        view_count: viewCount,
        view_count_change: viewCountChange
      }
    ]);
  }
  return "success";
});

export { dbInsert as default };
//# sourceMappingURL=dbInsert.mjs.map
