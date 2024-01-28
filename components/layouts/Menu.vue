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
  try {
    nowVideo.value = nowTouTube();
    if (player.value) {
      // 비디오를 로드합니다.
      player.value.loadVideoById(nowVideo.value.video_id);
      player.value.playVideo();
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

onMounted(() => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => {
    try {
      player.value = new YT.Player(youtubePlayer.value, {
        height: "360",
        width: "640",
        videoId: nowVideo?.value?.video_id,
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
          <div class="text-sm text-neutral-400" v-if="nowVideo">
            {{ nowVideo?.title }} {{ nowVideo?.kr }} {{ nowVideo?.season }}기
            {{ nowVideo?.cool }}쿨
            {{ nowVideo?.op_ed }}
          </div>
          <Button @click="prev" variant="ghost">
            <font-awesome-icon :icon="['fas', 'backward-step']" />
          </Button>
          <Button @click="play" variant="ghost">
            <font-awesome-icon :icon="['fas', 'play']" />
          </Button>
          <Button @click="next" variant="ghost">
            <font-awesome-icon :icon="['fas', 'forward-step']" />
          </Button>

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
    <div v-show="false">
      <div ref="youtubePlayer"></div>
      <Button @click="play">play</Button>
      <Button @click="next">next</Button>
      <Button @click="prev">prev</Button>
    </div>
  </div>
</template>
