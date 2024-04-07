<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);
const type = ref(props.modelValue);

watch(
  () => props.modelValue,
  (value) => {
    if (value !== type.value) {
      type.value = value;
    }
  }
);
watch(
  () => type.value,
  (value) => {
    if (value !== props.modelValue) {
      emit("update:modelValue", type.value);
    }
  }
);
</script>
<template>
  <div class="flex gap-2 justify-between">
    <div class="flex gap-2 items-center">
      <Button variant="outline" size="sm"><</Button>
      <Button variant="outline" size="sm">></Button>
      <div class="font-semibold whitespace-nowrap">2024년 4월</div>
    </div>
    <Select v-model="type">
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
