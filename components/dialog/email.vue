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
        <DialogTitle>이메일 양식</DialogTitle>
        <DialogDescription>
          만든이에게 궁금한점이나 질문사항이 있으시면 이메일을 보내주세요.
          <Badge variant="outline">연락처</Badge>,
          <Badge variant="outline">이메일 주소</Badge>는 필수는 아니지만, 답변을
          원하시면 남겨주세요. (구직도 원합니다 ^^;;)
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="title" class="text-right"> 제목 </Label>
          <Input
            v-model="data.title"
            placeholder="궁금한 사항이 있습니다."
            class="col-span-3"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="content" class="text-right"> 내용 </Label>
          <Textarea
            v-model="data.content"
            placeholder="Type your message here."
            class="col-span-3"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="tel" class="text-right"> 연락처 </Label>
          <Input
            v-model="data.tel"
            placeholder="010-000-0000"
            class="col-span-3"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right"> 이메일 주소 </Label>
          <Input
            v-model="data.email"
            placeholder="inpiniti@gmail.com"
            class="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button @click="email"> 이메일 보내기 </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
