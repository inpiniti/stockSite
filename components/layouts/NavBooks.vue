<script setup lang="ts">
import moment from "moment";
import { type Book } from "@/composables/useBooks";

const books = useBooks();
const bookInfoList = useBookInfoList();

const type = ref("week");
const date = ref(new Date());
const dialogOpen = ref(false);

const cBooks: any = computed(() => {
  // week 인 경우 해당 주의 데이터만 필터링
  if (type.value === "week") {
    const week = books.value.filter((book) => {
      return (
        moment(book.date).format("YYYY.WW") ===
        moment(date.value).format("YYYY.WW")
      );
    });
    return addBookInfo(week);
  }
  // month 인 경우 해당 월의 데이터만 필터링
  else if (type.value === "month") {
    const month = books.value.filter((book) => {
      return (
        moment(book.date).format("YYYY.MM") ===
        moment(date.value).format("YYYY.MM")
      );
    });
    return addBookInfo(month);
  }
  // year 인 경우 해당 년도의 데이터만 필터링
  else if (type.value === "year") {
    const year = books.value.filter((book) => {
      return (
        moment(book.date).format("YYYY") === moment(date.value).format("YYYY")
      );
    });
    return addBookInfo(year);
  }
});

const bookInfoMap = computed(() => {
  return Object.fromEntries(
    bookInfoList.value.map((bookInfo) => [bookInfo.kr, bookInfo])
  );
});

// 책정보에 bookinfo 데이터를 추가
function addBookInfo(books: Book[]) {
  return books?.map((book: any) => {
    // kr 일치하는게 있으면 추가 없으면 book 그대로 리턴
    const bookInfo = bookInfoMap.value[book.kr];
    if (bookInfo) {
      return {
        ...book,
        ...bookInfo,
      };
    } else {
      return {
        ...book,
      };
    }
  });
}

function onChange(arg: { type: any; date: any }) {
  // type: "month" | "week" | "year"
  // date: Date
  type.value = arg.type;
  date.value = arg.date;
}

// 다이아로그에서 먼가를 하고나면 실행됨
function bookUpdated() {}
</script>
<template>
  <div class="grow-[1] overflow-hidden flex flex-col">
    <DialogBook @update:open="bookUpdated" />
    <LayoutsDateSelection class="p-2 shrink-0" @change="onChange" />
    <Separator />
    <ScrollArea class="flex grow-[0]">
      <div class="flex-1 flex flex-col gap-2 p-2">
        <div v-for="(book, index) in cBooks" :key="index">
          <LayoutsOricon :book="book" />
        </div>
      </div>
    </ScrollArea>
  </div>
</template>
