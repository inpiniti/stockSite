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
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['fas', 'database']" />
            데이터베이스
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/chart" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/chart' ? `secondary` : `ghost`"
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['fas', 'chart-line']" />
            차트
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/board" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/board' ? `secondary` : `ghost`"
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['far', 'newspaper']" />
            게시판
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/youtube" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/youtube' ? `secondary` : `ghost`"
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
            유튜브
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/music" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/music' ? `secondary` : `ghost`"
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['fas', 'music']" />
            음악
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/sale" @click="emit('update:open')">
          <Button
            :variant="route.path == '/book/sale' ? `secondary` : `ghost`"
            class="w-full justify-start flex gap-2"
          >
            <font-awesome-icon :icon="['fas', 'book']" />
            도서
          </Button>
        </NuxtLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
