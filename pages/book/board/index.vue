<script setup>
import { columns } from "./board.columns";
const books = uniqueBooks();

onMounted(async () => {
  //board.value = await useBoard().getBoards();
});

function boardWriteOpen() {
  //boardRef.value.onOpen();
}
</script>
<template>
  <DialogBoard ref="boardRef" />
  <div class="p-4">
    <CommonHeader
      title="게시판"
      description="커뮤니티입니다. 앞으로 더 추가가 될 예정입니다."
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"
    >
      <Card
        v-for="book in books"
        :class="{ 'opacity-50': !book.dc, 'cursor-pointer': book.dc }"
        @click="if (book.dc) navigateTo(`/book/board/${book.kr}`);"
      >
        <CardHeader>
          <CardTitle
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            >{{ book.kr }}</CardTitle
          >
          <CardDescription
            >Deploy your new project in one-click.</CardDescription
          >
        </CardHeader>
        <CardContent>
          <img :src="book.img" />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
