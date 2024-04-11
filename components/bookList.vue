<template>
  <ScrollArea class="flex grow-[0]">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <TransitionGroup name="list" appear>
        <button v-for="cover of coverList" :key="cover.id">
          <div class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-100">
            <div class="flex gap-2 justify-between items-center">
              <div class="grow-[0] text-left font-semibold text-sm">{{ cover.kr }} {{ cover.booknum }}</div>
              <div class="shrink-0 text-xs">{{ cover.created_at }}</div>
            </div>

            <div class="text-xs text-left">
              {{ cover.cover_image }}
            </div>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>
<script setup lang="ts">
const coverList = useCoverList();
</script>
