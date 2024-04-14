<script setup lang="ts">
const props = defineProps<{
  book: any;
}>();
</script>
<template>
  <div
    class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-50"
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
        <div class="w-fit flex gap-1">
          <Badge variant="secondary">저자</Badge>
          <Badge variant="outline">{{ book.author }}</Badge>
        </div>
        <div class="w-fit flex gap-1">
          <Badge variant="secondary">출판사</Badge>
          <Badge variant="outline">{{ book.publisher }}</Badge>
        </div>
        <div class="w-fit flex gap-1">
          <Badge variant="secondary">주간 판매량</Badge>
          <Badge variant="outline">{{ book.sales }}</Badge>
        </div>
      </div>
      <Button variant="ghost" @click="useBook().openBook(book)">
        <font-awesome-icon :icon="['fas', 'ellipsis']" />
      </Button>
    </div>
  </div>
</template>
