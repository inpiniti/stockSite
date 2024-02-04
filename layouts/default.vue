<template>
  <div class="flex flex-col gap-1 p-1 h-svh overflow-hidden">
    <div class="shrink-0">
      <LayoutsMenu />
    </div>
    <!-- sm: phone, md: phone, lg: ipad, xl: pc -->
    <div class="flex xl:flex-row flex-col gap-1 grow-[1] overflow-hidden">
      <LayoutsSide class="shrink-0 xl:block hidden" />
      <div class="rounded-md border grow-[1] overflow-y-scroll">
        <slot />
      </div>
    </div>
  </div>
</template>
