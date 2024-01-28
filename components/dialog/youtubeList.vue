<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  wiki: any;
  selectedBook: any;
}>();

const youTube = useYouTube();

const emit = defineEmits(["update:open"]);

function listDelete(video_id: string) {
  youTube.value = youTube.value.filter(
    (item: any) => item.video_id !== video_id
  );
}
</script>

<template>
  <Dialog :open="open" @update:open="emit('update:open')">
    <DialogContent class="w-5/6 max-h-96 overflow-y-scroll">
      <div class="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>재생목록</DialogTitle>
          <DialogDescription> 현재 등록한 재생 목록입니다. </DialogDescription>
        </DialogHeader>
        <div class="flex flex-col gap-1">
          <div v-for="(data, index) in youTube">
            <Card class="p-2 flex flex-row justify-between gap-2 items-center">
              <div class="grow-[1]">
                <div class="text-sm font-bold flex gap-2">
                  <div class="flex gap-2">
                    <div>
                      {{ data?.title }}
                    </div>
                  </div>
                  <div class="flex gap-1 font-normal">
                    <div>조회수</div>
                    <div>
                      {{ data?.view_count }}
                    </div>
                  </div>
                </div>
                <div class="text-sm text-neutral-400">
                  {{ data?.kr }} {{ data?.op_ed }} {{ data?.season }}기
                  {{ data?.cool }}쿨
                </div>
              </div>
              <div class="shrink-0">
                <Button
                  size="sm"
                  variant="secondary"
                  @click="listDelete(data.video_id)"
                >
                  <font-awesome-icon :icon="['fas', 'xmark']" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
