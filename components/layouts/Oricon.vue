<script setup lang="ts">
const props = defineProps<{
  book: any;
}>();

const selectedBook = useSelectedBook();

// oricon 선택
function selectOricon() {
  selectedBook.value = props.book;
}
</script>
<template>
  <div
    v-if="!!book"
    class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-50 cursor-pointer"
    :class="{ 'bg-neutral-100': selectedBook.id == book.id }"
    @click="selectOricon"
  >
    <div class="flex gap-2 justify-between items-center">
      <div class="grow-[0] text-left font-semibold text-sm">
        {{ book.kr }} {{ book.booknum }}
        <div class="text-xs text-left font-normal">
          {{ book.jp }}
        </div>
      </div>
      <div class="shrink-0 text-xs">{{ book.date }}</div>
    </div>
    <div
      class="text-xs text-left overflow-hidden overflow-ellipsis"
      style="
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      "
    >
      {{ book.description }}
    </div>
    <div
      class="text-xs text-neutral-400 text-left overflow-hidden overflow-ellipsis"
      style="
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      "
    >
      {{ book.summary }}
    </div>
    <div class="flex justify-between items-end">
      <div class="flex flex-col justify-left text-xs text-left gap-1">
        <div class="flex gap-1">
          <a
            :href="`https://gall.dcinside.com/mgallery/board/lists/?id=${book.dc}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge v-if="book.dc">dc</Badge>
          </a>
          <a
            :href="`https://namu.wiki/w/${book.namu}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge v-if="book.namu">namu</Badge>
          </a>
        </div>
        <div class="w-fit flex gap-2 items-center">
          저자
          <Badge variant="outline">{{ book.author }}</Badge>
        </div>
        <div class="w-fit flex gap-2">
          출판사
          <Badge variant="outline">{{ book.publisher }}</Badge>
        </div>
        <div class="w-fit flex gap-2">
          주간 판매량
          <Badge variant="outline">{{ book.sales }}</Badge>
        </div>
      </div>
      <Button variant="ghost" @click="useBook().openBook(book)">
        <font-awesome-icon :icon="['fas', 'ellipsis']" />
      </Button>
    </div>
  </div>
</template>
