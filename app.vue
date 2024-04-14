<script setup>
if (process.client) {
  useDarkmode().setDarkmode();
}
onMounted(() => {
  fetchBooks();
  fetchCoverList();
  fetchBookInfoList();
  getGenre();
  getMusic();
});
</script>
<template>
  <NuxtLayout>
    <Toaster />
    <NuxtPage />
  </NuxtLayout>
</template>
