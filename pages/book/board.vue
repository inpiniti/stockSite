<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

const boards = ref<any[]>([]);

const KR_IMG_BOOKS = krImgBooks();

const page = ref(1);
const pageBoards = computed(() => {
  return boards.value.slice(0, page.value * 20);
});

onMounted(async () => {
  const { data, error } = await useSupabase()
    .value.from("board")
    .select()
    .neq("link", null)
    .order("date", { ascending: false });
  if (error) {
    console.error(error);
  } else {
    boards.value = data ?? [];
  }
});
function infiniteHandler($state: any) {
  page.value++;
  $state.loaded();
}
// 이미지가 배열 스트링으로 되어 있을 텐데 처리
function imgLinkParse(link: string) {
  // link 문자열에 []가 없으면 []로 감싸주고
  if (link.includes("[")) {
    return JSON.parse(link);
  } else {
    let arr: string[] = [];
    arr.push(link);
    return arr;
  }
}

const boardDetail = ref(false);
const reply = ref();

async function onClickBoardDetail(board: any) {
  const { dc } = findBook(board.kr);

  // 덧글 조회
  const { data: newData } = await useFetch(
    `/api/dcinside/${dc}/${board.num}?kr=${board.kr}`
  );

  reply.value = newData.value;
  if (reply.value?.comment?.comments) {
    reply.value.comment.comments = reply.value?.comment?.comments.filter(
      (comment: any) => {
        return comment.no != 0;
      }
    );
  }

  boardDetail.value = !boardDetail.value;
}
</script>
<template>
  <SheetBoardDetail
    :open="boardDetail"
    :reply="reply"
    @update:open="boardDetail = !boardDetail"
  />
  <div>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"
    >
      <div v-for="board in pageBoards" :key="board.id" class="w-screen">
        <div class="relative w-full">
          <div
            class="absolute z-10 p-2 text-white"
            style="pointer-events: none"
          >
            <div class="font-bold">
              {{ board.title }}
            </div>
            <div class="text-sm">
              {{ board.writer }}
            </div>
          </div>
          <!-- 이미지 옆으로 넘길수 있도록 처리 -->
          <Carousel>
            <CarouselContent>
              <CarouselItem
                v-for="(img, index) in imgLinkParse(board.link)"
                :key="index"
              >
                <div class="relative h-full">
                  <img
                    class="lg:rounded-md md:h-72 min-h-96 max-h-256 h-full w-full object-scale-down"
                    :src="replaceDomain(img).replace(/co\.kr/g, 'com')"
                  />
                  <Badge class="absolute top-4 right-4 bg-opacity-50 bg-black">
                    {{ index + 1 }} / {{ imgLinkParse(board.link).length }}
                  </Badge>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div
            class="absolute top-0 left-0 w-full h-full lg:rounded-md"
            style="
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.5)
              );
              pointer-events: none;
            "
          ></div>

          <div
            class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end"
            style="pointer-events: none"
          >
            <div class="flex gap-4 items-end">
              <img
                class="h-16 rounded-md object-cover"
                :src="KR_IMG_BOOKS[board.kr]"
              />
              <div class="flex-col">
                <div class="line-clamp-3 overflow-hidden">
                  {{ board.content }}
                </div>
                <div class="flex text-xs gap-2">
                  <div class="font-normal">
                    {{ timeAgo(board.date) }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 text-xl items-center">
              <div
                class="flex flex-col gap-1 items-center"
                style="pointer-events: auto"
                @click="onClickBoardDetail(board)"
              >
                <font-awesome-icon :icon="['far', 'comment']" />
                <div class="text-sm">
                  {{ board.number }}
                </div>
              </div>
              <div class="flex flex-col gap-1 items-center">
                <font-awesome-icon :icon="['far', 'eye']" />
                <div class="text-sm">
                  {{ board.count }}
                </div>
              </div>
              <div class="flex flex-col gap-1 items-center">
                <font-awesome-icon :icon="['fas', 'star']" />
                <div class="text-sm">
                  {{ board.recommend }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InfiniteLoading v-if="pageBoards.length > 0" @infinite="infiniteHandler" />
  </div>
</template>
