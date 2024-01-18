<script setup lang="ts">
import { columns } from "./columns";

const runtimeConfig = useRuntimeConfig();

const { data, error, pending, execute, refresh } = await useFetch(
  `${runtimeConfig.public.apiBase}/db/financials`
);

const financials = computed(() => {
  if (data.value) {
    return data.value;
  }
  return [];
});
</script>
<template>
  <div class="p-4">
    <CommonHeader
      title="주식 데이터"
      description="수집된 주식의 데이터를 보여줍니다."
    />
    <PagesBookDataTable :columns="columns" :data="financials" />
  </div>
</template>
