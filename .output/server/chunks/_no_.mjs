import { d as defineEventHandler, g as getRouterParam, a as getQuery } from './nitro/node-server.mjs';
import { f as fetchData } from './index.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'cheerio';
import 'iconv-lite';

const _no_ = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const no = getRouterParam(event, "no");
  const { kr } = getQuery(event);
  if (!id || !kr) {
    return "id or kr is not exist";
  }
  const esno = "3eabc219ebdd65fe3eef84ed";
  const $ = await fetchData(
    `https://gall.dcinside.com/mgallery/board/view/?id=${id}&no=${no}`
  );
  const queryString = `id=${id}&no=${no}&cmt_id=${id}&cmt_no=${no}&e_s_n_o=${esno}`;
  const formData = new FormData();
  queryString.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    formData.append(key, decodeURIComponent(value));
  });
  const comment = await axios.post(
    "https://gall.dcinside.com/board/comment/",
    formData,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }
  );
  const data = parsing($);
  return {
    ...data,
    comment: comment.data
  };
});
function parsing($, kr) {
  const images = $(".write_div img").map(function() {
    return $(this).attr("src");
  }).get();
  const content = $(".write_div").text().trim();
  return {
    content,
    images
  };
}

export { _no_ as default };
//# sourceMappingURL=_no_.mjs.map