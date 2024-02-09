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

function test() {
  const scrollContainer = useState("scrollContainer", () => null);
  let scrollPosition = scrollContainer.value.scrollTop;
  page.value++;
  const nextpage = [
    ...boards.value.slice((page.value - 1) * 20, page.value * 20),
  ];

  pageBoards.value = [...pageBoards.value, ...nextpage];
  // 스크롤 위치 복원
  setTimeout(() => {
    nextTick(() => {
      console.log(scrollPosition);
      scrollContainer.value.scrollTo(0, scrollPosition);
    });
  });
}

function infiniteHandler($state: any) {
  if (boardAddState.value) return;
  boardAddState.value = true;

  // 딜레이 후 함수의 주요 로직 실행
  const time = setTimeout(() => {
    try {
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
      <template #default="{ item }" class="sm:w-screen md:w-full mb-4">
        <button @click="test">test</button>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
        <div>{{ item.kr }}</div>
      </template>
    </masonry-wall>
    <div
      class="w-full rounded-md p-2 flex items-center justify-center"
      @click="test"
    >
      <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
    </div>
    <!-- <InfiniteLoading v-if="pageBoards.length > 0" @infinite="infiniteHandler" /> -->
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
