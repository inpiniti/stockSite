<script setup lang="ts">
const scrollContainer = useState("scrollContainer", () => null);
const isScrollingDown = useState("isScrollingDown", () => false);
// 스크롤을 위로 하는지 아래로 하는지에 따라서 메뉴를 숨기거나 보이게 하기 위함
const lastScrollPosition = ref(0);

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  const currentScrollPosition = document.documentElement.scrollTop;

  // currentScrollPosition, lastScrollPosition.value 비교해서 40px 이 차이가 나면 무시하도록
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 40) {
    return;
  }

  isScrollingDown.value = currentScrollPosition > lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
}
</script>
<template>
  <div ref="scrollContainer">
    <div class="sticky top-0 z-20" :class="{ hidden: isScrollingDown }">
      <LayoutsMenu />
    </div>
    <div>
      <LayoutsSide class="shrink-0 hidden" />
      <slot />
    </div>
  </div>

  <!-- <div class="flex flex-col lg:gap-1 lg:p-1 h-svh overflow-hidden">
    <div class="shrink-0" :class="{ hidden: isScrollingDown }">
      <LayoutsMenu />
    </div>
    <div class="flex xl:flex-row flex-col gap-1 grow-[1] overflow-hidden">
      <LayoutsSide class="shrink-0 hidden" />
      <div
        ref="scrollContainer"
        class="lg:rounded-md lg:border grow-[1] overflow-y-scroll"
      >
        <slot />
      </div>
    </div>
  </div> -->
</template>
