<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

const boards = ref<any[]>([]);

const KR_IMG_BOOKS = krImgBooks();

const page = ref(1);
const pageBoards = ref<any>([]);
// computed(() => {
//   return boards.value.slice(0, page.value * 20);
// });

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
    pageBoards.value = [...boards.value.slice(0, 20)];
  }
});

const boardAddState = ref(false);
const scrollContainer = useState("scrollContainer", () => null);

function infiniteHandler($state: any) {
  if (boardAddState.value) return;
  boardAddState.value = true;

  let scrollPosition = 0;

  // 딜레이 후 함수의 주요 로직 실행
  const time = setTimeout(() => {
    try {
      scrollPosition = scrollContainer.value.scrollTop;
      // 여기에 함수의 주요 로직을 작성
      // 예: 데이터를 불러오는 코드
      page.value++;
      const nextpage = [
        ...boards.value.slice((page.value - 1) * 20, page.value * 20),
      ];

      pageBoards.value = [...pageBoards.value, ...nextpage];

      setTimeout(() => {
        $state.loaded();
      });
    } catch (error) {
      // 오류 처리
      console.error(error);
    } finally {
      // 실행 중 플래그를 해제
      clearTimeout(time);
      boardAddState.value = false;

      // 스크롤 위치 복원
      setTimeout(() => {
        nextTick(() => {
          console.log(scrollPosition);
          scrollContainer.value.scrollTo(0, scrollPosition);
        });
      });
    }
  }); // 1000ms (1초) 딜레이
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
    <!-- <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"
    > -->
    <!-- <div
      class="sm:column-count-1 md:column-count-2 lg:md:column-count-3 xl:md:column-count-4"
      style="column-gap: 1em"
    > -->

    <masonry-wall
      :items="pageBoards"
      :ssr-columns="20"
      :column-width="300"
      :gap="16"
    >
      <template #default="{ item: board }" class="sm:w-screen md:w-full mb-4">
        <div class="relative w-full">
          <div
            class="absolute z-10 p-2 text-white"
            style="pointer-events: none"
          >
            <div class="font-bold">
              {{ (board as any).title }}
            </div>
            <div class="text-sm">
              {{ (board as any).writer }}
            </div>
          </div>
          <!-- 이미지 옆으로 넘길수 있도록 처리 -->
          <Carousel>
            <CarouselContent>
              <CarouselItem
                v-for="(img, index) in imgLinkParse((board as any).link)"
                :key="index"
              >
                <div class="relative h-full">
                  <img
                    class="lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down"
                    :src="replaceDomain(img).replace(/co\.kr/g, 'com')"
                  />
                  <Badge class="absolute top-4 right-4 bg-opacity-50 bg-black">
                    {{ index + 1 }} /
                    {{ imgLinkParse((board as any).link).length }}
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
                :src="KR_IMG_BOOKS[(board as any).kr]"
              />
              <div class="flex-col">
                <div class="line-clamp-3 overflow-hidden">
                  {{ (board as any).content }}
                </div>
                <div class="flex text-xs gap-2">
                  <div class="font-normal">
                    {{ timeAgo((board as any).date) }}
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
                  {{ (board as any).number }}
                </div>
              </div>
              <div class="flex flex-col gap-1 items-center">
                <font-awesome-icon :icon="['far', 'eye']" />
                <div class="text-sm">
                  {{ (board as any).count }}
                </div>
              </div>
              <div class="flex flex-col gap-1 items-center">
                <font-awesome-icon :icon="['fas', 'star']" />
                <div class="text-sm">
                  {{ (board as any).recommend }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </masonry-wall>
    <div class="w-full rounded-md p-2 flex items-center justify-center">
      <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
    </div>
    <InfiniteLoading v-if="pageBoards.length > 0" @infinite="infiniteHandler" />
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 1em;
}
</style>
