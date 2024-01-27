<script setup>
if (process.client) {
  useDarkmode().setDarkmode();
}
onMounted(() => {
  fetchBooks();
  getGenre();
});
</script>
<template>
  <Toaster />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
