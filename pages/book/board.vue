<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

import imagesLoaded from "imagesloaded";
// 페이징 처리
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const PAGE = 10;
// 불러온 데이터에서 page 처리
const page = ref(1);

// db에서 가져올때 page 처리
const server_page = ref(1);
const server_limit = ref(100);
const totalPage = ref(0);

// 스크롤을 위로 하는지 아래로 하는지에 따라서 메뉴를 숨기거나 보이게 하기 위함
const isScrollingDown = useState("isScrollingDown");

const boards = ref<any[]>([]);
const boards_kr = ref<any[]>([]);
const boards_subject = ref<any[]>([
  "스포",
  "핫산",
  "건국담",
  "창작",
  "번역",
  "짤",
  "유출",
  "게임",
  "팬아트",
  "분석",
  "창조",
  "정보",
  "일반",
  "이벤트",
  "구매",
  "원작",
  "질문",
  "성지",
  "잡담",
]);
const selectedOrderBy = ref("date");
const selectedSubject = ref();

// 정렬 변경시
function updateSelectedOrderBy() {
  boardAddState.value = false;
  server_page.value = 1;

  page.value = 1;
  document.documentElement.scrollTop = 0;
  pageBoards.value = [];
  searchBooks();
}

let grid: any = null;

const KR_IMG_BOOKS = krImgBooks();
const books = uniqueBooks();
const selectedBook = ref();

// 책 선택시 & 부제목 선택시
function changeSelectedBook() {
  boardAddState.value = false;
  server_page.value = 1;

  page.value = 1;
  document.documentElement.scrollTop = 0;
  pageBoards.value = [];
  searchBooks();
}

const pageBoards = ref<any>([]);
// computed(() => {
//   return boards.value.slice(0, page.value * 20);
// });

onMounted(async () => {
  searchBooks();
  boards_kr.value = await getKr();
  //boards_subject.value = await getSubject();
});

// 책 정보 조회
async function searchBooks() {
  console.log("searchBooks");
  let query = useSupabase()
    .value.from("board")
    .select()
    .neq("link", null)
    .range(
      (server_page.value - 1) * server_limit.value,
      server_page.value * server_limit.value - 1
    );

  let count_query = useSupabase()
    .value.from("board")
    .select("*", { count: "exact", head: true })
    .neq("link", null);

  // .eq("kr", kr)
  // if (kr) {
  //   // kr이 존재하는 경우에만 .eq("kr", kr)를 적용
  //   query = query.eq("kr", kr);
  //   count_query = count_query.eq("kr", kr);
  // }

  if (selectedSubject.value && selectedSubject.value != "all") {
    query = query.ilike("subject", `%${selectedSubject.value}%`);
    count_query = count_query.ilike("subject", `%${selectedSubject.value}%`);
  }

  if (selectedBook.value && selectedBook.value != "all") {
    query = query.eq("kr", selectedBook.value);
    count_query = count_query.eq("kr", selectedBook.value);
  }

  const { data, error } = await query.order(selectedOrderBy.value, {
    ascending: false,
  });
  if (error) {
    console.error(error);
  } else {
    boards.value = data ?? [];
    pageBoards.value = [
      ...pageBoards.value,
      ...boards.value.slice(0, page.value * PAGE),
    ];

    gridReorder();
  }
  const {
    data: countData,
    error: countError,
    status,
    count,
  } = await count_query;
  if (countError) {
    console.error(countError);
  } else {
    console.log(countData);
    console.log(status);
    console.log(count);
    totalPage.value = count || 0;
  }
}

// 페이지 변경시
function changePage(newPage: number) {
  page.value = 1;
  server_page.value = newPage;
  boardAddState.value = false;

  document.documentElement.scrollTop = 0;
  pageBoards.value = [];
  searchBooks();
}

const boardAddState = ref(false);

