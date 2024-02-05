<script setup lang="ts">
const books = ref<any[]>([]);

onMounted(async () => {
  const { data, error } = await useSupabase().value.from("board").select();
  if (error) {
    console.error(error);
  } else {
    books.value = data ?? [];
  }
});
</script>
<template>
  <div>
    <h1>게시판</h1>
    <ul class="grid grid-cols-3 gap-4">
      <li v-for="book in books" :key="book.id">
        <img
          class="rounded-md h-72 w-full object-cover"
          :src="replaceDomain(book.link).replace(/co\.kr/g, 'com')"
        />
        <div>
          {{ book.title }}
        </div>
        <div class="flex text-xs text-neutral-400 gap-2">
          <div>
            <font-awesome-icon :icon="['fas', 'user']" /> {{ book.writer }}
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'calendar-check']" />
            {{ book.date }}
          </div>
        </div>
        <div class="flex text-xs text-neutral-400 gap-2">
          <div>
            <font-awesome-icon :icon="['far', 'comment']" /> {{ book.number }}
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'eye']" /> {{ book.count }}
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'star']" /> {{ book.recommend }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
