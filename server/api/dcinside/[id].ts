export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  //const { kr } = getQuery(event);

  // id, kr 이 없으면 리턴한다.
  if (!id) {
    return "id or kr is not exist";
  }

  const $ = await fetchData(
    `https://gall.dcinside.com/mgallery/board/lists/?id=${id}`
  );

  const data = parsing($);

  return data;
});

import { CheerioAPI } from "cheerio";
function parsing($: CheerioAPI) {
  let data: any = [];

  // .ub-content us-post 를 찾는다.
  // 그 안의 .gall_subject 를 찾고 text가 '설문', '공지' 이면 다음 .ub-content us-post 으로 넘어간다.
  // 그 안의 .gall_subject 를 찾고 text가 '설문', '공지' 가 아니면 data에 추가한다.
  // 추가할때, .gall_num 는 num 으로 안내 내용을 text화
  // .gall_subject 는 subject 으로 안내 내용을 text화
  // .gall_tit 은 title 으로 안내 내용을 text화 하는데
  // .gall_tit > a 는 따로 link 로 href 를 text로 넣는다.
  // 이어서 .gall_writer 은 writer
  // .gall_date 는 date 인데, 이건 내용을 text 화하지말고, <td class="gall_date" title="2024-01-21 10:02:00">10:02</td> 이렇게 되어 있는 부분에서 title 의 내용을 text화 한다.
  // .gall_count 는 count 를
  // .gall_recommend 는 recommend로 text 화한다.
  // 결과물은 [{ num:'', subject:'', like:'', writer:'', date:'', count:'', recommend:'' }]
  // 와 같이 나오면 된다.
  $(".ub-content").each(function () {
    const subject = $(this).find(".gall_subject").text();

    if (subject !== "설문" && subject !== "공지") {
      const num = Number($(this).find(".gall_num").text());
      const title = $(this).find(".gall_tit a:first").text();
      const secondATagText = $(this).find(".gall_tit a:nth-child(2)").text();
      const matchResult = secondATagText.match(/\d+/);
      const number = Number(matchResult ? matchResult[0] : 0);
      const link =
        "https://gall.dcinside.com" +
        $(this).find(".gall_tit > a").attr("href");
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
        recommend,
      });
    }
  });

  return data;
}
