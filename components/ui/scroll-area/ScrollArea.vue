<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaViewport,
} from "radix-vue";
import ScrollBar from "./ScrollBar.vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<ScrollAreaRootProps & { class?: string }>(),
  {
    class: "",
    orientation: "vertical",
  }
);
</script>

<template>
  <ScrollAreaRoot
    :type="type"
    :class="cn('relative overflow-hidden', props.class)"
  >
    <div
      data-radix-scroll-area-viewport
      class="h-full w-full rounded-[inherit] overflow-y-scroll"
    >
      <slot />
    </div>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
