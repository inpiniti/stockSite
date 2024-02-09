import { d as defineEventHandler } from './user.mjs';
import { u as useSupabase } from './index.mjs';
import axios from 'axios';
import iconv from 'iconv-lite';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@supabase/supabase-js';
import 'cheerio';

const youtube = defineEventHandler(async (event) => {
  const { data: video_ids } = await useSupabase().from("youtube").select("video_id");
  if (!video_ids) {
    console.log("video_id is null");
    return;
  }
  for (let i = 0; i < video_ids.length; i++) {
    const response = await axios.get(
      `https://www.youtube.com/watch?v=${video_ids[i].video_id}`
    );
    const html = iconv.decode(Buffer.from(response.data), "utf-8");
    const regex = /"shortViewCount"\s*:\s*{\s*"simpleText"\s*:\s*"조회수\s*([^회]+)회"\s*}/;
    const match = html.match(regex);
    if (match) {
      const viewCount = match[1];
      await useSupabase().from("youtube").update({ view_count: viewCount }).eq("video_id", video_ids[i].video_id);
    } else {
      console.log("No match found");
    }
  }
  return "success";
});

export { youtube as default };
//# sourceMappingURL=youtube.mjs.map
