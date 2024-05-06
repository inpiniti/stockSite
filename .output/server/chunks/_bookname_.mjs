import { u as useSupabase, d as defineEventHandler, g as getRouterParam } from './user.mjs';
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

async function coverSave(kr, booknum, cover_image) {
  console.log("coverSave");
  const decoded = decodeURIComponent(kr || "");
  const { data: selectedRows, error: updateError } = await useSupabase().from("cover").select("*").eq("kr", decoded.trim()).eq("booknum", booknum);
  console.log("selectedRows", selectedRows);
  if (selectedRows.length != 0) {
    return;
  }
  let img = "";
  try {
    img = await saveImage(cover_image);
  } catch (error) {
    console.error(error);
    return;
  }
  console.log("useSupabase");
  try {
    const storage_rul = `https://etnyrefdmddqiuatswhb.supabase.co/storage/v1/object/public/${img.fullPath}`;
    const { data: updatedRow, error: updateError2 } = await useSupabase().from("cover").insert({ kr: decoded, booknum, cover_image: storage_rul });
    if (updateError2) {
      console.error("Error uploading image:", updateError2);
    } else {
      console.log("db insert:", updatedRow);
    }
  } catch (error) {
    console.error("error", error);
  }
}
async function saveImage(url) {
  const response = await axios.get(`https:${url}`, {
    responseType: "arraybuffer"
  });
  const buffer = Buffer.from(response.data, "binary");
  const urlObject = new URL(`https:${url}`);
  const pathParts = urlObject.pathname.split("/");
  const filename = "private/" + pathParts[pathParts.length - 1];
  const { data, error } = await useSupabase().storage.from("comics").upload(filename, buffer);
  if (error) {
    console.error("Error uploading image:", error);
    throw error;
  } else {
    console.log("File uploaded at:", data);
  }
  return data;
}

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
        if (cleanedTitle.includes("\uBC1C\uB9E4 \uD604\uD669")) {
          const tables = Array.from($(contentElement).find("table"));
          for (const [index2, element2] of tables.entries()) {
            const rows = $(element2).find("tr");
            const books_ = [];
            let volumes = [];
            let srcs = [];
            rows.each((i2, row) => {
              const tdText = $(row).find("td").text().trim();
              const volume = tdText.match(/\d+권/g);
              console.log(tdText);
              console.log(volume);
              $(row).find("img").map((i3, el) => {
                const src = $(el).attr("src") || "";
                if (src.includes("webp")) {
                  srcs.push(src);
                }
              });
              if (volume) {
                volumes = volumes.concat(volume);
              }
            });
            volumes.forEach((vol, index3) => {
              if (srcs[index3]) {
                books_.push({ booknum: vol, coverImage: srcs[index3] });
              }
            });
            for (const book of books_) {
              await coverSave(
                bookname || "",
                parseInt(book.booknum.match(/\d+/g)[0]),
                book.coverImage
              );
            }
          }
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
