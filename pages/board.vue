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
  <div class="p-4">
    <div>
      <h3 class="text-lg font-medium">Profile</h3>
      <p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
    </div>
    <Separator class="my-4" />
    <div></div>
  </div>
</template>
