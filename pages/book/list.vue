<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

const books = useBooks();
const clicked = useState("clicked", () => false);
const selectedCombo = ref<string>("");
const loading = ref(false);

onMounted(() => {
  //select();

  const _uniqueBooks = uniqueBooks();
  const _uniqueGenre = uniqueGenre();

  const result = _uniqueBooks.filter(
    (book: any) => !_uniqueGenre.some((genre: any) => genre.kr === book.kr)
  );

  console.log(result);
});

watch(clicked, () => {
  select();
});

// 장르가 있는지 없는지 유무 포함
const computedBooks = computed(() => {
  return books.value.map((book: any) => {
    const isGenre =
      uniqueGenre().filter((genre: any) => genre.kr === book.kr).length > 0;
    return { ...book, isGenre: isGenre };
  });
});

async function select(date?: string) {
  toast({
    title: "fetchBooks",
    description: "books 를 가져오는중",
  });
  await fetchBooks(date);
  toast({
    title: "fetchBooks",
    description: "books 를 가져옴",
  });
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
  const bookList = books.value;
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

// 책 리스트를 불러온다. (장르가 없는 경우 업데이트를 함)
async function genreUpdate() {
  const _uniqueBooks = uniqueBooks();
  const _uniqueGenre = uniqueGenre();

  const result = _uniqueBooks.filter(
    (book: any) => !_uniqueGenre.some((genre: any) => genre.kr === book.kr)
  );

  for (const book of result) {
    const book_name = book.namu ? book.namu : book.kr;
    const { data } = await useFetch<any>(`/api/namuWiki/${book_name}`);
    if (data.value?.gneres) {
      await useSupabase()
        .value.from("genre")
        .insert(
          data.value?.gneres.map((gnere: any) => {
            return {
              kr: book.kr,
              genre_name: gnere,
            };
          })
        );
      toast({
        title: "fetchGenre",
        description: `${book.kr} 의 장르를 업데이트 함`,
      });
    } else {
      toast({
        title: "fetchGenre",
        description: `${book.kr} 의 장르를 업데이트 실패함`,
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 딜레이
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
      <Button @click="collect" :disabled="computedBooks.length != 0"
        >수집하기</Button
      >
      <Button @click="genreUpdate">장르 업데이트</Button>

      <Button v-if="loading" disabled>
        <Loader2 class="w-4 h-4 mr-2 animate-spin" />
        Please wait
      </Button>
      <Button v-else @click="saveBookList">kr, img 업데이트</Button>
      <Button variant="secondary" @click="allSelect">전체 조회</Button>
      <PagesBookCombobox @select="comboselect" />
    </div>
    <PagesBookDataTable :columns="columns" :data="computedBooks" />
  </div>
</template>
