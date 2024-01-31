<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <div class="flex">
      <div class="flex">
        <NuxtLink to="/book/list">
          <Button
            :variant="route.path == '/book/list' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            목록
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/chart">
          <Button
            :variant="route.path == '/book/chart' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            차트
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/board">
          <Button
            :variant="route.path == '/book/board' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            게시판
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/youtube">
          <Button
            :variant="route.path == '/book/youtube' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            유튜브
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/music">
          <Button
            :variant="route.path == '/book/music' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            음악
          </Button>
        </NuxtLink>
        <NuxtLink to="/book/sale">
          <Button
            :variant="route.path == '/book/sale' ? `secondary` : `ghost`"
            class="w-full justify-start"
          >
            책 판매
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
