<script setup>
import { columns } from "./board.columns";

const route = useRoute();
const book = ref({
  kr: "",
  img: "",
});
const board = ref([]);
const tableRef = ref();
const isOpen = ref(false);

// kr 로 책 정보를 가져온다.
onMounted(async () => {
  book.value = findBook(String(route.params.kr));

  // kr 책 정보로 게시판 정보를 가져온다.
  setTimeout(() => {
    getBoard();
  });
});

async function getBoard() {
  // kr 책 정보로 게시판 정보를 가져온다.
  const { data: newBoard, error } = await useFetch(
    `/api/dcinside/${book.value.dc}`
  );

  if (newBoard.value) board.value = newBoard.value;
}

// TODO 게시판의 행 클릭시 해당 게시글 다이아로그를 띄운다.
function rowClick(row) {
  isOpen.value = true;

  useBoardDetail().value = {
    ...row.original,
    ...book.value,
  };
}

// BUG 접속시 500 에러 뜸
// http://localhost:3000/book/board/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84 로 접속함
// Cannot stringify arbitrary non-POJOs

// board 데이터를 가져온다.
// function test() {
//   const boards = useSupabase(
//     "board",
//     (builder) => {
//       builder
//         .select("*")
//         .eq("kr", route.params.kr)
//         .order("created_at", { ascending: false });
//     },
//     { initialData: [] }
//   );
// }
</script>
<template>
  <div class="p-4">
    <DialogBoardDetail :isOpen="isOpen" @update:open="isOpen = false" />
    <CommonHeader
      :title="book?.kr"
      :description="`${book?.kr}의 게시판 입니다`"
    />
    <div>
      <img
        class="h-56 object-cover overflow-hidden rounded-md"
        :src="book?.img"
      />
    </div>
    <div v-if="pending">조회중 ...</div>
    <div v-else>조회 완료</div>
    <!-- [ ] 만화책 게시판 table -->
    <PagesBoardDataTable
      v-else
      :columns="columns"
      :data="board"
      @rowClick="rowClick"
    />
  </div>
</template>
