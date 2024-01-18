<script setup lang="ts">
const isOpen = ref(false);
const data = ref({
  title: "",
  content: "",
  tel: "",
  email: "",
});

function onOpen() {
  isOpen.value = !isOpen.value;
}

async function email() {
  const {
    data: result,
    pending,
    error,
    refresh,
  } = await useFetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data.value),
    onResponse({ request, response, options }) {
      console.log(response);
    },
  });
}

defineExpose({ onOpen });
</script>

<template>
  <Dialog @update:open="onOpen" :open="isOpen">
    <DialogContent class="w-5/6">
      <DialogHeader>
        <DialogTitle>글쓰기</DialogTitle>
        <DialogDescription>
          애니메이션에 대한 글을 남겨주세요.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="title" class="text-right"> 제목 </Label>
          <Input v-model="data.title" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="content" class="text-right"> 내용 </Label>
          <Textarea v-model="data.content" class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button @click="email"> 글 작성 </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
