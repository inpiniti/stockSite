import { d as defineEventHandler } from './user.mjs';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@supabase/supabase-js';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const namuWiki = defineEventHandler(async (event) => {
  const response = await axios.get(
    "https://namu.wiki/w/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84",
    {
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    }
  );
  const html = iconv.decode(Buffer.from(response.data), "utf-8");
  const $ = cheerio.load(html);
  let data = [];
  $("h2").each((index, element) => {
    const aTag = $(element).find("a");
    for (let i = 1; i <= 20; i++) {
      if (aTag.text().includes(i + ".")) {
        const spanTag = $(element).find("span");
        const title = spanTag.text();
        const contentElement = $(element).next();
        const content = contentElement.find("div").text();
        const cleanedTitle = title.replace(/\[.*?\]/g, "");
        const cleanedContent = content.replace(/\[.*?\]/g, "");
        if (!cleanedContent.includes("\uC790\uC138\uD55C \uB0B4\uC6A9\uC740") && !cleanedContent.includes("\uBD80\uBD84\uC744 \uCC38\uACE0\uD558\uC2ED\uC2DC\uC624") && cleanedContent !== "" && !cleanedTitle.includes("\uBC1C\uB9E4 \uD604\uD669") && !cleanedTitle.includes("\uC778\uAE30")) {
          data.push({ title: cleanedTitle, content: cleanedContent });
        }
      }
    }
  });
  let genreContents = [];
  $("tbody > tr > td > div > strong > span").each((index, element) => {
    const genre = $(element).text();
    if (genre === "\uC7A5\uB974") {
      const nextTd = $(element).parents("td").next();
      nextTd.find("div > a").each((i, el) => {
        genreContents.push($(el).text());
      });
      return false;
    }
  });
  return data;
});

export { namuWiki as default };
//# sourceMappingURL=namuWiki.mjs.map
