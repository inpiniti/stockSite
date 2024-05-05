<script lang="ts" setup>
const props = defineProps<{
  board: any;
}>();
const emit = defineEmits(["click"]);

const onClickBoardDetail = (board: any) => {
  emit("click", board);
};
</script>
<template>
  <div
    class="flex rounded-lg overflow-hidden hover:bg-neutral-100 gap-2 cursor-pointer border"
    @click="onClickBoardDetail(board)"
  >
    <div class="w-full p-4">
      <div class="flex gap-2">
        <div class="flex flex-col gap-2 grow-[0] w-full">
          <div class="flex gap-2 items-center text-sm">
            <Badge
              class="overflow-hidden whitespace-nowrap overflow-ellipsis max-w-24"
              >{{ board.kr }}</Badge
            >
            <div class="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {{ (board as any).writer }}
            </div>
            <div>·</div>
            <div>
              {{ timeAgo((board as any).date) }}
            </div>
          </div>
          <div style="pointer-events: none">
            <div class="font-semibold line-clamp-2">
              {{ (board as any).title }}
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-1">
              <Badge variant="secondary">{{ board.type }}</Badge>
              <Badge variant="outline">{{ board.subject }}</Badge>
            </div>
            <div class="flex gap-2 text-xs items-center justify-end shrink-0">
              <div
                class="flex gap-1 items-center"
                style="pointer-events: auto"
                @click="onClickBoardDetail(board)"
              >
                <font-awesome-icon :icon="['far', 'comment']" />
                <div class="text-sm">
                  {{ (board as any).number }}
                </div>
              </div>
              <div class="flex gap-1 items-center">
                <font-awesome-icon :icon="['far', 'eye']" />
                <div class="text-sm">
                  {{ (board as any).count }}
                </div>
              </div>
              <div class="flex gap-1 items-center">
                <font-awesome-icon :icon="['fas', 'star']" />
                <div class="text-sm">
                  {{ (board as any).recommend }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
