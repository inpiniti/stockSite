import axios from "axios";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const no = getRouterParam(event, "no");
  const { kr } = getQuery(event);

  // id, kr 이 없으면 리턴한다.
  if (!id || !kr) {
    return "id or kr is not exist";
  }

  const esno = "3eabc219ebdd65fe3eef84ed";

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
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  let $ = await fetchData(
    `https://gall.dcinside.com/mgallery/board/view/?id=${id}&no=${no}`
  );

  let data = parsing($, String(kr));

  if (data.content === "") {
    $ = await fetchData(
      `https://gall.dcinside.com/board/view/?id=${id}&no=${no}`
    );

    data = parsing($, String(kr));
  }

  try {
    //const result = await useSupabase().from("board").insert(data);
    //console.log(result);
  } catch (error) {
    console.log(error);
  }

  return {
    ...data,
    comment: comment.data,
  };
});

import { CheerioAPI } from "cheerio";
function parsing($: CheerioAPI, kr: string) {
  const images = $(".write_div img")
    .map(function () {
      return $(this).attr("src");
    })
    .get();

  // images 에 http 가 없는 애들은 빼줘
  const filteredImages = images.filter((image) => {
    return image.includes("http");
  });

  // $(".write_div") 에 이미지도 있으면, src 리스트화 해줘
  // { content: '', images: [] } 이렇게

  const content = $(".write_div").html(); //.text().trim();

  // <div class="write_div" style="overflow:hidden;width:900px;" data-tracking="e7ab98720777f0a1cc3f2f9f3b420c0b9898eb501fe3929f63763d5ae7">
  // <div><div class="imgwrap"><img src="https://dcimg7.dcinside.co.kr/viewimage.php?id=27b2df35eadd34&amp;no=24b0d769e1d32ca73ce983fa11d0283107ab5cf91d66c5d1ce22a5f13e0c60f0e79ff8d509d83b847fc140b6fe555d14cf4c851371438f23bc1a7b51bf8ff772028eb2a396ad25d1" onerror="reload_img(this)" alt="0490f719b18669f220b5c6b011f11a39b8f8783e7ba45b6b839f"></div></div><br><div>그냥 켄자쿠나 슼이나 둘다 병신임 진지하게 켄자쿠가 최종 보스여도 별로일걸 츠쿠모전같은거 억빠나 계속 나오겠제</div>
  // </div>

  return {
    content: content,
    images: filteredImages,
  };
}
