<script setup>
if (process.client) {
  document.documentElement.classList.add("dark");
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
