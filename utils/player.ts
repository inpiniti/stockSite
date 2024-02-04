declare var YT: any;

const nowVideo = ref();

export function play() {
  const player = usePlayer();
  const state = useYoutubeState();

  try {
    useNowYouTube().value = nowTouTube();
    nowVideo.value = nowTouTube();
    if (player.value) {
      // 비디오를 로드합니다.
      if (state.value == -1) {
        player.value.loadVideoById(nowVideo.value.video_id);
      }
      //player.value.loadVideoById(nowVideo.value.video_id);
      player.value.playVideo();
      state.value = 1;
    } else {
      if (player.value) {
        const youtubePlayerRef = useYoutubePlayerRef();
        player.value = new YT.Player(youtubePlayerRef.value, {
          height: "33",
          width: "59",
          videoId: nowVideo?.value?.video_id,
          playerVars: {
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (event.data === YT.PlayerState.ENDED) {
                // 비디오 재생이 끝났을 때 다음 곡을 재생합니다.
                next();
              }
            },
          },
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export function pause() {
  const player = usePlayer();
  const state = useYoutubeState();

  if (player.value) {
    player.value.pauseVideo();
    state.value = 0;
  }
}

export function next() {
  const player = usePlayer();
  const state = useYoutubeState();

  nowVideo.value = nextYouTube();
  useNowYouTube().value = nowTouTube();
  if (player.value) {
    // 비디오를 로드합니다.
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state.value = 1;
  }
}

export function firstPlay() {
  const player = usePlayer();
  const state = useYoutubeState();
  nowVideo.value = firstYouTube();

  useNowYouTube().value = nowTouTube();
  if (player.value) {
    // 비디오를 로드합니다.
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state.value = 1;
  }
}

export function prev() {
  const player = usePlayer();
  const state = useYoutubeState();

  nowVideo.value = prevYouTube();
  useNowYouTube().value = nowTouTube();
  if (player.value) {
    // 비디오를 로드합니다.
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
    state.value = 1;
  }
}
