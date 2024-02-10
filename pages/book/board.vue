<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

import imagesLoaded from "imagesloaded";

const boards = ref<any[]>([]);
const boards_kr = ref<any[]>([]);
const selectedOrderBy = ref("date");

function updateSelectedOrderBy() {
  searchBooks(selectedBook.value);
}

let grid: any = null;

const KR_IMG_BOOKS = krImgBooks();
const books = uniqueBooks();
const selectedBook = ref();

function changeSelectedBook() {
  page.value = 10;
  console.log("changeSelectedBook");
  searchBooks(selectedBook.value);
}

const PAGE = 2;

const page = ref(10);
const pageBoards = ref<any>([]);
// computed(() => {
//   return boards.value.slice(0, page.value * 20);
// });

onMounted(async () => {
  searchBooks();
  boards_kr.value = await getKr();
});

async function searchBooks(kr?: string) {
  let query = useSupabase().value.from("board").select().neq("link", null);

  // .eq("kr", kr)
  if (kr) {
    // kr이 존재하는 경우에만 .eq("kr", kr)를 적용
    query = query.eq("kr", kr);
  }

  const { data, error } = await query.order(selectedOrderBy.value, {
    ascending: false,
  });
  if (error) {
    console.error(error);
  } else {
    boards.value = data ?? [];
    pageBoards.value = [...boards.value.slice(0, 20)];

    grid = document.querySelector(".grid");

    imagesLoaded(grid, function () {
      // init Isotope after all images have loaded
      new Masonry(grid, {
        itemSelector: ".grid-item",
        percentPosition: true,
      });
    });
  }
}

const boardAddState = ref(false);
//const scrollContainer = useState("scrollContainer", () => null);

