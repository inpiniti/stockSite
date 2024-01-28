import { u as useState } from './state-1iJA_-lt.mjs';
import { ref } from 'vue';
import { u as useSupabase } from './useSupabase-m2hz1Dji.mjs';

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

export { addYouTube as a, nextYouTube as b, nowTouTube as n, prevYouTube as p, useYouTube as u };
//# sourceMappingURL=useYouTube-60Rd4hID.mjs.map