// 무한 스크롤 작동시
function infiniteHandler($state: any) {
  console.log("infiniteHandler");
  if (boardAddState.value) return;
  console.log(`${boards.value.length} < ${(page.value - 1) * PAGE}`);
  if (boards.value.length == page.value * PAGE) {
    page.value = 1;
    server_page.value = server_page.value + 1;
    boardAddState.value = false;
    searchBooks();
    return;
  }
  boardAddState.value = true;

  //let scrollPosition = 0;

  // 딜레이 후 함수의 주요 로직 실행
  const time = setTimeout(() => {
    try {
      // 여기에 함수의 주요 로직을 작성
      // 예: 데이터를 불러오는 코드
      page.value++;
      const nextpage = [
        ...boards.value.slice((page.value - 1) * PAGE, page.value * PAGE),
      ];
      if (nextpage.length == 0) return;

      pageBoards.value.push(...nextpage);

      //pageBoards.value = [...pageBoards.value, ...nextpage];

      //gridReorder();

      setTimeout(() => {
        if (boards.value.length < page.value * PAGE) {
          $state.loaded();
        } else {
          $state.complete();
        }

        clearTimeout(time);
        boardAddState.value = false;
      });
    } catch (error) {
      // 오류 처리
      console.error(error);
      $state.error();
    }
  }); // 1000ms (1초) 딜레이
}

// grid 재정렬
function gridReorder() {
  console.log("gridReorder");
  grid = document.querySelector(".grid");
  console.log(grid);

  let timeouts = [];
  for (let i = 0; i < 100; i++) {
    let timeoutId = setTimeout(() => {
      new Masonry(grid, {
        itemSelector: ".grid-item",
        percentPosition: true,
      });
    }, 1000 * i);
    timeouts.push(timeoutId);
  }

  // imagesLoaded(grid, function () {
  //   console.log("imagesLoaded");

  //   for (let timeoutId of timeouts) {
  //     clearTimeout(timeoutId);
  //   }

  //   // init Isotope after all images have loaded
  //   new Masonry(grid, {
  //     itemSelector: ".grid-item",
  //     percentPosition: true,
  //   });
  // });
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
  <div
    class="fixed top-13 w-full z-20 border-y bg-white dark:bg-black"
    :class="{ hidden: isScrollingDown }"
  >
    <!-- [ ] orderBy -->

    <Menubar class="border-0">
      <!-- sm: phone, md: phone, lg: ipad, xl: pc -->

      <Select v-model="selectedBook" @update:model-value="changeSelectedBook">
        <SelectTrigger class="w-fit border-0 max-w-48">
          <SelectValue placeholder="comic" />
        </SelectTrigger>
        <SelectContent class="max-w-96">
          <SelectGroup>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem class="pl-0" :value="book.kr" v-for="book in boards_kr">
              <div class="flex items-center gap-2">
                <img
                  class="h-8 rounded-md object-scale-down"
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
      <Select
        v-model="selectedSubject"
        @update:model-value="changeSelectedBook"
      >
        <SelectTrigger class="w-fit border-0">
          <SelectValue placeholder="sub" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem class="pl-0" value="all">전체</SelectItem>
            <SelectItem
              class="pl-0"
              :value="subject"
              v-for="subject in boards_subject"
            >
              {{ subject }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        v-model="selectedOrderBy"
        @update:model-value="updateSelectedOrderBy"
      >
        <SelectTrigger class="w-fit border-0">
          <SelectValue placeholder="order" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem class="pl-0" value="date"> 시간순 </SelectItem>
            <SelectItem class="pl-0" value="recommend"> 추천순 </SelectItem>
            <SelectItem class="pl-0" value="number"> 덧글순 </SelectItem>
            <SelectItem class="pl-0" value="count"> 조회순 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Menubar>
  </div>
  <!-- [ ] 모바일인 경우는 일반 -->
  <div class="sm:hidden pt-10">
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
  <div class="md:p-2 md:py-4 md:pt-14 hidden sm:block">
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
        v-for="board in boards"
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

    <Pagination
      class="flex justify-center"
      :total="totalPage / 10"
      :sibling-count="1"
      show-edges
      :default-page="1"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === server_page ? 'default' : 'outline'"
              @click="changePage(item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>

    <!-- <div class="w-full rounded-md p-2 items-center justify-center h-0 hidden">
      <InfiniteLoading
        class="h-0"
        v-if="pageBoards.length > 0 && boardAddState == false"
        @infinite="infiniteHandler"
      />
    </div> -->
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
