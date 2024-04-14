<template>
  <ScrollArea class="flex h-full">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <div v-for="cover of coverList" :key="cover.id">
        <div class="flex border rounded-lg p-2 hover:bg-neutral-100 gap-2">
          <div class="h-32 w-24 rounded-md overflow-hidden relative">
            <img
              :src="cover.cover_image"
              class="min-w-full min-h-full object-cover"
            />
          </div>
          <div class="flex flex-col text-xs gap-1">
            <div class="text-lg">{{ cover.kr }} {{ cover.booknum }}</div>
            <div class="flex gap-1 items-center">
              <div class="text-sm font-bold">5,400원</div>
              <span class="text-neutral-400">배송 무료</span>
            </div>
            <div
              class="text-neutral-400 ring-1 ring-neutral-400 w-fit rounded-md px-2 py-1"
            >
              오늘출발
            </div>
            <div class="flex gap-2 items-center">
              <div class="text-neutral-400">inpiniti</div>
              <span
                class="text-white font-semibold px-2 bg-green-400 rounded-full"
                >naver pay</span
              >
            </div>
            <div class="flex gap-1 overflow-ellipsis">
              <div class="text-neutral-400 font-thin">배송</div>
              오늘
              <div class="text-neutral-400">15:00</div>
              까지 주문 시
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollArea>
</template>
<script setup lang="ts">
const coverList = useCoverList();
</script>
