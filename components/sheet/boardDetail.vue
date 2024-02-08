<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  reply: any;
}>();

const emit = defineEmits(["update:open"]);
</script>
<template>
  <Sheet :open="open" @update:open="emit('update:open')">
    <SheetContent side="bottom" class="p-2">
      <SheetHeader>
        <SheetTitle>댓글</SheetTitle>
      </SheetHeader>
      <div class="flex flex-col gap-4 max-h-160 overflow-y-scroll">
        <div
          v-for="comment in reply.comment.comments"
          class="flex flex-col gap-1"
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
    </SheetContent>
  </Sheet>
</template>
