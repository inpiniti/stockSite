import { u as useState } from './state-1CyKPjUP.mjs';
import { createClient } from '@supabase/supabase-js';
import { useStorage } from '@vueuse/core';

const useSupabase = () => {
  return useState(
    "supabase",
    () => createClient(
      "https://etnyrefdmddqiuatswhb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
    )
  );
};
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
//# sourceMappingURL=useBooks-Deguqr8N.mjs.map
