import axios from "axios";
import cheerio from "cheerio";
import iconv from "iconv-lite";
import { coverSave } from "~/server/utils/cover";

export default defineEventHandler(async (event) => {
  const bookname = getRouterParam(event, "bookname");

  const response = await axios.get(`https://namu.wiki/w/${bookname}`);

  const html = iconv.decode(Buffer.from(response.data), "utf-8");
  const $ = cheerio.load(html);

  let data: any = [];

  // h2를 찾는다.
  const headers = Array.from($("h2"));

  for (const [index, element] of headers.entries()) {
    // 그안에 있는 a태그를 찾는다.
    const aTag = $(element).find("a");

    for (let i = 1; i <= 20; i++) {
      // i. 을 포함하는지 확인한다.
      if (aTag.text().includes(i + ".")) {
        // i. 을 포함하는 경우.
        // h2안의 span태그를 찾는다.
        const spanTag = $(element).find("span");

        // span태그의 text를 i번의 제목으로 한다.
        const title = spanTag.text();

        // h2의 형제요소 중 그 다음 요소가 내용이다.
        const contentElement = $(element).next();

        // 내용에 해당하는 요소에서 <div> 아래에 있는 내용을 text 화하는데, a태그도 택스트화 한다.
        const content = contentElement.find("div").text();

        const cleanedTitle = title.replace(/\[.*?\]/g, "");
        const cleanedContent = content.replace(/\[.*?\]/g, "");

        // '자세한 내용은' 또는 '부분을 참고하십시오'가 포함되어 있지 않을 때만 data 배열에 객체를 추가한다.
        if (
          !cleanedContent.includes("자세한 내용은") &&
          !cleanedContent.includes("부분을 참고하십시오") &&
          cleanedContent !== "" &&
          !cleanedTitle.includes("발매 현황") &&
          !cleanedTitle.includes("인기")
        ) {
          data.push({ title: cleanedTitle, content: cleanedContent });
        }

        // if (cleanedTitle.includes("발매 현황")) {
        //   // table 에서 tr을 찾는데,
        //   // tr의 td의 text 중 01권 02권 이런 식으로 데이어 있는 데이터는 책의 권수를 나타내고,
        //   // 그 다음 tr의 에는 각 권수에 해당하는 책의 표지가 있다. ㅑㅡㅎ
        //   // img의 클래스 명이 yoqUDm0-
        //   // 이미지 파싱

        //   const tables = Array.from($(contentElement).find("table"));

        //   for (const [index, element] of tables.entries()) {
        //     const rows = $(element).find("tr");

        //     const books_: any = [];
        //     let volumes: any = [];
        //     let srcs: any = [];

        //     rows.each((i, row) => {
        //       // 권수
        //       const tdText = $(row).find("td").text().trim();
        //       const volume = tdText.match(/\d+권/g);

        //       // 표지
        //       $(row)
        //         .find("img")
        //         .map((i, el) => {
        //           const src = $(el).attr("src") || "";
        //           if (src.includes("webp")) {
        //             srcs.push(src);
        //           }
        //         });

        //       if (volume) {
        //         volumes = volumes.concat(volume);
        //       }
        //     });

        //     volumes.forEach((vol: any, index: number) => {
        //       if (srcs[index]) {
        //         books_.push({ booknum: vol, coverImage: srcs[index] });
        //       }
        //     });

        //     for (const book of books_) {
        //       await coverSave(
        //         bookname || "",
        //         parseInt(book.booknum.match(/\d+/g)[0]),
        //         book.coverImage
        //       );
        //     }
        //   }
        // }
      }
    }
  }

  // $ 에서  tbody > tr > td > div > strong > sapn 를 찾는다.
  // 그 안의 text 가 장르이면,
  // 해당하는 td 의 다음 td 가 장르의 내용에 해당한다.
  // 장르의 내용은 td > div > a 의 text 의 리스트로 되어 있다.
  // 그 리스트를 {장르 : [ 내용1, 내용2, 내용3 ... ]} 으로 만들어서 반환한다.
  let genreContents: any = [];

  // tbody > tr > td > div > strong > span 를 찾는다.
  $("tbody > tr > td > div > strong > span").each((index, element) => {
    const genre = $(element).text();
    if (genre === "장르") {
      // 해당하는 td 의 다음 td 가 장르의 내용에 해당한다.
      const nextTd = $(element).parents("td").next();

      // 장르의 내용은 td > div > a 의 text 의 리스트로 되어 있다.
      nextTd.find("div > a").each((i, el) => {
        genreContents.push($(el).text());
      });

      // 장르를 찾았으므로 루프를 종료한다.
      return false;
    }
  });

  if (genreContents.length == 0) {
    // 장르를 못찾았으므로 다시 찾는다.

    // tbody > tr > td > div > strong > span 를 찾는다.
    $("tbody > tr > td > div > strong > span").each((index, element) => {
      const genre = $(element).text();
      if (genre === "르") {
        // 해당하는 td 의 다음 td 가 장르의 내용에 해당한다.
        const nextTd = $(element).parents("td").next();

        // 장르의 내용은 td > div > a 의 text 의 리스트로 되어 있다.
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });

        // 장르를 찾았으므로 루프를 종료한다.
        return false;
      }
    });
  }

  if (genreContents.length == 0) {
    // 장르를 못찾았으므로 다시 찾는다.

    // tbody > tr > td > div > strong 를 찾는다.
    $("tbody > tr > td > div > strong").each((index, element) => {
      const genre = $(element).text();
      if (genre === "장르") {
        // 해당하는 td 의 다음 td 가 장르의 내용에 해당한다.
        const nextTd = $(element).parents("td").next();

        // 장르의 내용은 td > div > a 의 text 의 리스트로 되어 있다.
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });

        // 장르를 찾았으므로 루프를 종료한다.
        return false;
      }
    });
  }

  if (genreContents.length == 0) {
    // 장르를 못찾았으므로 다시 찾는다.

    // tbody > tr > td > div > div > strong > span 를 찾는다.
    $("tbody > tr > td > div > div > strong > span").each((index, element) => {
      const genre = $(element).text();
      if (genre === "장르") {
        // 해당하는 td 의 다음 td 가 장르의 내용에 해당한다.
        const nextTd = $(element).parents("td").next();

        // 장르의 내용은 td > div > a 의 text 의 리스트로 되어 있다.
        nextTd.find("div > a").each((i, el) => {
          genreContents.push($(el).text());
        });

        // 장르를 찾았으므로 루프를 종료한다.
        return false;
      }
    });
  }

  // genreContents 값들중에 [1], [2] 이런건 배열에서 제거한다.
  genreContents = genreContents.filter((genre: string) => {
    return !genre.match(/\[\d+\]/);
  });

  return {
    data: data,
    gneres: genreContents,
  };
});

// h2를 찾는다.
// 그안에 있는 a태그를 찾는다.
// 1. 을 포함하는지 확인한다.
// 1. 을 포함하는 경우.
// h2안의 span태그를 찾는다.
// span태그의 text를 1번의 제목으로 한다.
// h2의 형제요소 중 그 다음 요소가 내용이다.
// 내용에 해당하는 요소에서 <div> 아래에 있는 내용을 text 화하는데, a태그도 택스트화 한다.
