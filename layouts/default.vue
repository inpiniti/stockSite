<script setup lang="ts">
const scrollContainer = useState("scrollContainer", () => null);
</script>
<template>
  <div class="flex flex-col lg:gap-1 lg:p-1 h-svh overflow-hidden">
    <div class="shrink-0">
      <LayoutsMenu />
    </div>
    <!-- sm: phone, md: phone, lg: ipad, xl: pc -->
    <div class="flex xl:flex-row flex-col gap-1 grow-[1] overflow-hidden">
      <LayoutsSide class="shrink-0 xl:block hidden" />
      <div
        ref="scrollContainer"
        class="lg:rounded-md lg:border grow-[1] overflow-y-scroll"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
