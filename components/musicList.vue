<template>
  <ScrollArea class="flex h-full">
    <div class="flex-1 flex flex-col gap-2 p-2">
      <TransitionGroup name="list" appear>
        <button v-for="music of musicList" :key="music.id">
          <div class="flex border rounded-lg p-2 hover:bg-neutral-100 gap-2">
            <div class="flex w-full flex-col gap-1">
              <div class="flex gap-2 justify-between items-center">
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ music.kr }}
                </div>
                <div class="grow-[0] text-left font-semibold text-sm">
                  {{ music.title }} {{ music.season }}기 {{ music.cool }}쿨
                </div>
              </div>
            </div>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>
<script setup lang="ts">
const musicList = useMusic();
</script>
