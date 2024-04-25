<script setup lang="ts">
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import type { Board } from "@/composables/useBoard";

definePageMeta({
  layout: "mail",
});

const board = ref<Board>(<Board>{});

const onSubmit = () => {
  writeBoard(board.value);
};

const editor = ref();
const editorConfig = ref({
  toolbar: ["bold", "italic", "link", "bulletedList", "numberedList", "blockQuote", "imageUpload"],
  image: {
    toolbar: ["imageTextAlternative", "|", "imageStyle:alignLeft", "imageStyle:full", "imageStyle:alignRight"],
    styles: ["full", "alignLeft", "alignRight"],
  },
  ckfinder: {
    uploadUrl: "/api/image/upload", // 여기에 이미지를 업로드할 서버 측 엔드포인트를 지정하세요.
  },
});

onMounted(async () => {
  await nextTick();

  try {
    const rawEditor = await ClassicEditor.create(editor.value, editorConfig.value)
      .then((editor) => {
        if (!(editor instanceof ClassicEditor)) {
          throw new Error("editor is not an instance of ClassicEditor");
        }
        return editor;
      })
      .catch((error) => {
        console.error(error);
      });

    editor.value = markRaw(toRaw(rawEditor)); // 수정된 부분

    // editor.value.ready를 기다릴 필요가 없습니다.
    if (typeof editor.value.getData !== "function") {
      throw new Error("getData is not a function");
    }

    editor.value.model.document.on("change:data", () => {
      console.log("에디터 내용이 변경될떄 마다 실행");
      console.log(editor.value);
      console.log(editor.value.getData);
      console.log(editor.value.getData());
      board.value.content = editor.value.getData();
    });
  } catch (error) {
    console.error(error); // 이벤트 핸들러 등록 중에 발생하는 오류 출력
  }
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
      <Input v-model="board.title" placeholder="제목을 입력해주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">작성자</h5>
      <Input v-model="board.writer" placeholder="작성자를 작성해주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">도서</h5>
      <Input v-model="board.kr" placeholder="도서를 선택해 주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">말머리</h5>
      <Input v-model="board.subject" placeholder="말머리를 선택해 주세요."></Input>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">내용</h5>
      <div ref="editor"></div>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-sm font-semibold text-neutral-600">Image</h5>
      <Input v-model="board.link" placeholder="Select an email"></Input>
    </div>
    <div class="flex gap-2"><Button size="sm" @click="onSubmit">등록</Button><Button size="sm" variant="outline">취소</Button></div>
  </div>
</template>
