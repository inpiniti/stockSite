import { u as useSupabase } from './useSupabase-m2hz1Dji.mjs';
import { useStorage } from '@vueuse/core';

const useBooks = () => useStorage("books", () => []);
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

export { useBooks as a, fetchBooks as f, uniqueBooks as u };
//# sourceMappingURL=useBooks-_FyEDEfB.mjs.map
