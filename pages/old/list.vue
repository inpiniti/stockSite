<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import type { Cover } from "@/types/Cover";

const { toast } = useToast();
const uniqueGenre = useUniqueGenre().value;

const books = useBooks();
const coverList = useCoverList();
const selectedCombo = ref<string>("");

// 장르가 있는지 없는지 유무 포함
const computedBooks = computed(() => {
  return books.value.map((book: any) => {
    const isGenre =
      uniqueGenre.filter((genre: any) => genre.kr === book.kr).length > 0;

    // coverList의 kr, book_num 과
    // books의 kr, booknum 가 일치하면
    // cover의 img 를 book 의 img 에 추가
    const matchingCover = coverList.value.find(
      (cover: Cover) => cover.kr === book.kr && cover.booknum === book.booknum
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }

    return { ...book, isGenre: isGenre };
  });
});

// 책 정보 조회
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

// 전체 조회 버튼 클릭시
function allSelect() {
  select();
}

// 년 - 월 선택박스에서 선택 시
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
// kr 뿐 아니라 img 까지 없는 리스트로 반환
function getBookList() {
  const bookList = books.value;
  const bookListWithKr = bookList.filter((book: any) => book.kr && book.img);
  const bookListWithoutKr = bookList.filter(
    (book: any) => !book.kr || !book.img
  );
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
  const bookListWithKrAndImgWithoutDuplication = getBookListWithKrAndImg();

  bookListWithKrAndImgWithoutDuplication.forEach(async (book: any) => {
    await useSupabase()
      .value.from("book")
      .update({
        kr: book.kr,
      })
      .eq("jp", book.jp);
  });
}

// 다이아로그에서 먼가를 하고나면 실행됨
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

  const result = _uniqueBooks.filter(
    (book: any) => !uniqueGenre.some((genre: any) => genre.kr === book.kr)
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
      <Button @click="collect" :disabled="books.length != 0">수집하기</Button>
      <Button @click="genreUpdate">장르 업데이트</Button>
      <Button @click="saveBookList">kr, img 업데이트</Button>
      <Button variant="secondary" @click="allSelect">전체 조회</Button>
      <PagesBookCombobox @select="comboselect" />
    </div>
    <PagesBookDataTable :columns="columns" :data="computedBooks" />
  </div>
</template>
