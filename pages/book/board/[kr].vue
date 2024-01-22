<script setup>
const route = useRoute();
const book = ref();

// kr 로 책 정보를 가져온다.
onMounted(async () => {
  book.value = findBook(route.params.kr);
});

// board 데이터를 가져온다.
const boards = useSupabase(
  "board",
  (builder) => {
    builder
      .select("*")
      .eq("kr", route.params.kr)
      .order("created_at", { ascending: false });
  },
  { initialData: [] }
);
</script>
<template>
  <div class="p-4">
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
  </div>
</template>
