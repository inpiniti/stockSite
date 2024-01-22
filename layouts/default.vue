<template>
  <div class="flex flex-col gap-1 p-1 h-screen overflow-hidden">
    <div class="shrink-0">
      <LayoutsMenu />
    </div>
    <div class="flex gap-1 grow-[1] overflow-hidden">
      <LayoutsSide class="shrink-0" />
      <div class="rounded-md border grow-[1] overflow-y-scroll">
        <slot />
      </div>
    </div>
  </div>
</template>
