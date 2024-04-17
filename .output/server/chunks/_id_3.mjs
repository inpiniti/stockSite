import { d as defineEventHandler, g as getRouterParam } from './user.mjs';
import axios from 'axios';
import iconv from 'iconv-lite';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const _id_ = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const response = await axios.get(`https://www.youtube.com/watch?v=${id}`);
  const html = iconv.decode(Buffer.from(response.data), "utf-8");
  const regex = /"viewCount"\s*:\s*{\s*"simpleText"\s*:\s*"조회수\s*([^회]+)회"\s*}/;
  const match = html.match(regex);
  if (match) {
    const viewCount = match[1];
    return parseInt(viewCount.replace(/,/g, ""));
  } else {
    return "No match found";
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_3.mjs.map
