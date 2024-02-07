<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

const books = ref<any[]>([]);
const page = ref(1);
const pageBooks = computed(() => {
  return books.value.slice(0, page.value * 20);
});

onMounted(async () => {
  const { data, error } = await useSupabase()
    .value.from("board")
    .select()
    .neq("link", null)
    .order("date", { ascending: false });
  if (error) {
    console.error(error);
  } else {
    books.value = data ?? [];
  }
});
function infiniteHandler($state: any) {
  page.value++;
  $state.loaded();
}
</script>
<template>
  <div>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 overflow-hidden"
    >
      <div v-for="book in pageBooks" :key="book.id" class="w-screen">
        <div class="relative w-full">
          <div class="absolute z-10 p-2 text-white">
            <div class="font-bold">
              {{ book.title }}
            </div>
            <div class="text-sm">
              {{ book.writer }}
            </div>
          </div>
          <img
            class="lg:rounded-md md:h-72 w-full object-fill"
            :src="
              book.link
                ? replaceDomain(book.link).replace(/co\.kr/g, 'com')
                : ''
            "
          />
          <div
            class="absolute top-0 left-0 w-full h-full lg:rounded-md"
            style="
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%
              );
            "
          ></div>
        </div>
        <div class="px-2 flex flex-col w-full">
          <div class="">
            <div class="line-clamp-3 overflow-hidden">
              {{ book.content }}
            </div>
            <div class="flex text-xs text-neutral-400 gap-2">
              <div>
                <font-awesome-icon :icon="['far', 'calendar-check']" />
                {{ book.date }}
              </div>
            </div>
            <div class="flex text-xs text-neutral-400 gap-2">
              <div>
                <font-awesome-icon :icon="['far', 'comment']" />
                {{ book.number }}
              </div>
              <div>
                <font-awesome-icon :icon="['far', 'eye']" /> {{ book.count }}
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'star']" />
                {{ book.recommend }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InfiniteLoading v-if="pageBooks.length > 0" @infinite="infiniteHandler" />
  </div>
</template>
