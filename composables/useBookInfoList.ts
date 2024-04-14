import { useStorage } from "@vueuse/core";

interface BookInfo {
  id: number;
  created_at: string;
  kr: string;
  author: string;
  publisher: string;
  description: string;
  summary: string;
}

export const useBookInfoList = () =>
  useStorage("useBookInfoList", () => [<BookInfo>{}]);

export async function fetchBookInfoList() {
  try {
    useBookInfoList().value =
      (await useSupabase().value.from("book_info").select()).data ?? [];
  } catch (error) {
    console.error(error);
  }
}
