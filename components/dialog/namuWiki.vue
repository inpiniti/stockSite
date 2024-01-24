<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  wiki: any;
  selectedBook: any;
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

        <div class="flex gap-4">
          <img
            :src="selectedBook.img"
            class="h-56 w-fit object-cover overflow-hidden rounded-md"
          />
          <div class="flex flex-col gap-4">
            <div>
              <div class="text-sm font-bold">kr</div>
              <div>
                {{ selectedBook.kr }}
              </div>
            </div>
            <div>
              <div class="text-sm font-bold">jp</div>
              <div>{{ selectedBook.jp }}</div>
            </div>
            <div v-if="selectedBook.dc" class="flex flex-col gap-1">
              <div class="text-sm font-bold">게시판으로</div>
              <Button
                variant="outline"
                @click="navigateTo(`/book/board/${selectedBook.kr}`)"
              >
                {{ selectedBook.kr }} 게시판으로 이동
              </Button>
            </div>
          </div>
        </div>

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
