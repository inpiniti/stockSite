<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="space-y-1">
      <h2 class="text-2xl font-semibold tracking-tight">{{ title }}</h2>
      <p class="text-sm text-muted-foreground">
        {{ description }}
      </p>
    </div>
  </div>
</template>
