<script setup>
if (process.client) {
  useDarkmode().setDarkmode();
}
onMounted(() => {
  fetchBooks();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
