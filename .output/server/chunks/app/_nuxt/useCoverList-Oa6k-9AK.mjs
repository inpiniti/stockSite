import { n as namuKrBooks } from './useBooks-whKMjU-y.mjs';
import { useStorage } from '@vueuse/core';

const useCoverList = () => useStorage("coverList", () => [{}]);
const useCoverListFirst = () => useStorage("coverListFirst", () => [{}]);
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

export { updateCoverImageFirst as a, useCoverList as b, createCoverImageObject as c, updateCoverImage as u };
//# sourceMappingURL=useCoverList-Oa6k-9AK.mjs.map
