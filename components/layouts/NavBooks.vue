<script setup lang="ts">
const books = useBooks();
const type = ref("week");
</script>
<template>
  <div class="grow-[1]">
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
            <SelectItem value="month"> 월 </SelectItem>
            <SelectItem value="year"> 년 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <ScrollArea class="flex">
      <div class="flex-1 flex flex-col gap-2 p-2">
        <TransitionGroup name="list" appear>
          <button v-for="book of books" :key="book.id">
            <div class="flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-100">
              <div class="flex gap-2 justify-between items-center">
                <div class="grow-[0] text-left font-semibold text-sm">{{ book.kr }} {{ book.booknum }}</div>
                <div class="shrink-0 text-xs">{{ book.date }}</div>
              </div>

              <div class="text-xs text-left">
                {{ book.jp }}
              </div>
              <div class="text-xs text-left">판매량 : {{ book.sales }}</div>
            </div>
          </button>
        </TransitionGroup>
      </div>
    </ScrollArea>
  </div>
</template>
