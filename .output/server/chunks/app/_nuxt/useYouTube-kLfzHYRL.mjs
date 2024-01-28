import { u as useState } from './state-1iJA_-lt.mjs';
import { ref } from 'vue';
import { u as useSupabase } from './useSupabase-m2hz1Dji.mjs';
import { u as useFetch } from './fetch-68oqhdU9.mjs';

const useYouTube = () => useState("useYouTube", () => []);
const state = ref(0);
function nowTouTube() {
  return useYouTube().value[state.value % useYouTube().value.length];
}
function nextYouTube() {
  state.value++;
  return useYouTube().value[state.value % useYouTube().value.length];
}
function prevYouTube() {
  state.value--;
  return useYouTube().value[state.value % useYouTube().value.length];
}
async function addYouTube(data) {
  return await useSupabase().value.from("youtube").insert([data]);
}
async function searchVideos(searchQuery) {
  const apiKey = "AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE";
  const { data } = await useFetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchQuery}&key=${apiKey}&order=viewCount`,
    "$B0jU4alcvi"
  );
  return data;
}

export { addYouTube as a, nextYouTube as b, nowTouTube as n, prevYouTube as p, searchVideos as s, useYouTube as u };
//# sourceMappingURL=useYouTube-kLfzHYRL.mjs.map
