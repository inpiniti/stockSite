import { u as useSupabase } from './useSupabase-g_fbflW8.mjs';
import { n as namuKrBooks } from './useBooks-TTm7ObzJ.mjs';
import { useStorage } from '@vueuse/core';

const useCoverList = () => useStorage("coverList", () => [{}]);
const useCoverListFirst = () => useStorage("coverListFirst", () => [{}]);
async function fetchCoverList() {
  const coverList = useCoverList();
  const coverListFirst = useCoverListFirst();
  try {
    coverList.value = await fetchAllRows();
    coverListFirst.value = coverList.value.filter(
      (cover) => cover.booknum === 1
    );
  } catch (error) {
    console.error(error);
  }
}
async function fetchAllRows() {
  const rowsPerPage = 1e3;
  let rows = [];
  let lastRowId = null;
  while (true) {
    const response = await useSupabase().value.from("cover").select().order("id", { ascending: true }).range(lastRowId ? rowsPerPage + 1 : 0, rowsPerPage * 2);
    rows = rows.concat(response.data);
    lastRowId = response.data[response.data.length - 1].id;
    if (response.data.length !== 1e3) {
      break;
    }
  }
  return rows;
}
async function updateCoverImage(books) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverList();
  return books.map((book) => {
    const matchingCover = coverList.value.find(
      (cover) => cover.kr === book.kr && cover.booknum === book.booknum
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }
    return book;
  });
}
async function updateCoverImageFirst(books) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverListFirst();
  return books.map((book) => {
    const matchingCover = coverList.value.find(
      (cover) => cover.kr === book.kr
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }
    return book;
  });
}
function createCoverImageObject() {
  const NAMUKRBOOKS = namuKrBooks();
  const coverList = useCoverListFirst();
  const coverImageObject = {};
  coverList.value.forEach((cover) => {
    const kr = NAMUKRBOOKS[cover.kr];
    coverImageObject[kr != null ? kr : cover.kr] = cover.cover_image;
  });
  return coverImageObject;
}

export { updateCoverImageFirst as a, useCoverList as b, createCoverImageObject as c, fetchCoverList as f, updateCoverImage as u };
//# sourceMappingURL=useCoverList-TFpT3_Hs.mjs.map
