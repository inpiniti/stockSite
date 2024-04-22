<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

definePageMeta({
  layout: "mail",
});
const verifiedEmails = ref(["m@example.com", "m@google.com", "m@support.com"]);

const content = ref("");

const onSubmit = (values) => {
  toast({
    title: "You submitted the following values:",
    description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2))),
  });
};

const editor = ref(null);
const editorConfig = ref({
  toolbar: ["bold", "italic", "link", "bulletedList", "numberedList", "blockQuote"],
});

onMounted(async () => {
  await nextTick();

  editor.value = await ClassicEditor.create(editor.value, {
    toolbar: ["bold", "italic", "link", "bulletedList", "numberedList", "blockQuote"],
  });

  editor.value.ready.then(() => {
    try {
      editor.value.model.document.on("change:data", () => {
        console.log("test");
        content.value = editor.value.getData();
      });
    } catch (error) {
      console.error(error); // 이벤트 핸들러 등록 중에 발생하는 오류 출력
    }
  });
});
</script>
<template>
  <div class="p-4 flex flex-col gap-6">
    <div>
      <h3 class="text-lg font-medium">게시판 글작성</h3>
      <p class="text-sm text-muted-foreground">주술회전 게시판 입니다. 다른 게시판에 글을 작성하고자 한다면 다른 게시판을 선택해 주세요.</p>
    </div>
    <Separator />
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">제목</h5>
      <Input placeholder="제목을 입력해주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">작성자</h5>
      <Input placeholder="작성자를 작성해주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">도서</h5>
      <Input placeholder="도서를 선택해 주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">말머리</h5>
      <Input placeholder="말머리를 선택해 주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">내용</h5>
      <div ref="editor"></div>
      <Input placeholder="내용을 입력해주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">Image</h5>
      <Input placeholder="Select an email"></Input>
    </div>
    <div class="flex gap-2"><Button size="sm">등록</Button><Button size="sm" variant="outline">취소</Button></div>
  </div>
</template>
