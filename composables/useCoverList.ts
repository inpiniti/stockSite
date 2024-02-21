import { useStorage } from "@vueuse/core";

export interface Cover {
  id: number;
  created_at: string;
  kr: string;
  booknum: number;
  cover_image: string;
}

export const useCoverList = () => useStorage("coverList", () => [<Cover>{}]);

export async function fetchCoverList() {
  const coverList = useCoverList();
  try {
    coverList.value =
      (await useSupabase().value.from("cover").select()).data ?? [];
  } catch (error) {
    console.error(error);
  }
}
