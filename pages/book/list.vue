<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

const book = ref<any>({
  data: [],
  error: "",
});

const clicked = useState("clicked", () => false);
const selectedCombo = ref<string>("");
const loading = ref(false);

onMounted(() => {
  select();
});

watch(clicked, () => {
  select();
});

async function select(date?: string) {
  try {
    if (date) {
      book.value = await supabase
        .from("book")
        .select()
        .eq("date", date)
        .order("sales", { ascending: false });
    } else {
      book.value = await supabase
        .from("book")
        .select()
        .order("sales", { ascending: false });
    }
  } catch (error) {
    console.error(error);
  }
}

function allSelect() {
  select();
}

function comboselect(value: string) {
  select(value);
  selectedCombo.value = value;
}

// 수집하기 버튼 클릭시
async function collect() {
  // useFetch 에서 insert 까지 함
  await useFetch(`/api/book/${selectedCombo.value}`);
  select(selectedCombo.value);
}

// book.value.data 에서
// kr 이 없는 책리스트와 kr 이 있는 책 리스트를 반환
function getBookList() {
  const bookList = book.value.data;
  const bookListWithKr = bookList.filter((book: any) => book.kr);
  const bookListWithoutKr = bookList.filter((book: any) => !book.kr);
  return { bookListWithKr, bookListWithoutKr };
}

// kr 이 없는 리스트의 경우 kr 이 있는 리스트를 참조하여 kr 과 img 를 추가하는 작업을 반복
function getBookListWithKr() {
  const { bookListWithKr, bookListWithoutKr } = getBookList();

  const bookListWithKrAndImg = bookListWithoutKr.map((book: any) => {
    const foundBook = bookListWithKr.find(
      (bookWithKr: any) => bookWithKr.jp === book.jp
    );
    const { kr, img } = foundBook || { kr: undefined, img: undefined };
    return { ...book, kr, img };
  });
  return bookListWithKrAndImg;
}

// bookListWithKrAndImg 의 결과에서 kr 이 undefined 인건 제거
function getBookListWithKrAndImgWithoutUndefined() {
  const bookListWithKrAndImg = getBookListWithKr();
  const bookListWithKrAndImgWithoutUndefined = bookListWithKrAndImg.filter(
    (book: any) => book.kr
  );
  return bookListWithKrAndImgWithoutUndefined;
}

// getBookListWithKr() 의 결과에서 jp 가 중복인건 제거
function getBookListWithKrAndImg() {
  const bookListWithKrAndImg = getBookListWithKrAndImgWithoutUndefined();
  const bookListWithKrAndImgWithoutDuplication = bookListWithKrAndImg.filter(
    (book: any, index: number, self: any) =>
      index === self.findIndex((t: any) => t.jp === book.jp)
  );
  return bookListWithKrAndImgWithoutDuplication;
}

// getBookListWithKrAndImg() 의 결과를 db 에 저장
async function saveBookList() {
  loading.value = true;

  const bookListWithKrAndImgWithoutDuplication = getBookListWithKrAndImg();

  bookListWithKrAndImgWithoutDuplication.forEach(async (book: any) => {
    await supabase
      .from("book")
      .update({
        kr: book.kr,
        img: book.img,
      })
      .eq("jp", book.jp);
  });
  loading.value = false;
}

function bookUpdated() {
  if (selectedCombo.value == "") {
    select();
  } else {
    select(selectedCombo.value);
  }
}

import { columns } from "./columns";
</script>
<template>
  <div class="p-4 flex flex-col gap-4">
    <DialogBook @update:open="bookUpdated" />
    <CommonHeader
      title="List"
      description="책 리스트를 볼 수 있으며, 책 편집을 하는 화면 입니다."
    />
    <div class="flex gap-2">
      <Button @click="collect" :disabled="book.data.length != 0"
        >수집하기</Button
      >

      <Button v-if="loading" disabled>
        <Loader2 class="w-4 h-4 mr-2 animate-spin" />
        Please wait
      </Button>
      <Button v-else @click="saveBookList">kr, img 업데이트</Button>
      <Button variant="secondary" @click="allSelect">전체 조회</Button>
      <PagesBookCombobox @select="comboselect" />
    </div>
    <PagesBookDataTable :columns="columns" :data="book.data" />
  </div>
</template>
