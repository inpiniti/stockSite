<script setup>
definePageMeta({
  layout: "mail",
});
const verifiedEmails = ref(["m@example.com", "m@google.com", "m@support.com"]);

const onSubmit = (values) => {
  toast({
    title: "You submitted the following values:",
    description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2))),
  });
};
</script>
<template>
  <div class="p-4 flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium">게시판 글작성</h3>
      <p class="text-sm text-muted-foreground">주술회전 게시판 입니다. 다른 게시판에 글을 작성하고자 한다면 다른 게시판을 선택해 주세요.</p>
    </div>
    <Separator />
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">Username</h5>
      <Input placeholder="shadcn"></Input>
      <p class="text-sm text-muted-foreground">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">Email</h5>
      <Input placeholder="Select an email"></Input>
      <p class="text-sm text-muted-foreground">You can manage verified email addresses in your email settings.</p>
    </div>
    <div class="flex gap-2"><Button size="sm">Update profile</Button><Button size="sm" variant="outline">Cancel</Button></div>
  </div>
</template>
