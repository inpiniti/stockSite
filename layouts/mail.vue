<script setup lang="ts">
const defaultLayout = [200, 200, 800];
const navCollapsedSize = 4;
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <div id="resize-panel-group-1" direction="horizontal" class="h-full items-stretch flex">
      <div id="resize-panel-1" :collapsed-size="navCollapsedSize" collapsible class="h-screen flex flex-col w-[300px] border-r shrink-0">
        <div class="pl-4 p-2 shrink-0">
          <div class="flex items-center justify-between">
            <div class="font-bold text-xl">Inpiniti</div>
            <Select>
              <SelectTrigger class="w-fit">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple"> Apple </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator />
        <LayoutsNavBooks />
        <!-- <Nav :is-collapsed="isCollapsed" :links="links" /> -->
      </div>
      <div id="resize-panel-2" class="w-[300px] border-r shrink-0">
        <Tabs class="h-screen overflow-hidden flex flex-col" default-value="book">
          <div class="flex items-center px-4 py-2 shrink-0">
            <TabsList class="ml-auto">
              <nuxt-link to="/book">
                <TabsTrigger value="book" class="text-zinc-600 dark:text-zinc-200"> 도서 </TabsTrigger>
              </nuxt-link>
              <nuxt-link to="/music">
                <TabsTrigger value="music" class="text-zinc-600 dark:text-zinc-200"> 음악 </TabsTrigger>
              </nuxt-link>
              <nuxt-link to="/board/read">
                <TabsTrigger value="board" class="text-zinc-600 dark:text-zinc-200"> 게시판 </TabsTrigger>
              </nuxt-link>
              <nuxt-link to="/figure">
                <TabsTrigger value="figure" class="text-zinc-600 dark:text-zinc-200"> 피규어 </TabsTrigger>
              </nuxt-link>
            </TabsList>
          </div>
          <Separator />
          <div class="grow-[0] h-full overflow-hidden flex flex-col">
            <TabsContent value="book" class="m-0 overflow-hidden h-full">
              <BookList />
            </TabsContent>
            <TabsContent value="music" class="m-0 overflow-hidden h-full">
              <MusicList />
            </TabsContent>
            <TabsContent value="board" class="m-0 overflow-hidden h-full">
              <BoardList />
            </TabsContent>
            <TabsContent value="figure" class="m-0 overflow-hidden h-full">
              <FigureList />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <div id="resize-panel-3 " class="grow-[0] w-full overflow-hidden">
        <div class="h-screen overflow-hidden flex flex-col">
          <div class="pl-4 p-2 shrink-0">
            <div class="flex items-center justify-between">
              <div class="font-bold text-xl">Inpiniti</div>
              <Select>
                <SelectTrigger class="w-fit">
                  <SelectValue placeholder="select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple"> Apple </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div class="grow-[0] overflow-hidden h-full">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </TooltipProvider>
</template>
