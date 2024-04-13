<template>
  <ScrollArea class="flex h-full">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <TransitionGroup name="list" appear>
        <button v-for="cover of boards" :key="cover.id">
          <div class="flex border rounded-lg p-2 hover:bg-neutral-100 gap-2">
            <div class="flex w-full flex-col gap-1">
              <div class="flex gap-2 justify-between items-center">
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.kr }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.title }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.num }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.number }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.recommend }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.subject }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.writer }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.content }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.count }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.date }}
                </div>
              </div>
            </div>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>
<script setup lang="ts">
import { format } from "date-fns";

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

async function searchBooks() {
  let query = useSupabase()
    .value.from("board")
    .select()
    .neq("link", null)
    .range(
      (server_page.value - 1) * server_limit.value,
      server_page.value * server_limit.value - 1
    );

  let count_query = useSupabase()
    .value.from("board")
    .select("*", { count: "exact", head: true })
    .neq("link", null);

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
    query = query
      .gte("date", `${_date}T00:00:00`)
      .lte("date", `${_date}T23:59:59`);

    count_query = count_query
      .gte("date", `${_date}T00:00:00`)
      .lte("date", `${_date}T23:59:59`);
  }

  const { data, error } = await query.order(selectedOrderBy.value, {
    ascending: false,
  });
  if (error) {
    console.error(error);
  } else {
    boards.value = data ?? [];
    pageBoards.value = [
      ...pageBoards.value,
      ...boards.value.slice(0, page.value * PAGE),
    ];

    //gridReorder();
  }
  const {
    data: countData,
    error: countError,
    status,
    count,
  } = await count_query;
  if (countError) {
    console.error(countError);
  } else {
    console.log(countData);
    console.log(status);
    console.log(count);
    totalPage.value = count || 0;
  }
}
</script>