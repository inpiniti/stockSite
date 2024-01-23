<!-- TODO 게시판 상세 팝업으로 구현 -->
<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();
const emit = defineEmits(["update:open"]);
const data = ref({
  title: "",
  content: "",
  tel: "",
  email: "",
});
</script>

<template>
  <Dialog @update:open="emit('update:open')" :open="isOpen">
    <DialogContent class="w-5/6">
      <DialogHeader>
        <DialogTitle>[짤] 범순이 뇌절인건 알지만...</DialogTitle>
        <DialogDescription>
          <div class="flex justify-between">
            <div>드로우!항복 2024.01.23 22:33:14</div>
            <div>조회 53 추천 1 댓글 7</div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">이미지 멈출수가 없어... 악마의 삶...</div>
      <div class="flex flex-col gap-3">
        <div>전체 댓글 7개</div>
        <div class="flex flex-col gap-1">
          <p class="text-xs">ㅇㅇ(219.241)</p>
          <div class="flex items-end gap-1">
            <div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit">
              <p>더 해줘</p>
            </div>
            <p class="text-xs">01.23 22:33:47</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-xs">ㅇㅇ(219.241)</p>
          <div class="flex items-end gap-1">
            <p class="text-xs">01.23 22:33:47</p>
            <div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit">
              <p>더 해줘</p>
            </div>
          </div>
        </div>
        <div>드로우항복 ㄴ 할수 있어요. 01.23 22:34:33</div>
      </div>
    </DialogContent>
  </Dialog>
</template>
