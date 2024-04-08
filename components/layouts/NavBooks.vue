<script setup lang="ts">
import moment from "moment";

const books = useBooks();
const type = ref("week");
const date = ref(new Date());

const cBooks = computed(() => {
  // week 인 경우 해당 주의 데이터만 필터링
  if (type.value === "week") {
    return books.value.filter((book) => {
      return moment(book.date).format("YYYY.WW") === moment(date.value).format("YYYY.WW");
    });
  }
  // month 인 경우 해당 월의 데이터만 필터링
  else if (type.value === "month") {
    return books.value.filter((book) => {
      return moment(book.date).format("YYYY.MM") === moment(date.value).format("YYYY.MM");
    });
  }
  // year 인 경우 해당 년도의 데이터만 필터링
  else if (type.value === "year") {
    return books.value.filter((book) => {
      return moment(book.date).format("YYYY") === moment(date.value).format("YYYY");
    });
  }
});

function onChange(arg: { type: any; date: any }) {
  // type: "month" | "week" | "year"
  // date: Date
  type.value = arg.type;
  date.value = arg.date;
}
</script>
<template>
  <div class="grow-[1] overflow-hidden flex flex-col">
    <LayoutsDateSelection class="p-2 shrink-0" @change="onChange" />
    <Separator />
    <ScrollArea class="flex grow-[0]">
      <div class="flex-1 flex flex-col gap-2 p-2">
        <TransitionGroup name="list" appear>
          <button v-for="book of cBooks" :key="book.id">
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
