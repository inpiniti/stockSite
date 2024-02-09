import { d as defineEventHandler, g as getRouterParam } from './user.mjs';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';
import { createClient } from '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);
const _date_ = defineEventHandler(async (event) => {
  const monday = getRouterParam(event, "date");
  const data = await oricon_loop(String(monday));
  await saveToDatabase(data);
  return data;
});
async function saveToDatabase(data) {
  try {
    await supabase.from("book").insert(data);
  } catch (error) {
    console.log(error);
  }
}
async function oricon_loop(monday) {
  const base_url = `https://www.oricon.co.jp/rank/obc/w/${monday}/`;
  let allData = [];
  for (let i = 2; i >= 0; i--) {
    const url = i === 0 ? base_url : `${base_url}p/${i + 1}/`;
    const data = await fetchData(url);
    allData = [...data, ...allData];
  }
  const includingDates = allData.map((item) => {
    return {
      ...item,
      date: monday
    };
  });
  return includingDates;
}
async function fetchData(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const html = iconv.decode(Buffer.from(response.data), "shift_jis");
  const $ = cheerio.load(html);
  const data = [];
  $(".box-rank-entry").each((index, element) => {
    const title = $(element).find("h2.title").text().trim();
    const name = $(element).find("p.name").text().trim();
    let sales = $(element).find("ul.list > li").eq(3).text().trim();
    const rank = Number($(element).find("p.num").text().trim());
    const match = title.match(/(\D+)(\d+)/);
    sales = sales.replace(/[^0-9]/g, "");
    if (match) {
      const jp = match[1].trim();
      const booknum = Number(match[2]);
      data.push({ jp, name, sales, rank, booknum });
    }
  });
  return data;
}

export { _date_ as default };
//# sourceMappingURL=_date_.mjs.map
