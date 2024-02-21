<script setup lang="ts">
const selectedGenre = ref<string>("all");

async function selecteGenre(genre: string) {
  selectedGenre.value = genre;

  await thisWeek();
  await fourWeek();
  await oneYear();

  datas.value = [
    {
      title: "week",
      단행본: book.value.data,
      시리즈: bestSelling.value.series,
    },
    {
      title: "month",
      단행본: weekBook.value.data,
      시리즈: bestSelling.value.week,
    },
    {
      title: "year",
      단행본: yearBook.value.data,
      시리즈: bestSelling.value.year,
    },
  ];
}

const day = ref<string>(getSaturday());
// db 에서 가져온 데이터
const book = ref<any>({
  data: [],
  error: "",
});
const weekBook = ref<any>({
  data: [],
  error: "",
});
const yearBook = ref<any>({
  data: [],
  error: "",
});
const bestSelling = ref<{
  series: any;
  week: any;
  year: any;
}>({
  series: {},
  week: {},
  year: {},
});

const datas = ref<any>([
  {
    title: "week",
    단행본: [],
    시리즈: [],
  },
  {
    title: "month",
    단행본: [],
    시리즈: [],
  },
  {
    title: "year",
    단행본: [],
    시리즈: [],
  },
]);

const selectedBook = ref<any>({});

const krList = computed(() => {
  if (selectedGenre.value === "all") return [];
  return getGenreKrList(selectedGenre.value).map((genre: any) => {
    return genre.kr;
  });
});

// 이번주 만화책 차트
async function thisWeek() {
  let query = useSupabase()
    .value.from("book")
    .select()
    .order("sales", { ascending: false });

  if (krList.value.length > 0) {
    query = query.in("kr", krList.value);
  }

  if (book.value.data.length === 0) {
    query = query.eq("date", getSaturday(1));
  } else {
    query = query.eq("date", day.value);
  }

  book.value = await query;
  book.value.data = await updateCoverImage(book.value.data);

  // 누적 데이터
  bestSelling.value.series = restructureData(book.value.data);
  bestSelling.value.series = await updateCoverImageFirst(
    bestSelling.value.series
  );
}

// 4주간 만화책 차트
async function fourWeek() {
  let query = useSupabase()
    .value.from("book")
    .select()
    .gte("date", getSaturday(4))
    .lte("date", day.value)
    .order("sales", { ascending: false });

  if (krList.value.length > 0) {
    query = query.in("kr", krList.value);
  }

  weekBook.value = await query;

  weekBook.value.data = restructureNumData(weekBook.value.data);
  weekBook.value.data = await updateCoverImage(weekBook.value.data);

  // 누적 데이터
  bestSelling.value.week = restructureData(weekBook.value.data);
  bestSelling.value.week = await updateCoverImageFirst(bestSelling.value.week);
}

// 1년간 만화책 차트
async function oneYear() {
  let query = useSupabase()
    .value.from("book")
    .select()
    .gte("date", getSaturday(52))
    .lte("date", day.value)
    .order("sales", { ascending: false });

  if (krList.value.length > 0) {
    query = query.in("kr", krList.value);
  }

  yearBook.value = await query;

  yearBook.value.data = restructureNumData(yearBook.value.data);
  yearBook.value.data = await updateCoverImage(yearBook.value.data);

  // 누적 데이터
  bestSelling.value.year = restructureData(yearBook.value.data);
  bestSelling.value.year = await updateCoverImageFirst(bestSelling.value.year);
}

// booklist 에서 jp 와 booknum 두개를 기준으로 데이터를 재구성해줘
function restructureNumData(bookList: any[]) {
  return sortData(
    bookList.reduce((acc, book) => {
      // jp와 booknum을 기준으로 기존의 데이터를 찾습니다.
      const existingBook = acc.find(
        (b: any) => b.jp === book.jp && b.booknum === book.booknum
      );

      if (!existingBook) {
        // jp와 booknum이 존재하지 않는 경우, 새로운 데이터를 추가합니다.
        acc.push({
          jp: book.jp,
          booknum: book.booknum,
          kr: book.kr,
          img: book.img,
          sales: book.sales,
          dc: book.dc,
        });
      }

      return acc;
    }, [])
  );
}
// booklist 에서 jp 를 기준으로 데이터를 재구성하는데
// 이때 필요한 데이터는 jp, kr, img, sales 이며, sales 는 누적 시킴
// 즉 리스트가 40개인데, jp 가 20개라면 20개 리턴 됨
function restructureData(bookList: any[]) {
  return sortData(
    bookList.reduce((acc, book) => {
      // jp를 기준으로 기존의 누적된 데이터를 찾습니다.
      const existingBook = acc.find((b: any) => b.jp === book.jp);

      if (existingBook) {
        // jp가 이미 존재하는 경우, sales를 누적합니다.
        existingBook.sales += book.sales;
      } else {
        // jp가 존재하지 않는 경우, 새로운 데이터를 추가합니다.
        acc.push({
          jp: book.jp,
          kr: book.kr,
          img: book.img,
          sales: book.sales,
          dc: book.dc,
        });
      }

      return acc;
    }, [])
  );
}

