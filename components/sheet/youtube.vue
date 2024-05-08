<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";

const youTube = useYouTube();
const youtubeList = ref();

const { toast } = useToast();

const props = defineProps<{
  isOpen: boolean;
  kr: string;
}>();

const emit = defineEmits(["update:open"]);

const popoverOpen = ref(false);

const popoverData = ref({
  title: "",
  video_id: "",
  op_ed: "",
  season: "",
  cool: "",
});

// 유튜브 리스트에 유튜브 추가
async function add() {
  popoverOpen.value = false;
  await addYouTube({ ...popoverData.value, kr: props.kr });
  toast({
    title: "addYouTube",
    description: "유튜브를 추가했습니다.",
  });
  refresh();
}

// 재생목록에 음악 추가
function videoAdd(video: any) {
  useYouTube().value.unshift(video);
  firstPlay();
  toast({
    title: "재생목록 추가",
    description: `${video.title} 재생목록을 추가했습니다.`,
  });
}

onUpdated(async () => {
  if (props.isOpen) {
    // 유튜브 리스트 가져오기
    refresh();
  }
});

// 유튜브 리스트 새로 고침
async function refresh() {
  const data = await getMusicByKr(props.kr);
  youtubeList.value = data;
}
</script>
<template>
  <Sheet :open="isOpen" @update:open="emit('update:open')">
    <SheetContent class="overflow-y-scroll">
      <SheetHeader>
        <SheetTitle>{{ kr }}</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <Popover :open="popoverOpen">
        <PopoverTrigger as-child class="mt-2 w-full">
          <Button variant="outline" @click="popoverOpen = true">
            유튜브 영상 목록에 추가
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">title</Label>
                <Input
                  v-model="popoverData.title"
                  id="width"
                  type="text"
                  class="col-span-2 h-8"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">videoId</Label>
                <Input
                  v-model="popoverData.video_id"
                  id="width"
                  type="text"
                  class="col-span-2 h-8"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="maxWidth">op/ed</Label>
                <Select v-model="popoverData.op_ed">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>op/ed</SelectLabel>
                      <SelectItem value="op"> op </SelectItem>
                      <SelectItem value="ed"> ed </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">시즌</Label>
                <Select v-model="popoverData.season">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>시즌</SelectLabel>
                      <SelectItem value="1">1기</SelectItem>
                      <SelectItem value="2">2기</SelectItem>
                      <SelectItem value="3">3기</SelectItem>
                      <SelectItem value="4">4기</SelectItem>
                      <SelectItem value="movie">극장판</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">쿨</Label>
                <Select v-model="popoverData.cool">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>쿨</SelectLabel>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div class="flex gap-2">
              <Button variant="outline" @click="add"> add </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div class="flex flex-col gap-2 mt-2">
        <div v-for="video in youtubeList" :key="video.id.videoId">
          <div class="flex gap-2">
            <iframe
              class="w-36 h-20 rounded-md"
              id="player"
              type="text/html"
              :src="`http://www.youtube.com/embed/${video.video_id}?enablejsapi=1`"
              frameborder="0"
            ></iframe>
            <div class="flex flex-col grow-[0]">
              <div class="text-sm font-bold text-clamp">
                {{ video.title }}
              </div>
              <div class="text-xs">
                {{ video.season }}기 {{ video.cool }}쿨
                {{ video.op_ed }}
              </div>
              <div class="text-xs">
                {{ video.view_count }}
              </div>
              <div
                class="text-xs mt-1 px-2 py-1 rounded-md ring-1 ring-neutral-200 w-fit cursor-pointer"
                @click="videoAdd(video)"
              >
                재생목록에 추가
              </div>
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
