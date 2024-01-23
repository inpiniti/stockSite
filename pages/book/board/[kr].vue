<script setup>
const route = useRoute();
const book = ref({
  kr: "",
  img: "",
});

// kr 로 책 정보를 가져온다.
onMounted(async () => {
  console.log("route.params.kr", route.params.kr);
  book.value = findBook(String(route.params.kr));
});

// BUG 접속시 500 에러 뜸
// http://localhost:3000/book/board/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84 로 접속함
// Cannot stringify arbitrary non-POJOs

// board 데이터를 가져온다.
function test() {
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
}
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
