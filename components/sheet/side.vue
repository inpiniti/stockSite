<script setup lang="ts">
const props = defineProps<{
  open: boolean;
}>();
const emit = defineEmits(["update:open"]);
const route = useRoute();
</script>
<template>
  <Sheet :open="open" @update:open="emit('update:open')">
    <SheetContent side="left" class="w-48">
      <NuxtLink to="/" @click="emit('update:open')">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">만화책</h2>
      </NuxtLink>
      <div class="space-y-1">
        <NuxtLink to="/book/list" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/list' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            목록
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/chart" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/chart' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            차트
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/board" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/board' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            게시판
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/youtube" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/youtube' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            유튜브
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/music" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/music' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            음악
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/sale" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/sale' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            도서
          </Button>
        </NuxtLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
