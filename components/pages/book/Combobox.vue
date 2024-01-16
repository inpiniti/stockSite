<script setup lang="ts">
import { ref } from "vue";
import { CaretSortIcon, CheckIcon } from "@radix-icons/vue";

import { cn } from "@/lib/utils";

const frameworks = getDatesUntilTarget();

const open = ref(false);
const value = ref<string>("");

const emit = defineEmits(["select"]);

function select(ev: any) {
  if (typeof ev.detail.value === "string") {
    value.value = ev.detail.value;
  }
  open.value = false;
  emit("select", value.value);
}

// const filterFunction = (list: typeof frameworks, search: string) => list.filter(i => i.value.toLowerCase().includes(search.toLowerCase()))
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between"
      >
        {{
          value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select "
        }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search " />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="select"
            >
              {{ framework.label }}
              <CheckIcon
                :class="
                  cn(
                    'ml-auto h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0'
                  )
                "
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
