<template>
  <ScrollArea class="flex h-full">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <TransitionGroup name="list" appear>
        <div class="flex border rounded-lg px-4 py-2 hover:bg-neutral-100 cursor-pointer items-center gap-2"><font-awesome-icon :icon="['fas', 'pen']" /> 글 쓰기</div>
        <div v-for="(board, index) in boards" :key="index">
          <div class="flex rounded-lg overflow-hidden hover:bg-neutral-100 gap-2 cursor-pointer">
            <div class="relative w-full">
              <div class="absolute z-10 p-2 text-white w-2/3" style="pointer-events: none">
                <div class="font-bold line-clamp-2">
                  {{ (board as any).title }}
                </div>
                <div class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {{ (board as any).writer }}
                </div>
              </div>
              <!-- 이미지 옆으로 넘길수 있도록 처리 -->
              <Carousel>
                <CarouselContent>
                  <CarouselItem v-for="(img, index) in imgLinkParse((board as any).link)" :key="index">
                    <div class="relative h-full">
                      <NuxtImg loading="lazy" class="md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down" :src="replaceDomain(img).replace(/co\.kr/g, 'com')" />
                      <Badge class="absolute top-3 right-3 bg-opacity-50 bg-black">
                        {{ index + 1 }} /
                        {{ imgLinkParse((board as any).link).length }}
                      </Badge>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div
                class="absolute top-0 left-0 w-full h-full md:rounded-md"
                style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5)); pointer-events: none"
              ></div>

              <div class="p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden" style="pointer-events: none">
                <div class="flex gap-4 items-end flex-1 overflow-hidden">
                  <NuxtImg v-if="KR_IMG_BOOKS[(board as any).kr]" loading="lazy" class="h-16 rounded-md object-cover shrink-0" :src="KR_IMG_BOOKS[(board as any).kr]" />
                  <div class="flex-col flex-1 overflow-hidden">
                    <div class="line-clamp-2">
                      {{ (board as any).content }}
                    </div>
                    <div class="flex text-xs gap-2">
                      <div class="font-normal">
                        {{ timeAgo((board as any).date) }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2 text-xl items-center shrink-0">
                  <div class="flex flex-col gap-1 items-center" style="pointer-events: auto" @click="onClickBoardDetail(board)">
                    <font-awesome-icon :icon="['far', 'comment']" />
                    <div class="text-sm">
                      {{ (board as any).number }}
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 items-center">
                    <font-awesome-icon :icon="['far', 'eye']" />
                    <div class="text-sm">
                      {{ (board as any).count }}
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 items-center">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <div class="text-sm">
                      {{ (board as any).recommend }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>
<script setup lang="ts">
import { format } from "date-fns";

const KR_IMG_BOOKS = createCoverImageObject();

const PAGE = 10;

const page = ref(1);
const server_page = ref(1);
const server_limit = ref(100);
const totalPage = ref(0);

const selectedSubject = ref();
const date = ref<Date>();
const selectedBook = ref();
const selectedOrderBy = ref("date");
const pageBoards = ref<any>([]);

const boards = ref<any[]>([]);

onMounted(() => {
  searchBooks();
});

// 이미지가 배열 스트링으로 되어 있을 텐데 처리
function imgLinkParse(link: string) {
  // link 문자열에 []가 없으면 []로 감싸주고
  if (link.includes("[")) {
    return JSON.parse(link);
  } else {
    let arr: string[] = [];
    arr.push(link);
    return arr;
  }
}

async function searchBooks() {
  let query = useSupabase()
    .value.from("board")
    .select()
    .neq("link", null)
    .range((server_page.value - 1) * server_limit.value, server_page.value * server_limit.value - 1);

  let count_query = useSupabase().value.from("board").select("*", { count: "exact", head: true }).neq("link", null);

  // .eq("kr", kr)
  // if (kr) {
  //   // kr이 존재하는 경우에만 .eq("kr", kr)를 적용
  //   query = query.eq("kr", kr);
  //   count_query = count_query.eq("kr", kr);
  // }

  if (selectedSubject.value && selectedSubject.value != "all") {
    query = query.ilike("subject", `%${selectedSubject.value}%`);
    count_query = count_query.ilike("subject", `%${selectedSubject.value}%`);
  }

  if (selectedBook.value && selectedBook.value != "all") {
    query = query.eq("kr", selectedBook.value);
    count_query = count_query.eq("kr", selectedBook.value);
  }

  if (date.value) {
    console.log(date.value);
    const _date = format(date.value, "yyyy-MM-dd");
    query = query.gte("date", `${_date}T00:00:00`).lte("date", `${_date}T23:59:59`);

    count_query = count_query.gte("date", `${_date}T00:00:00`).lte("date", `${_date}T23:59:59`);
  }

  const { data, error } = await query.order(selectedOrderBy.value, {
    ascending: false,
  });
  if (error) {
    console.error(error);
  } else {
    boards.value = data ?? [];
    pageBoards.value = [...pageBoards.value, ...boards.value.slice(0, page.value * PAGE)];

    //gridReorder();
  }
  const { data: countData, error: countError, status, count } = await count_query;
  if (countError) {
    console.error(countError);
  } else {
    console.log(countData);
    console.log(status);
    console.log(count);
    totalPage.value = count || 0;
  }
}

async function onClickBoardDetail(board: any) {
  // console.log('onClickBoardDetail');
}
</script>
