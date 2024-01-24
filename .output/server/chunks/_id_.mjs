import { d as defineEventHandler, g as getRouterParam } from './nitro/node-server.mjs';
import { f as fetchData } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'axios';
import 'cheerio';
import 'iconv-lite';

const _id_ = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    return "id or kr is not exist";
  }
  const $ = await fetchData(
    `https://gall.dcinside.com/mgallery/board/lists/?id=${id}`
  );
  const data = parsing($);
  return data;
});
function parsing($) {
  let data = [];
  $(".ub-content").each(function() {
    const subject = $(this).find(".gall_subject").text();
    if (subject !== "\uC124\uBB38" && subject !== "\uACF5\uC9C0") {
      const num = Number($(this).find(".gall_num").text());
      const title = $(this).find(".gall_tit a:first").text();
      const secondATagText = $(this).find(".gall_tit a:nth-child(2)").text();
      const matchResult = secondATagText.match(/\d+/);
      const number = Number(matchResult ? matchResult[0] : 0);
      const link = "https://gall.dcinside.com" + $(this).find(".gall_tit > a").attr("href");
      const writer = $(this).find(".gall_writer").text().trim();
      const date = $(this).find(".gall_date").attr("title");
      const count = Number($(this).find(".gall_count").text());
      const recommend = Number($(this).find(".gall_recommend").text());
      data.push({
        type: "dcinside",
        num,
        subject,
        title,
        number,
        link,
        writer,
        date,
        count,
        recommend
      });
    }
  });
  return data;
}

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
