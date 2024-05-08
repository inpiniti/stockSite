<template>
  <div class="flex flex-col h-full">
    <div class="p-2">
      <div
        class="flex border rounded-lg px-4 py-1.5 pt-2 hover:bg-neutral-100 cursor-pointer items-center gap-2"
      >
        <font-awesome-icon :icon="['fas', 'pen']" /> 글 쓰기
      </div>
    </div>
    <Separator />
    <div
      v-if="loading"
      class="bg-neutral-100 h-full w-full flex items-center justify-center"
    >
      <font-awesome-icon :icon="['fas', 'circle-notch']" spin />
    </div>
    <div class="overflow-y-scroll scrollbar-hide" ref="scrollContainer" v-else>
      <div class="flex-1 flex flex-col gap-2 p-2">
        <TransitionGroup name="list" appear>
          <div v-for="(board, index) in boards" :key="index">
            <MailBoard :board="board" @click="onClickBoardDetail" />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { format } from "date-fns";
const PAGE = 10;
const page = ref(1);
const server_page = ref(1);

const server_limit = ref(100);
const totalPage = ref(0);

const selectedSubject = ref();
const date = ref<Date>();

const selectedBook = useSelectedBook();

const selectedOrderBy = ref("date");
const pageBoards = ref<any>([]);

const boards = ref<any[]>([]);
const board = useBoardDetail();

const scrollContainer = ref(null);

const loading = ref(false);

onMounted(() => {
  searchBooks();
});

watch(
  () => selectedBook.value,
  () => {
    pageBoards.value = [];
    server_page.value = 1;
    searchBooks();
    if (scrollContainer.value) {
      (scrollContainer.value as HTMLElement).scrollTop = 0;
    }
  },
  { deep: true }
);

async function searchBooks() {
  loading.value = true;
  let query = useSupabase()
    .value.from("board")
    .select()
    .range(
      (server_page.value - 1) * server_limit.value,
      server_page.value * server_limit.value - 1
    );

  let count_query = useSupabase()
    .value.from("board")
    .select("*", { count: "exact", head: true });

  if (selectedSubject.value && selectedSubject.value != "all") {
    query = query.ilike("subject", `%${selectedSubject.value}%`);
    count_query = count_query.ilike("subject", `%${selectedSubject.value}%`);
  }

  if (selectedBook.value?.kr) {
    query = query.eq("kr", selectedBook.value.kr);
    count_query = count_query.eq("kr", selectedBook.value.kr);
  }

  if (date.value) {
    console.log(date.value);
    const _date = format(date.value, "yyyy-MM-dd");
    query = query
      .gte("date", `${_date}T00:00:00`)
      .lte("date", `${_date}T23:59:59`);

    count_query = count_query
      .gte("date", `${_date}T00:00:00`)
      .lte("date", `${_date}T23:59:59`);
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

    //gridReorder();
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
    totalPage.value = count || 0;
  }

  loading.value = false;
}

async function onClickBoardDetail(newBoard: any) {
  board.value = newBoard;
}
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
