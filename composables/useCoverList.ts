import { useStorage } from "@vueuse/core";

export interface Cover {
  id: number;
  created_at: string;
  kr: string;
  booknum: number;
  cover_image: string;
}

export const useCoverList = () => useStorage("coverList", () => [<Cover>{}]);
export const useCoverListFirst = () =>
  useStorage("coverListFirst", () => [<Cover>{}]);

export async function fetchCoverList() {
  const coverList = useCoverList();
  const coverListFirst = useCoverListFirst();
  try {
    coverList.value = await fetchAllRows();

    // coverList.value 에서 booknum 이 1인 것만 추출
    coverListFirst.value = coverList.value.filter(
      (cover: Cover) => cover.booknum === 1
    );
  } catch (error) {
    console.error(error);
  }
}

// 1000개 이상 리턴
async function fetchAllRows() {
  const rowsPerPage = 1000;
  let rows: any = [];
  let lastRowId = null;

  while (true) {
    const response: any = await useSupabase()
      .value.from("cover")
      .select()
      .order("id", { ascending: true })
      .range(lastRowId ? rowsPerPage + 1 : 0, rowsPerPage * 2);

    rows = rows.concat(response.data);
    lastRowId = response.data[response.data.length - 1].id;

    if (response.data.length !== 1000) {
      break;
    }
  }

  return rows;
}

// bookList 에 cover 이미지를 추가
export async function updateCoverImage(books: []) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverList();

  return books.map((book: any) => {
    const matchingCover = coverList.value.find(
      (cover: Cover) => cover.kr === book.kr && cover.booknum === book.booknum
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }

    return book;
  });
}

// bookList 에 cover 이미지를 추가
export async function updateCoverImageFirst(books: []) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverListFirst();

  return books.map((book: any) => {
    const matchingCover = coverList.value.find(
      (cover: Cover) => cover.kr === book.kr
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }

    return book;
  });
}

// books 에서 dc를 키로 하는 kr을 리턴

// kr가 키가 되고 cover_image 값이 되는 객체 생성
export function createCoverImageObject() {
  const NAMUKRBOOKS = namuKrBooks();

  const coverList = useCoverListFirst();
  const coverImageObject: any = {};

  coverList.value.forEach((cover: Cover) => {
    const kr = NAMUKRBOOKS[cover.kr];
    coverImageObject[kr ?? cover.kr] = cover.cover_image;
  });

  return coverImageObject;
}
