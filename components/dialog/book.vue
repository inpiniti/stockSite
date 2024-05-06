<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

const open = useState<boolean>("bookOpen");
const loading = ref(false);
const coverImageUploadLoading = ref(false);

const emit = defineEmits(["update:open"]);

async function ok() {
  loading.value = true;

  await supabase
    .from("book")
    .update({
      kr: useBook().selected.value.kr,
      img: useBook().selected.value.img,
    })
    .eq("jp", useBook().selected.value.jp);

  // kr 로 book_info 를 조회한 후 있으면 update
  // 없으면 insert
  const { data, error } = await supabase
    .from("book_info")
    .select("*")
    .eq("kr", useBook().selected.value.kr);

  if (data && data.length > 0) {
    await supabase
      .from("book_info")
      .update({
        author: useBook().selected.value.author,
        publisher: useBook().selected.value.publisher,
        description: useBook().selected.value.description,
        summary: useBook().selected.value.summary,
        dc: useBook().selected.value.dc,
        namu: useBook().selected.value.namu,
      })
      .eq("kr", useBook().selected.value.kr);
  } else {
    await supabase.from("book_info").insert([
      {
        kr: useBook().selected.value.kr,
        author: useBook().selected.value.author,
        publisher: useBook().selected.value.publisher,
        description: useBook().selected.value.description,
        summary: useBook().selected.value.summary,
        dc: useBook().selected.value.dc,
        namu: useBook().selected.value.namu,
      },
    ]);
  }

  await fetchBooks();
  await fetchBookInfoList();

  loading.value = false;
  open.value = false;

  emit("update:open");
}

async function coverImageUpload() {
  coverImageUploadLoading.value = true;
  try {
    await fetch(`/api/namuWiki/${useBook().selected.value.namu}`);
    await fetchCoverList();
  } catch (error) {
    console.error(error);
  } finally {
    coverImageUploadLoading.value = false;
  }
}
</script>

<template>
  <Dialog :open="open" @update:open="open = false">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>만화책 수정</DialogTitle>
        <DialogDescription>
          만화책의 한국어 제목 및 책의 이미지를 수정할 수 있습니다.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right"> 일본어 제목 </Label>
          <Input
            id="name"
            class="col-span-3"
            v-model="useBook().selected.value.jp"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right"> 한국어 제목 </Label>
          <Input
            id="name"
            class="col-span-3"
            v-model="useBook().selected.value.kr"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right"> 이미지 url </Label>
          <Input
            id="username"
            class="col-span-3"
            v-model="useBook().selected.value.img"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> 나무위키 url </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.namu"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> dcinside id </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.dc"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> 저자 </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.author"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> 출판사 </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.publisher"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> 요약 </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.description"
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="namu" class="text-right"> 줄거리 </Label>
          <Input
            id="namu"
            class="col-span-3"
            v-model="useBook().selected.value.summary"
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="secondary"
          @click="coverImageUpload"
          :disabled="!useBook().selected.value.namu"
        >
          {{ coverImageUploadLoading ? "Uploading..." : "Cover Image Upload" }}
        </Button>
        <Button @click="ok">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
