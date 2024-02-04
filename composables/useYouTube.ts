// 재생 목록
export const useYouTube = () => useState<any>("useYouTube", () => []);
export const usePlayer = () => useState<any>("usePlayer", () => {});
export const useNowYouTube = () => useState<any>("useNowYouTube", () => {});
export const useYoutubePlayerRef = () =>
  useState<any>("useYoutubePlayerRef", () => {});

// 재생상태 (0: 정지, 1: 재생)
export const useYoutubeState = () => useState<any>("useYoutubeState", () => -1);

const state = ref(0);

export function nowTouTube() {
  return useYouTube().value[state.value % useYouTube().value.length];
}

export function nextYouTube() {
  state.value++;
  return useYouTube().value[state.value % useYouTube().value.length];
}

export function prevYouTube() {
  state.value--;
  return useYouTube().value[state.value % useYouTube().value.length];
}

export function firstYouTube() {
  state.value = 0;
  return useYouTube().value[state.value];
}

export async function addYouTube(data: any) {
  return await useSupabase().value.from("youtube").insert([data]);
}

export async function searchVideos(searchQuery: string) {
  const apiKey = "AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE";
  const { data } = await useFetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchQuery}&key=${apiKey}&order=viewCount`
  );
  return data;
}
