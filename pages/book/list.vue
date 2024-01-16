<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://etnyrefdmddqiuatswhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
);

const book = ref<any>({
  data: [],
  error: "",
});

const clicked = useState("clicked", () => false);

onMounted(() => {
  select();
});

watch(clicked, () => {
  console.log("clicked");
  select();
});

async function select(date?: string) {
  try {
    if (date) {
      book.value = await supabase.from("book").select().eq("date", date);
    } else {
      book.value = await supabase.from("book").select();
    }
  } catch (error) {
    console.error(error);
  }
}

function allSelect() {
  select();
}

function comboselect(value: string) {
  select(value);
}

import { columns } from "./columns";
</script>
<template>
  <div class="p-4 flex flex-col gap-4">
    <CommonHeader
      title="List"
      description="책 리스트를 볼 수 있으며, 책 편집을 하는 화면 입니다."
    />
    <div class="flex gap-2">
      <Button :disabled="book.data.length != 0">수집하기</Button>
      <Button variant="secondary" @click="allSelect">전체 조회</Button>
      <PagesBookCombobox @select="comboselect" />
    </div>
    <PagesBookDataTable :columns="columns" :data="book.data" />
  </div>
</template>
