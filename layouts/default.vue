<template>
  <div class="flex flex-col gap-1 p-1 h-screen overflow-hidden">
    <div class="shrink-0">
      <LayoutsMenu />
    </div>
    <div class="flex lg:flex-row flex-col gap-1 grow-[1] overflow-hidden">
      <LayoutsMSide class="shrink-0 lg:hidden block" />
      <LayoutsSide class="shrink-0 lg:block hidden" />
      <div class="rounded-md border grow-[1] overflow-y-scroll">
        <slot />
      </div>
    </div>
  </div>
</template>
