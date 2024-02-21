import { useStorage } from "@vueuse/core";

interface Book {
  id: number;
  jp: string;
  kr: string;
  sales: number;
  rank: string;
  booknum: number;
  date: string;
  name: string;
  img: string;
  namu: string;
  genre: string;
  dc: string;
}

export const useBooks = () => useStorage("books", () => [<Book>{}]);

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
  return useBooks().value.find((book: Book) => book.kr === kr);
}

// books 에서 kr 로 중복 제거
export function uniqueBooks() {
  return useBooks().value.filter(
    (book: Book, index: number, self: any) =>
      index === self.findIndex((b: any) => b.kr === book.kr)
  );
}

// kr가 키가 되고 img가 값이 되는 객체 생성
export function krImgBooks() {
  const books = useBooks().value;
  const krImg = books.reduce((acc: any, book: Book) => {
    acc[book.kr] = book.img;
    return acc;
  }, {});
  return krImg;
}
