import { u as useSupabase } from './useSupabase-4R9Br0h-.mjs';
import { useStorage } from '@vueuse/core';

const useBooks = () => useStorage("books", () => [{}]);
async function fetchBooks(date) {
  var _a, _b;
  const books = useBooks();
  try {
    if (date) {
      books.value = (_a = (await useSupabase().value.from("book").select().eq("date", date).order("sales", { ascending: false })).data) != null ? _a : [];
    } else {
      books.value = (_b = (await useSupabase().value.from("book").select().order("sales", { ascending: false })).data) != null ? _b : [];
    }
  } catch (error) {
    console.error(error);
  }
}
function uniqueBooks() {
  return useBooks().value.filter(
    (book, index, self) => index === self.findIndex((b) => b.kr === book.kr)
  );
}
function krImgBooks() {
  const books = useBooks().value;
  const krImg = books.reduce((acc, book) => {
    acc[book.kr] = book.img;
    return acc;
  }, {});
  return krImg;
}
function namuKrBooks() {
  const books = useBooks().value;
  const namuKr = books.reduce((acc, book) => {
    const decodedValue = decodeURIComponent(book.namu);
    acc[decodedValue] = book.kr;
    return acc;
  }, {});
  return namuKr;
}

export { useBooks as a, fetchBooks as f, krImgBooks as k, namuKrBooks as n, uniqueBooks as u };
//# sourceMappingURL=useBooks-whKMjU-y.mjs.map
