import { u as useSupabase } from './useSupabase-vnVKN2Il.mjs';
import { useStorage } from '@vueuse/core';

const useBooks = () => useStorage("books", () => [{}]);
const useSelectedBook = () => useStorage("selectedBook", () => ({}));
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

export { uniqueBooks as a, useBooks as b, fetchBooks as f, krImgBooks as k, namuKrBooks as n, useSelectedBook as u };
//# sourceMappingURL=useBooks-AfFfZ3pm.mjs.map
