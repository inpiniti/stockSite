<script setup>
definePageMeta({
  layout: "mail",
});

onMounted(async () => {
  await useSupabase().value.from("book").select("kr, dc", { distinct: true }).neq("dc", null);
});
</script>
<template>index</template>
