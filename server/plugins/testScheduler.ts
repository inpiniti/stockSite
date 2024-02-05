import { useScheduler } from "#scheduler";
import axios from "axios";

export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const scheduler = useScheduler();

  // 주술회전
  scheduler
    .run(async () => {
      console.log("주술회전 게시글 조회");
      // 게시글 조회
      try {
        const boards = await axios.get(
          `http://localhost:3000/api/dcinside/joosool`
        );
        console.log("주술회전 게시글 조회 완료");

        // 가장 높은 num 조회
        let { data, error } = await useSupabase()
          .from("board")
          .select("num")
          .eq("kr", "주술회전")
          .order("num", { ascending: false })
          .limit(1);

        let maxNum;
        if (data && data[0]) {
          maxNum = data[0].num;
        }

        for (const board of boards.data) {
          // 덧글 조회
          const joosool = await axios.get(
            `http://localhost:3000/api/dcinside/joosool/${board.num}?kr=주술회전`
          );
          // 이미지 조회
          console.log("img", joosool.data.images[0]);

          // maxNum < board.num 이면 insert
          if (maxNum < board.num) {
            const { data, error } = await useSupabase()
              .from("board")
              .insert([
                {
                  title: board.title,
                  writer: board.writer,
                  date: board.date,
                  content: joosool.data.content,
                  book: "",
                  subject: board.subject,
                  type: board.type,
                  num: board.num,
                  number: board.reply_num, // 덧글 수
                  link: joosool.data.images[0],
                  count: board.count, // 조회수
                  recommend: board.recommend, // 덧글
                  kr: "주술회전",
                },
              ]);
          } else {
            // maxNum > board.num 이면 update
            const { data, error } = await useSupabase()
              .from("board")
              .update({
                title: board.title,
                writer: board.writer,
                date: board.date,
                content: joosool.data.content,
                book: "",
                subject: board.subject,
                type: board.type,
                num: board.num,
                number: board.reply_num, // 덧글 수
                count: board.count, // 조회수
                recommend: board.recommend, // 덧글
                kr: "주술회전",
              })
              .eq("kr", "주술회전")
              .eq("num", board.num);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })
    .everyMinutes(5);

  // create as many tasks as you want here
}
