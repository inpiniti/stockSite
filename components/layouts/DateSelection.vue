<script setup lang="ts">
import moment from "moment";

const emit = defineEmits(["change"]);

const type = ref("week");
const date = ref(moment());

function onChange() {
  emit("change", {
    type: type.value,
    date: date.value,
  });
}

// type 값에 따라 날짜 포맷을 변경하는 computed 속성을 생성합니다.
const formattedDate = computed(() => {
  if (type.value === "month") {
    return date.value.format("YYYY.MM"); // '2024.01' 형식으로 변환합니다.
  } else if (type.value === "year") {
    return date.value.format("YYYY"); // '2024' 형식으로 변환합니다.
  } else if (type.value === "week") {
    return date.value.format("YYYY.MM.DD"); // '2024.01.01' 형식으로 변환합니다.
  }
});

// type 에 따라서 날짜 변경
function down() {
  if (type.value === "week") {
    date.value = date.value.clone().subtract(1, "weeks"); // 주를 1주 감소시킵니다.
  } else if (type.value === "month") {
    date.value = date.value.clone().subtract(1, "months"); // 월을 1월 감소시킵니다.
  } else if (type.value === "year") {
    date.value = date.value.clone().subtract(1, "years"); // 년을 1년 감소시킵니다.
  }

  onChange();
}

function up() {
  if (type.value === "week") {
    date.value = date.value.clone().add(1, "weeks"); // 주를 1주 증가시킵니다.
  } else if (type.value === "month") {
    date.value = date.value.clone().add(1, "months"); // 월을 1월 증가시킵니다.
  } else if (type.value === "year") {
    date.value = date.value.clone().add(1, "years"); // 년을 1년 증가시킵니다.
  }

  onChange();
}
</script>
<template>
  <div class="flex gap-2 justify-between">
    <div class="flex gap-2 items-center">
      <Button variant="outline" size="sm" @click="down"><</Button>
      <Button variant="outline" size="sm" @click="up">></Button>
      <div class="font-semibold whitespace-nowrap">{{ formattedDate }}</div>
    </div>
    <Select v-model="type" @update:modelValue="onChange">
      <SelectTrigger class="w-[100px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="week">주</SelectItem>
          <SelectItem value="month">월</SelectItem>
          <SelectItem value="year">년</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
