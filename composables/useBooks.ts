import { useStorage } from "@vueuse/core";

export const useBooks = () => useStorage("books", () => <any>[]);

export async function fetchBooks(date?: string) {
  const books = useBooks();
  try {
    if (date) {
      books.value =
        (
          await useSupabase()
            .value.from("book")
            .select()
            .eq("date", date)
            .order("sales", { ascending: false })
        ).data ?? [];
    } else {
      books.value =
        (
          await useSupabase()
            .value.from("book")
            .select()
            .order("sales", { ascending: false })
        ).data ?? [];
    }
  } catch (error) {
    console.error(error);
  }
}

export function findBook(kr: string) {
  return useBooks().value.find((book: any) => book.kr === kr);
}

// books 에서 kr 로 중복 제거
export function uniqueBooks() {
  return useBooks().value.filter(
    (book: any, index: number, self: any) =>
      index === self.findIndex((b: any) => b.kr === book.kr)
  );
}
