<script setup lang="ts">
const scrollContainer = useState("scrollContainer", () => null);
// 스크롤을 위로 하는지 아래로 하는지에 따라서 메뉴를 숨기거나 보이게 하기 위함
const lastScrollPosition = ref(0);
const isScrollingDown = ref(false);

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleScroll);
  }
});

function handleScroll() {
  if (scrollContainer.value) {
    const currentScrollPosition = scrollContainer.value.scrollTop;
    isScrollingDown.value = currentScrollPosition > lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
  }
}
</script>
<template>
  <div class="flex flex-col lg:gap-1 lg:p-1 h-svh overflow-hidden">
    <div class="shrink-0" :class="{ hidden: isScrollingDown }">
      <LayoutsMenu />
    </div>
    <!-- sm: phone, md: phone, lg: ipad, xl: pc -->
    <div class="flex xl:flex-row flex-col gap-1 grow-[1] overflow-hidden">
      <LayoutsSide class="shrink-0 hidden" />
      <div
        ref="scrollContainer"
        class="lg:rounded-md lg:border grow-[1] overflow-y-scroll"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