function infiniteHandler($state: any) {
  if (boardAddState.value) return;
  console.log(`${boards.value.length} < ${(page.value - 1) * PAGE}`);
  if (boards.value.length < (page.value - 1) * PAGE) {
    const { toast } = useToast();
    toast({
      title: "게시판 끝에 도달하였습니다.",
    });
    return;
  }
  boardAddState.value = true;

  //let scrollPosition = 0;

  // 딜레이 후 함수의 주요 로직 실행
  const time = setTimeout(() => {
    try {
      //scrollPosition = scrollContainer.value.scrollTop;
      // 여기에 함수의 주요 로직을 작성
      // 예: 데이터를 불러오는 코드
      page.value++;
      const nextpage = [
        ...boards.value.slice((page.value - 1) * PAGE, page.value * PAGE),
      ];

      pageBoards.value.push(...nextpage);

      //pageBoards.value = [...pageBoards.value, ...nextpage];

      grid = document.querySelector(".grid");

      imagesLoaded(grid, function () {
        // init Isotope after all images have loaded
        new Masonry(grid, {
          itemSelector: ".grid-item",
          percentPosition: true,
        });
      });

      setTimeout(() => {
        if (boards.value.length < page.value * PAGE) {
          $state.loaded();
        } else {
          $state.complete();
        }

        clearTimeout(time);
        boardAddState.value = false;
      }, 100);
    } catch (error) {
      // 오류 처리
      console.error(error);
      $state.error();
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
  <div class="pt-4 px-4 flex gap-4">
    <Select v-model="selectedBook" @update:model-value="changeSelectedBook">
      <SelectTrigger class="w-fit">
        <SelectValue placeholder="Select 만화책" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem :value="book.kr" v-for="book in boards_kr">
            <div class="flex items-center gap-2">
              <img
                class="h-8 w-fit rounded-md object-cover"
                :src="KR_IMG_BOOKS[book.kr]"
              />
              <div>
                {{ book.kr }}
              </div>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <!-- [ ] orderBy -->
    <Tabs
      v-model="selectedOrderBy"
      @update:model-value="updateSelectedOrderBy"
      class="w-[400px]"
    >
      <TabsList>
        <TabsTrigger value="date"> 시간순 </TabsTrigger>
        <TabsTrigger value="recommend"> 추천순 </TabsTrigger>
        <TabsTrigger value="number"> 덧글순 </TabsTrigger>
        <TabsTrigger value="count"> 조회순 </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
  <!-- [ ] 모바일인 경우는 일반 -->
  <div class="sm:hidden">
    <div class="w-screen mb-4" v-for="board in pageBoards">
      <div class="relative w-full">
        <div
          class="absolute z-10 p-2 text-white w-2/3"
          style="pointer-events: none"
        >
          <div class="font-bold line-clamp-2">
            {{ (board as any).title }}
          </div>
          <div
            class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
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
                  class="md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down"
                  :src="replaceDomain(img).replace(/co\.kr/g, 'com')"
                />
                <Badge class="absolute top-3 right-3 bg-opacity-50 bg-black">
                  {{ index + 1 }} /
                  {{ imgLinkParse((board as any).link).length }}
                </Badge>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div
          class="absolute top-0 left-0 w-full h-full md:rounded-md"
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
          class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden"
          style="pointer-events: none"
        >
          <div class="flex gap-4 items-end flex-1 overflow-hidden">
            <img
              class="h-16 rounded-md object-cover shrink-0"
              :src="KR_IMG_BOOKS[(board as any).kr]"
            />
            <div class="flex-col flex-1 overflow-hidden">
              <div class="line-clamp-2">
                {{ (board as any).content }}
              </div>
              <div class="flex text-xs gap-2">
                <div class="font-normal">
                  {{ timeAgo((board as any).date) }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2 text-xl items-center shrink-0">
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
    </div>
    <div class="w-full rounded-md p-2 flex items-center justify-center">
      <InfiniteLoading
        v-if="pageBoards.length > 0 && boardAddState == false"
        @infinite="infiniteHandler"
      />
    </div>
  </div>
  <div class="md:p-2 md:py-4 hidden sm:block">
    <!-- <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"
    > -->
    <!-- <div
      class="sm:column-count-1 md:column-count-2 lg:md:column-count-3 xl:md:column-count-4"
      style="column-gap: 1em"
    > -->

    <!-- <masonry-wall
      :items="pageBoards"
      :ssr-columns="20"
      :column-width="300"
      :gap="16"
    > -->
    <div class="grid">
      <div class="grid-sizer"></div>

      <div
        class="w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7"
        v-for="board in pageBoards"
      >
        <div class="relative w-full">
          <div
            class="absolute z-10 p-2 text-white w-2/3"
            style="pointer-events: none"
          >
            <div class="font-bold line-clamp-2">
              {{ (board as any).title }}
            </div>
            <div
              class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"
            >
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
                    class="md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down"
                    :src="replaceDomain(img).replace(/co\.kr/g, 'com')"
                  />
                  <Badge class="absolute top-3 right-3 bg-opacity-50 bg-black">
                    {{ index + 1 }} /
                    {{ imgLinkParse((board as any).link).length }}
                  </Badge>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div
            class="absolute top-0 left-0 w-full h-full md:rounded-md"
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
            class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden"
            style="pointer-events: none"
          >
            <div class="flex gap-4 items-end flex-1 overflow-hidden">
              <img
                class="h-16 rounded-md object-cover shrink-0"
                :src="KR_IMG_BOOKS[(board as any).kr]"
              />
              <div class="flex-col flex-1 overflow-hidden">
                <div class="line-clamp-2">
                  {{ (board as any).content }}
                </div>
                <div class="flex text-xs gap-2">
                  <div class="font-normal">
                    {{ timeAgo((board as any).date) }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 text-xl items-center shrink-0">
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
      </div>
    </div>
    <!-- </masonry-wall> -->

    <div class="w-full rounded-md p-2 flex items-center justify-center">
      <InfiniteLoading
        v-if="pageBoards.length > 0 && boardAddState == false"
        @infinite="infiniteHandler"
      />
    </div>
  </div>
</template>
<style scoped>
/* ---- grid ---- */

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}
</style>
