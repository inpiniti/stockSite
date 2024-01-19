<script setup>
if (process.client) {
  useDarkmode().setDarkmode();
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
