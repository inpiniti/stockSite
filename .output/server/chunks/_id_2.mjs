import { d as defineEventHandler, g as getRouterParam } from './user.mjs';
import { u as useSupabase } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@supabase/supabase-js';
import 'axios';
import 'cheerio';
import 'iconv-lite';

const _id_ = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = await useSupabase().from("youtube").select().eq("video_id", id).order("created_at", { ascending: false }).limit(1);
  if (data.data && data.data.length > 0) {
    return data.data[0];
  }
  return null;
});

export { _id_ as default };
//# sourceMappingURL=_id_2.mjs.map
