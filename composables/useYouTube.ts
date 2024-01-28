export const useYouTube = () => useState<any>("useYouTube", () => []);

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
