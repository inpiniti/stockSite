<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const musicList = useMusic();
const youTube = computed(() => nowTouTube());

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
  toast({
    title: "재생목록 추가",
    description: `${video.title} 재생목록을 추가했습니다.`,
  });
}
</script>
<template>
  <div class="flex flex-col">
    <div v-for="music in musicListSorted">
      <div
        class="flex gap-2 p-2"
        :class="{ 'bg-red-50': youTube?.video_id == music.video_id }"
      >
        <div class="w-32 text-sm">
          {{ music.video_id }}
        </div>
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
  </div>
</template>
