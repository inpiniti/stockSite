<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  wiki: any;
}>();

const emit = defineEmits(["update:open"]);
</script>

<template>
  <Dialog :open="open" @update:open="emit('update:open')">
    <DialogContent class="w-full max-w-7xl h-5/6 overflow-y-scroll">
      <div class="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>만화 상세</DialogTitle>
          <DialogDescription>
            해당 내용은 나무위키에서 발췌한 것입니다.
          </DialogDescription>
        </DialogHeader>

        <div v-for="(data, index) in wiki" class="flex flex-col gap-1">
          <div class="text-3xl font-bold">
            {{ index + 1 }}. {{ data?.title }}
          </div>
          <div>{{ data?.content }}</div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
