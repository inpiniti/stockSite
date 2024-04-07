<script setup lang="ts">
const books = useBooks();
const type = ref("week");
</script>
<template>
  <div class="grow-[1]">
    <LayoutsNavBooksCondition v-model="type" />
    <ScrollArea class="flex">
      <div class="flex-1 flex flex-col gap-2 p-2">
        <TransitionGroup name="list" appear>
          <button v-for="book of books" :key="book.id">
            <div class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-100">
              <div class="flex gap-2 justify-between items-center">
                <div class="grow-[0] text-left font-semibold text-sm">{{ book.kr }} {{ book.booknum }}</div>
                <div class="shrink-0 text-xs">{{ book.date }}</div>
              </div>

              <div class="text-xs text-left">
                {{ book.jp }}
              </div>
              <div class="text-xs text-left">판매량 : {{ book.sales }}</div>
            </div>
          </button>
        </TransitionGroup>
      </div>
    </ScrollArea>
  </div>
</template>
