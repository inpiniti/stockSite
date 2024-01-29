<script setup>
if (process.client) {
  useDarkmode().setDarkmode();
}
onMounted(() => {
  fetchBooks();
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
