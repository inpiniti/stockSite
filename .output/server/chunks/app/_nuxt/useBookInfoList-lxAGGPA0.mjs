import { u as useSupabase } from './useSupabase-g_fbflW8.mjs';
import { useStorage } from '@vueuse/core';

const useBookInfoList = () => useStorage("useBookInfoList", () => [{}]);
async function fetchBookInfoList() {
  var _a;
  try {
    useBookInfoList().value = (_a = (await useSupabase().value.from("book_info").select()).data) != null ? _a : [];
  } catch (error) {
    console.error(error);
  }
}

export { fetchBookInfoList as f, useBookInfoList as u };
//# sourceMappingURL=useBookInfoList-lxAGGPA0.mjs.map
