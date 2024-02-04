import { ref } from 'vue';
import { u as useState } from './state-1iJA_-lt.mjs';
import { u as useSupabase } from './useSupabase-m2hz1Dji.mjs';

const useYouTube = () => useState("useYouTube", () => []);
const usePlayer = () => useState("usePlayer", () => {
});
const useNowYouTube = () => useState("useNowYouTube", () => {
});
const useYoutubePlayerRef = () => useState("useYoutubePlayerRef", () => {
});
const useYoutubeState = () => useState("useYoutubeState", () => -1);
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
function firstYouTube() {
  state.value = 0;
  return useYouTube().value[state.value];
}
async function addYouTube(data) {
  return await useSupabase().value.from("youtube").insert([data]);
}
const nowVideo = ref();
function play() {
  var _a;
  const player = usePlayer();
  const state2 = useYoutubeState();
  try {
    useNowYouTube().value = nowTouTube();
    nowVideo.value = nowTouTube();
    if (player.value) {
      if (state2.value == -1) {
        player.value.loadVideoById(nowVideo.value.video_id);
      }
      player.value.playVideo();
      state2.value = 1;
    } else {
      if (player.value) {
        const youtubePlayerRef = useYoutubePlayerRef();
        player.value = new YT.Player(youtubePlayerRef.value, {
          height: "33",
          width: "59",
          videoId: (_a = nowVideo == null ? void 0 : nowVideo.value) == null ? void 0 : _a.video_id,
          playerVars: {
            playsinline: 1
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.ENDED) {
                next();
              }
            }
          }
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function pause() {
  const player = usePlayer();
  const state2 = useYoutubeState();
  if (player.value) {
    player.value.pauseVideo();
    state2.value = 0;
  }
}
function next() {
  const player = usePlayer();
  const state2 = useYoutubeState();
  nowVideo.value = nextYouTube();
  useNowYouTube().value = nowTouTube();
  if (player.value) {
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state2.value = 1;
  }
}
function firstPlay() {
  const player = usePlayer();
  const state2 = useYoutubeState();
  nowVideo.value = firstYouTube();
  useNowYouTube().value = nowTouTube();
  if (player.value) {
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state2.value = 1;
  }
}
function prev() {
  const player = usePlayer();
  const state2 = useYoutubeState();
  nowVideo.value = prevYouTube();
  useNowYouTube().value = nowTouTube();
  if (player.value) {
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state2.value = 1;
  }
}

export { useYoutubeState as a, usePlayer as b, useNowYouTube as c, play as d, pause as e, next as f, firstPlay as g, addYouTube as h, useYoutubePlayerRef as i, nowTouTube as n, prev as p, useYouTube as u };
//# sourceMappingURL=player-6eR9jqFZ.mjs.map
