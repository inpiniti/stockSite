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
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  const data = parsing($, String(kr));

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

  const content = $(".write_div").text().trim();

  return {
    content: content,
    images: filteredImages,
  };
}
