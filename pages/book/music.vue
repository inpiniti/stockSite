<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const musicList = useMusic();
const youTubeList = useYouTube();
const youTube = computed(() => nowTouTube());
const playerState = useYoutubeState();

// 113만, 1.1억, 2.3천
function convertViewCount(viewCount: string) {
  if (viewCount.includes("억")) {
    return parseFloat(viewCount.replace("억", "")) * 100000000;
  } else if (viewCount.includes("만")) {
    return parseFloat(viewCount.replace("만", "")) * 10000;
  } else if (viewCount.includes("천")) {
    return parseFloat(viewCount.replace("천", "")) * 1000;
  } else {
    return parseFloat(viewCount);
  }
}

const musicListSorted = computed(() => {
  return musicList.value.sort((a: any, b: any) => {
    const viewCountA = convertViewCount(a.view_count);
    const viewCountB = convertViewCount(b.view_count);

    return viewCountB - viewCountA; // 내림차순 정렬
  });
});

function videoAdd(video: any) {
  useYouTube().value.unshift(video);
  firstPlay();
  toast({
    title: "재생목록 추가",
    description: `${video.title} 재생목록을 추가했습니다.`,
  });
}

const player = usePlayer();
const nowVideo = ref();

const thumbnailUrl = computed(() => {
  if (useNowYouTube().value == null) return;
  return `https://img.youtube.com/vi/${
    useNowYouTube().value.video_id
  }/default.jpg`;
});

const interval = ref();

const videoDuration = ref(0);
const currentTime = ref([0]);
const state = computed(() => {
  return (currentTime.value[0] / videoDuration.value) * 100;
});
// videoDuration 을 00:00 형식으로 변환합니다.
const videoDurationFormatted = computed(() => {
  const minutes = Math.floor(videoDuration.value / 60);
  const seconds = Math.floor(videoDuration.value - minutes * 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
});
// currentTime 을 00:00 형식으로 변환합니다.
const currentTimeFormatted = computed(() => {
  const minutes = Math.floor(currentTime.value[0] / 60);
  const seconds = Math.floor(currentTime.value[0] - minutes * 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
});

onMounted(() => {
  // 1초마다 현재 시간을 가져옵니다.
  interval.value = setInterval(() => {
    if (player.value == null) return;
    currentTime.value = [player.value.getCurrentTime()];
    videoDuration.value = player.value.getDuration();
  }, 1000);
});

onUnmounted(() => {
  // unmouted 시점에 setInterval을 제거합니다.
  clearInterval(interval.value);
});
</script>
<template>
  <div class="flex h-full overflow-hidden p-4 gap-4">
    <div class="flex flex-col grow-[1]">
      <Card class="h-full overflow-hidden flex flex-col">
        <CardHeader class="shrink-0">
          <CardTitle>음악 차트</CardTitle>
          <CardDescription>일별, 월별, 누적 차트를 제공합니다.</CardDescription>
        </CardHeader>
        <Card class="grow-[1] overflow-y-scroll rounded-lg border mx-6 mb-6">
          <div v-for="music in musicListSorted">
            <div
              class="flex gap-2 p-2"
              :class="{ 'bg-red-50': youTube?.video_id == music.video_id }"
            >
              <div class="w-96 flex gap-2">
                <Badge variant="outline">
                  {{ music.kr }} {{ music.op_ed }} {{ music.season }}기
                  {{ music.cool }}쿨
                </Badge>
                <div class="font-semibold text-sm">
                  {{ music.title }}
                </div>
              </div>

              <div class="w-20">
                <Badge variant="outline">
                  {{ music.view_count }}
                </Badge>
              </div>
              <div class="w-28">
                <Badge
                  variant="outline"
                  class="cursor-pointer"
                  @click="videoAdd(music)"
                >
                  재생목록 추가
                </Badge>
              </div>
            </div>
            <Separator />
          </div>
        </Card>
      </Card>
    </div>

    <div class="w-96 shrink-0 h-full">
      <Card class="h-full flex flex-col">
        <CardHeader class="shrink-0">
          <CardTitle>인피니티 플레이어</CardTitle>
          <CardDescription>현재 재생중인 음악을 표시합니다.</CardDescription>
        </CardHeader>
        <CardContent class="shrink-0">
          <div>
            <img
              :src="`https://img.youtube.com/vi/${
                useNowYouTube().value?.video_id
              }/maxresdefault.jpg`"
            />
            <div class="text-center">
              {{ useNowYouTube().value?.title }}
            </div>
            <div class="text-center text-sm text-neutral-400">
              {{ useNowYouTube().value?.kr }}
              {{ useNowYouTube().value?.season }}기
              {{ useNowYouTube().value?.cool }}쿨
              {{ useNowYouTube().value?.op_ed }}
            </div>
            <div class="w-full h-2 bg-neutral-100 rounded-md">
              <div
                class="h-2 bg-red-100 rounded-md"
                :style="{ width: `${state}%` }"
              ></div>
            </div>
            <div class="text-xs flex gap-2">
              <div>
                {{ currentTimeFormatted }}
              </div>
              <div class="text-neutral-400">{{ videoDurationFormatted }}</div>
            </div>
          </div>
          <div class="flex gap-4 justify-center text-2xl">
            <div @click="prev" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'backward-step']" />
            </div>
            <div
              @click="play"
              v-if="playerState != 1"
              class="cursor-pointer p-2"
            >
              <font-awesome-icon :icon="['fas', 'play']" />
            </div>
            <div
              @click="pause"
              v-if="playerState == 1"
              class="cursor-pointer p-2"
            >
              <font-awesome-icon :icon="['fas', 'stop']" />
            </div>
            <div @click="next" class="cursor-pointer p-2">
              <font-awesome-icon :icon="['fas', 'forward-step']" />
            </div>
          </div>
        </CardContent>
        <Card class="mx-6 mb-6 grow-[1] overflow-y-scroll">
          <div v-for="music in youTubeList">
            <div
              class="flex gap-2 p-2"
              :class="{ 'bg-red-50': youTube?.video_id == music.video_id }"
            >
              <div class="flex gap-2">
                <Badge variant="outline">
                  {{ music.kr }} {{ music.op_ed }} {{ music.season }}기
                  {{ music.cool }}쿨
                </Badge>
                <div class="font-semibold text-sm">
                  {{ music.title }}
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </Card>
      </Card>
    </div>
  </div>
</template>
