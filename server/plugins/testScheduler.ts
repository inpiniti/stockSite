import { useScheduler } from "#scheduler";
import axios from "axios";

export default defineNitroPlugin(() => {
  if (process.env.NODE_ENV === "production") {
    startScheduler();
  }
});

function startScheduler() {
  const scheduler = useScheduler();

  scheduler
    .run(async () => {
      console.log(`유튜브 조회수 스케쥴러`);
      await axios.get(`http://localhost:3000/api/youtube/dbInsert`);
    })
    // 12시 5분에 실행하도록
    .cron("5 0 * * *");

  scheduler
    .run(async () => {
      // book 에서 kr 과 dc 만 조회해 오는데 중복은 제거 함
      const books = await uniqueBooks();

      for (const book of books) {
        await getBoard(book.kr, book.dc);
      }
    })
    .everyTenMinutes();

  //.everySeconds(10);
  // 오후 9시 6분에 실행하려면
  //.cron("47 22 * * *");

  // create as many tasks as you want here
}

// 게시글 조회
async function getBoard(kr: string, dc: string) {
  // 게시글 조회
  try {
    const boards = await axios.get(`http://localhost:3000/api/dcinside/${dc}`);
    console.log(`${kr} 게시글 조회 완료`);

    // 가장 높은 num 조회
    let { data, error } = await useSupabase().from("board").select("num").eq("kr", kr).order("num", { ascending: false }).limit(1);

    let maxNum;

    if (data && data[0]) {
      maxNum = data[0].num;
    }

    if (maxNum === undefined) {
      maxNum = 0;
    }

    console.log(`${kr} 게시글 조회 ${maxNum} 번  완료`);

    //console.log("boards", boards);

    for (const board of boards.data) {
      // 덧글 조회
      if (maxNum < board.num) {
        await getReply(kr, dc, board, maxNum);
        // 1초 대기
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        // 덧글 업데이트
        await updateBoard(kr, board);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// 덧글 조회
async function getReply(kr: string, dc: string, board: any, maxNum: number) {
  // 덧글 조회
  const reply = await axios.get(`http://localhost:3000/api/dcinside/${dc}/${board.num}?kr=${kr}`);

  if (reply.data.images[0] == null || reply.data.images[0] == undefined) return;
  // 이미지 조회
  console.log(`${kr} 게시글의 ${board.num} 덧글 조회 완료`);

  if (maxNum < board.num) {
    // maxNum < board.num 이면 insert
    await insertBoard(kr, board, reply);
  } else {
    // maxNum > board.num 이면 update
    //await updateBoard(kr, board, reply);
  }
}

// board insert
async function insertBoard(kr: string, board: any, reply: any) {
  const { data, error } = await useSupabase()
    .from("board")
    .insert([
      {
        title: board.title,
        writer: board.writer,
        date: board.date,
        content: reply.data.content,
        book: "",
        subject: board.subject,
        type: board.type,
        num: board.num,
        number: board.reply_num, // 덧글 수
        link: JSON.stringify(reply.data.images),
        count: board.count, // 조회수
        recommend: board.recommend, // 덧글
        kr: kr,
      },
    ]);
  console.log(`${kr} 게시글의 ${board.num} 덧글 insert 완료`);
}

// board update
async function updateBoard(kr: string, board: any) {
  // maxNum > board.num 이면 update
  const { data, error } = await useSupabase()
    .from("board")
    .update({
      title: board.title,
      writer: board.writer,
      date: board.date,
      //content: reply.data.content,
      book: "",
      subject: board.subject,
      type: board.type,
      num: board.num,
      number: board.reply_num, // 덧글 수
      count: board.count, // 조회수
      recommend: board.recommend, // 덧글
      kr: kr,
    })
    .eq("kr", kr)
    .eq("num", board.num);
  console.log(`${kr} 게시글의 ${board.num} 덧글 update 완료`);
}
