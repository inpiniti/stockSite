<script setup>
const { darkmode, toggleDarkmode } = useDarkmode();
const emailRef = ref();
function email() {
  emailRef.value.onOpen();
}
function github() {
  window.open("https://github.com/inpiniti");
}
function blog() {
  window.open("https://velog.io/@inpiniti/posts");
}
const youTube = useYouTube();

const nowVideo = ref();

function play() {
  youtubeShow.value = true;
  try {
    nowVideo.value = nowTouTube();
    if (player.value) {
      // 비디오를 로드합니다.
      player.value.loadVideoById(nowVideo.value.video_id);
      player.value.playVideo();
      youtubeShow.value = false;
    } else {
      if (!this.player) {
        this.player = new YT.Player(this.$refs.youtubePlayer, {
          height: "33",
          width: "59",
          videoId: this.nowVideo?.value?.video_id,
          playerVars: {
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
            onStateChange: (event) => {
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

function next() {
  nowVideo.value = nextYouTube();
  if (player.value) {
    // 비디오를 로드합니다.
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
  }
}

function prev() {
  nowVideo.value = prevYouTube();
  if (player.value) {
    // 비디오를 로드합니다.
    player.value.loadVideoById(nowVideo.value.video_id);
    player.value.playVideo();
  }
}

const youtubeOpen = ref(false);
const youtubePlayer = ref(null);
const player = ref(null);

// 유튜브 영상을 안보이게 하기
const youtubeShow = ref(false);

onMounted(() => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => {
    try {
      player.value = new YT.Player(youtubePlayer.value, {
        height: "33",
        width: "59",
        videoId: nowVideo?.value?.video_id,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              // 비디오 재생이 끝났을 때 다음 곡을 재생합니다.
              next();
            }
          },
        },
      });
      console.log("player", player.value);
    } catch (e) {
      console.log(e);
    }
  };
});
</script>

<template>
  <div>
    <DialogEmail ref="emailRef" />
    <Menubar>
      <div class="flex flex-row justify-between w-full">
        <div class="flex">
          <MenubarMenu
            ><MenubarTrigger class="font-bold"
              >inpiniti/app</MenubarTrigger
            ></MenubarMenu
          >
          <MenubarMenu>
            <MenubarTrigger>만든사람</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy" @click="email">
                  이메일
                </MenubarRadioItem>
                <MenubarRadioItem value="benoit" @click="github">
                  github
                </MenubarRadioItem>
                <MenubarRadioItem value="Luis" @click="blog">
                  blog
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset> Edit... </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset> Add Profile... </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <div class="flex items-center justify-center pr-4">
          <div class="flex gap-2 items-center">
            <div ref="youtubePlayer"></div>
            <div class="text-sm text-neutral-400 w-12 marquee" v-if="nowVideo">
              {{ nowVideo?.title }} {{ nowVideo?.kr }} {{ nowVideo?.season }}기
              {{ nowVideo?.cool }}쿨
              {{ nowVideo?.op_ed }}
            </div>
            <div @click="prev">
              <font-awesome-icon :icon="['fas', 'backward-step']" />
            </div>
            <div @click="play">
              <font-awesome-icon :icon="['fas', 'play']" />
            </div>
            <div @click="next">
              <font-awesome-icon :icon="['fas', 'forward-step']" />
            </div>
          </div>

          <MenubarMenu>
            <div class="flex items-center space-x-2">
              <Button class="w-10" variant="ghost" @click="toggleDarkmode">
                <!-- Could not find one or more icon(s) { prefix: 'far', iconName: 'sun' } {} -->
                <font-awesome-icon v-if="darkmode" :icon="['fas', 'moon']" />
                <font-awesome-icon v-else :icon="['far', 'sun']" />
              </Button>
            </div>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
    <div v-show="true"></div>
  </div>
</template>
<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    text-indent: 100%;
  }
  100% {
    text-indent: -100%;
  }
}
</style>
