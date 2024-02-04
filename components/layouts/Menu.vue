<script setup>
const auth = useAuth();
const player = usePlayer();
const refYoutubePlayer = useYoutubePlayerRef();
const nowVideo = useNowYouTube();
const state = useYoutubeState();

function email() {
  emailRef.value.onOpen();
}
function github() {
  window.open("https://github.com/inpiniti");
}
function blog() {
  window.open("https://velog.io/@inpiniti/posts");
}

const emailRef = ref();
const youtubePlayerRef = ref();

const sheetSideMenuOpen = ref(false);
const dialogLoginOpen = ref(false);
const dialogUserOpen = ref(false);
const dialogYoutubeListOpen = ref(false);

onMounted(async () => {
  try {
    auth.value = (await useSupabase().value.auth.getUser()).data.user;
  } catch (e) {
    auth.value = false;
  }

  refYoutubePlayer.value = youtubePlayerRef.value;
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => {
    try {
      player.value = new YT.Player(youtubePlayerRef.value, {
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
    <SheetSide
      :open="sheetSideMenuOpen"
      @update:open="sheetSideMenuOpen = false"
    />
    <DialogLogin
      :open="dialogLoginOpen"
      @update:open="dialogLoginOpen = false"
    />
    <DialogUser :open="dialogUserOpen" @update:open="dialogUserOpen = false" />
    <DialogYoutubeList
      :open="dialogYoutubeListOpen"
      @update:open="dialogYoutubeListOpen = !dialogYoutubeListOpen"
    />
    <DialogEmail ref="emailRef" />
    <Menubar>
      <div class="flex flex-row justify-between w-full">
        <div class="flex">
          <!-- sm: phone, md: phone, lg: ipad, xl: pc -->
          <MenubarMenu>
            <MenubarTrigger
              class="xl:hidden block"
              @click="sheetSideMenuOpen = true"
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger class="font-bold">inpiniti</MenubarTrigger>
          </MenubarMenu>
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
          <div class="youtube-player">
            <div ref="youtubePlayerRef"></div>
          </div>
          <div class="flex items-center">
            <Badge
              variant="outline"
              class="w-20 marquee cursor-pointer"
              v-if="nowVideo"
              @click="dialogYoutubeListOpen = true"
            >
              {{ nowVideo?.title }} {{ nowVideo?.kr }} {{ nowVideo?.season }}기
              {{ nowVideo?.cool }}쿨
              {{ nowVideo?.op_ed }}
            </Badge>
            <div @click="prev" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'backward-step']" />
            </div>
            <div @click="play" v-if="state != 1" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'play']" />
            </div>
            <div @click="pause" v-if="state == 1" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'stop']" />
            </div>
            <div @click="next" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'forward-step']" />
            </div>
          </div>

          <Avatar
            v-if="auth"
            class="w-7 h-7 cursor-pointer"
            @click="dialogUserOpen = true"
          >
            <AvatarImage :src="auth?.user_metadata?.avatar_url" />
          </Avatar>
          <Button v-else variant="ghost" @click="dialogLoginOpen = true">
            로그인
          </Button>
          <Button v-else variant="ghost" @click="dialogLoginOpen = true">
            안녕하세요.
          </Button>
          <!-- <Button @click="logininfo">로그인 정보</Button> -->
        </div>
      </div>
    </Menubar>
  </div>
</template>
<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  animation: marquee 5s linear infinite;
}
.youtube-player {
  position: absolute;
  top: -999px;
}

@keyframes marquee {
  0% {
    text-indent: 100%;
  }
  100% {
    text-indent: -250%;
  }
}
</style>