// sales 를 기준으로 sort
function sortData(bookList: any[]) {
  return bookList.sort((a, b) => b.sales - a.sales);
}

onMounted(async () => {
  await thisWeek();
  await fourWeek();
  await oneYear();

  datas.value = [
    {
      title: "week",
      단행본: book.value.data,
      시리즈: bestSelling.value.series,
    },
    {
      title: "month",
      단행본: weekBook.value.data,
      시리즈: bestSelling.value.week,
    },
    {
      title: "year",
      단행본: yearBook.value.data,
      시리즈: bestSelling.value.year,
    },
  ];
});
const open = ref<boolean>(false);

const namuWiki = ref<any>([]);

async function namuOpen(book: any) {
  selectedBook.value = book;

  const bookname = book.kr;
  const { data } = await useFetch(`/api/namuWiki/${bookname}`);
  namuWiki.value = data.value;
  open.value = true;
}
</script>
<template>
  <DialogNamuWiki
    :open="open"
    :wiki="namuWiki"
    :selectedBook="selectedBook"
    @update:open="open = !open"
  />
  <div class="flex flex-col p-4 gap-4 w-full">
    <CommonHeader title="책 차트" description="책의 차트를 보여줍니다." />
    <Tabs class="w-full overflow-x-scroll" v-model="selectedGenre">
      <TabsList>
        <TabsTrigger value="all" @click="selecteGenre('all')">
          전체
        </TabsTrigger>
        <TabsTrigger
          v-for="genre in uniqueGenreByGenre()"
          :value="genre.genre_name"
          @click="selecteGenre(genre.genre_name)"
        >
          {{ genre.genre_name }}
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs default-value="month" class="w-full">
      <TabsList>
        <TabsTrigger value="week"> 이번주 </TabsTrigger>
        <TabsTrigger value="month"> 4주간 </TabsTrigger>
        <TabsTrigger value="year"> 1년간 </TabsTrigger>
      </TabsList>
      <TabsContent v-for="data in datas" :value="data.title">
        <div class="flex-col flex gap-4">
          <div class="w-full flex flex-col gap-1">
            <div>
              <div class="font-bold text-3xl">시리즈</div>
              <div>시리즈의 전체 판매량 누적</div>
            </div>
            <div
              class="border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"
            >
              <div v-if="data?.시리즈?.length == 0">
                {{
                  data.title == "week"
                    ? "이번주"
                    : data.title == "month"
                    ? "한달간"
                    : "1년간"
                }}의 {{ selectedGenre }} 장르의 시리즈에 집계된 데이터가
                없습니다.
              </div>
              <div v-else v-for="(book, index) in data?.시리즈?.slice(0, 20)">
                <div
                  class="flex flex-col w-40 cursor-pointer"
                  @click="namuOpen(book)"
                >
                  <div class="shrink-0">
                    <img
                      class="h-56 object-cover overflow-hidden rounded-md"
                      :src="book?.img"
                    />
                  </div>
                  <div class="grow-[1]">
                    <div>
                      <div class="font-bold">{{ index + 1 }} 위</div>
                    </div>
                    <div>
                      <div
                        class="font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"
                      >
                        {{ book?.kr }}
                      </div>
                    </div>
                    <div class="text-xs">
                      판매량 {{ book?.sales?.toLocaleString() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col gap-1">
            <div>
              <div class="font-bold text-3xl">단행본</div>
              <div>단행본 전체 판매량 누적</div>
            </div>
            <div
              class="border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"
            >
              <div v-if="data?.단행본?.length == 0">
                {{
                  data.title == "week"
                    ? "이번주"
                    : data.title == "month"
                    ? "한달간"
                    : "1년간"
                }}의 {{ selectedGenre }} 장르의 단행본에 집계된 데이터가
                없습니다.
              </div>
              <div v-for="(book, index) in data?.단행본?.slice(0, 20)">
                <div class="flex flex-col w-40">
                  <div class="shrink-0">
                    <img
                      class="h-56 object-cover overflow-hidden rounded-md"
                      :src="book?.img"
                    />
                  </div>
                  <div class="grow-[1]">
                    <div>
                      <div class="font-bold">{{ index + 1 }} 위</div>
                    </div>
                    <div>
                      <div
                        class="font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"
                      >
                        {{ book?.kr }} {{ book?.booknum }}
                      </div>
                    </div>
                    <div class="text-xs">
                      판매량 {{ book?.sales?.toLocaleString() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
