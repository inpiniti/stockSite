<template>
  <ScrollArea class="flex h-full">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <TransitionGroup name="list" appear>
        <button v-for="cover of coverList" :key="cover.id">
          <div class="flex border rounded-lg p-2 hover:bg-neutral-100 gap-2">
            <img :src="cover.cover_image" class="h-28" />
            <div class="flex w-full flex-col gap-1">
              <div class="flex gap-2 justify-between items-center">
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ cover.kr }} {{ cover.booknum }}
                </div>
                <div class="shrink-0 text-xs">{{ cover.created_at }}</div>
              </div>
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
