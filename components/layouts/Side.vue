<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <Card class="w-56">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <NuxtLink to="/">
          <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">만화책</h2>
        </NuxtLink>
        <div class="space-y-1">
          <NuxtLink to="/book/list">
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
          <NuxtLink to="/book/chart">
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
          <NuxtLink to="/book/board">
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
          <NuxtLink to="/book/youtube">
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
          <NuxtLink to="/book/music">
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
          <NuxtLink to="/book/sale">
            <Button
              :variant="route.path == '/book/sale' ? `secondary` : `ghost`"
              class="w-full justify-start"
            >
              도서
            </Button>
          </NuxtLink>
        </div>
      </div>
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">주식</h2>
        <div class="space-y-1">
          <NuxtLink to="/stock/list">
            <Button
              :variant="route.path == '/stock/list' ? `secondary` : `ghost`"
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
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              수집 데이터
            </Button>
          </NuxtLink>
          <NuxtLink to="/stock/learning">
            <Button
              :variant="route.path == '/stock/learning' ? `secondary` : `ghost`"
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
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              학습 모델
            </Button>
          </NuxtLink>
          <NuxtLink to="/stock/prediction">
            <Button
              :variant="
                route.path == '/stock/prediction' ? `secondary` : `ghost`
              "
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
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              예측
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Card>
</template>
