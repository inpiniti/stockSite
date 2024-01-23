<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";

defineProps<{
  book: any;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="useBook().openBook(book)">
        도서 정보 수정
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View 나무위키</DropdownMenuItem>
      <DropdownMenuItem>View 게시판 이동</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
