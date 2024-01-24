<!-- TODO 게시판 상세 팝업으로 구현 -->
<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();
const emit = defineEmits(["update:open"]);
const boardDetail = useState<any>("boardDetail");
const data = ref<any>(null);

watch(
  () => boardDetail.value,
  async () => {
    const { data: newData } = await useFetch(
      `/api/dcinside/${boardDetail.value.dc}/${boardDetail.value.num}?kr=${boardDetail.value.kr}`
    );

    data.value = newData.value;
    if (data.value?.comment?.comments) {
      data.value.comment.comments = data.value?.comment?.comments.filter(
        (comment: any) => {
          return comment.no != 0;
        }
      );
    }
  }
);
</script>

<template>
  <Dialog @update:open="emit('update:open')" :open="isOpen">
    <DialogContent class="w-5/6 max-h-192 overflow-y-scroll">
      <DialogHeader>
        <DialogTitle>[짤] 범순이 뇌절인건 알지만... </DialogTitle>
        <DialogDescription>
          <div class="flex justify-between">
            <div>드로우!항복 2024.01.23 22:33:14</div>
            <div>
              조회 {{ boardDetail?.count }} 추천
              {{ boardDetail?.recommend }} 댓글
              {{ data?.comment.total_cnt }}
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <img
          v-for="img in data?.images"
          :src="img.replace(/dcimg7/g, 'images').replace(/co\.kr/g, 'com')"
        />
        {{ data?.content }}
      </div>
      <div class="flex flex-col gap-3" v-if="data?.comment.total_cnt > 0">
        <div>전체 댓글 {{ data?.comment.total_cnt }}개</div>
        <div
          v-for="comment in data?.comment.comments"
          class="flex flex-col gap-1"
        >
          <p class="text-xs">{{ comment.user_id }}({{ comment.name }})</p>
          <div class="flex items-end gap-1">
            <div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit">
              <div
                v-if="comment.memo.includes('src')"
                v-html="
                  comment.memo
                    .replace(/dcimg5/g, 'images')
                    .replace(/co\.kr/g, 'com')
                "
              ></div>
              <p v-else>{{ comment.memo }}</p>
            </div>
            <p class="text-xs">{{ comment.reg_date }}</p>
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
      </div>
    </DialogContent>
  </Dialog>
</template>
