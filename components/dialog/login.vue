<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  onOpen: () => void;
}>();
async function kakao() {
  const { data: kakao, error } = await useSupabase().value.auth.signInWithOAuth(
    {
      provider: "kakao",
    }
  );
}
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <Dialog :open="isOpen" @update:open="onOpen">
    <DialogContent class="w-fit">
      <DialogHeader class="space-y-1">
        <DialogTitle class="text-2xl"> 로그인 </DialogTitle>
        <DialogDescription>
          인피니티 코믹스는 카카오 로그인을 지원합니다.
        </DialogDescription>
      </DialogHeader>
      <Button variant="outline" @click="kakao"> Kakao login </Button>
    </DialogContent>
  </Dialog>
</template>
