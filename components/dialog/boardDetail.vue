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
        <DialogTitle>{{ boardDetail?.title }}</DialogTitle>
        <DialogDescription>
          <div class="flex justify-between">
            <div>{{ boardDetail?.writer }} {{ boardDetail?.date }}</div>
            <div>
              조회 {{ boardDetail?.count }} 추천
              {{ boardDetail?.recommend }} 댓글
              {{ data?.comment.total_cnt }}
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <!-- https://dcimg8.dcinside... 이런식으로 주소가 되어 있는데, https:// ~ .dcinside 이 사이의 dcimg8 이 문자만 'images' 이걸로 바꾸고 싶어 -->
        <img
          v-for="img in data?.images"
          :src="replaceDomain(img).replace(/co\.kr/g, 'com')"
        />
        {{ data?.content }}
      </div>
      <div class="flex flex-col gap-3" v-if="data?.comment.total_cnt > 0">
        <div>전체 댓글 {{ data?.comment.total_cnt }}개</div>
        <div
          v-for="comment in data?.comment.comments"
          class="flex flex-col gap-1"
          :class="{ 'ml-4': comment.depth == 1 }"
        >
          <p class="text-xs">{{ comment.user_id }}({{ comment.name }})</p>
          <div class="flex items-end gap-1">
            <div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit">
              <div
                v-html="replaceDomain(comment.memo).replace(/co\.kr/g, 'com')"
              ></div>
            </div>
            <p class="text-xs">{{ comment.reg_date }}</p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
