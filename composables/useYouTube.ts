export const useYouTube = () => useState<[]>("useYouTube", () => []);

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
