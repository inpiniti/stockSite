<script setup lang="ts">
import moment from "moment";

const books = useBooks();

function onChange(arg: { type: any; date: any }) {
  console.log(arg.type);
  console.log(moment(arg.date).format("YYYY.MM.DD"));
}
</script>
<template>
  <div class="grow-[1]">
    <LayoutsNavBooksCondition @change="onChange" />
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
