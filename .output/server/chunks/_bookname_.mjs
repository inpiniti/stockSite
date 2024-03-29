import { d as defineEventHandler, g as getRouterParam } from './user.mjs';
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

const _bookname_ = defineEventHandler(async (event) => {
  const bookname = getRouterParam(event, "bookname");
  const response = await axios.get(`https://namu.wiki/w/${bookname}`);
  const html = iconv.decode(Buffer.from(response.data), "utf-8");
  const $ = cheerio.load(html);
  let data = [];
  const headers = Array.from($("h2"));
  for (const [index, element] of headers.entries()) {
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
  }
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
  if (genreContents.length == 0) {
    $("tbody > tr > td > div > strong > span").each((index, element) => {
      const genre = $(element).text();
      if (genre === "\uB974") {
        const nextTd = $(element).parents("td").next();
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });
        return false;
      }
    });
  }
  if (genreContents.length == 0) {
    $("tbody > tr > td > div > strong").each((index, element) => {
      const genre = $(element).text();
      if (genre === "\uC7A5\uB974") {
        const nextTd = $(element).parents("td").next();
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });
        return false;
      }
    });
  }
  if (genreContents.length == 0) {
    $("tbody > tr > td > div > div > strong > span").each((index, element) => {
      const genre = $(element).text();
      if (genre === "\uC7A5\uB974") {
        const nextTd = $(element).parents("td").next();
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });
        return false;
      }
    });
  }
  genreContents = genreContents.filter((genre) => {
    return !genre.match(/\[\d+\]/);
  });
  return {
    data,
    gneres: genreContents
  };
});

export { _bookname_ as default };
//# sourceMappingURL=_bookname_.mjs.map
