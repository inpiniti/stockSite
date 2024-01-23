<script setup>
import { columns } from "./board.columns";
const board = ref([]);
const boardRef = ref();

onMounted(async () => {
  board.value = await useBoard().getBoards();
});

function boardWriteOpen() {
  console.log("boardWriteOpen");
  boardRef.value.onOpen();
}
</script>
<template>
  <!-- [ ] 선택되게 하려면? -->
  <DialogBoard ref="boardRef" />
  <div class="p-4">
    <CommonHeader title="게시판" description="커뮤니티입니다." />
    <div class="flex gap-2">
      <Button @click="boardWriteOpen">글쓰기</Button>
    </div>
    <PagesBoardDataTable :columns="columns" :data="board" />
  </div>
</template>
