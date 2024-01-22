import { useStorage } from "@vueuse/core";

export const useBooks = () =>
  useStorage(
    "books",
    () =>
      <any>{
        all: [],
        date: [],
      }
  );

export async function fetchBooks() {
  const books = useBooks();
  const newBooks = await useSupabase()
    .value.from("book")
    .select()
    .order("sales", { ascending: false });
  books.value.all = newBooks.data;
}

export function findBook(kr: string) {
  return useBooks().value.all.find((book: any) => book.kr === kr);
}
