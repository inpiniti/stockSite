<script setup lang="ts">
const defaultLayout = [200, 240, 655];
const navCollapsedSize = 4;
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full items-stretch"
    >
      <ResizablePanel
        id="resize-panel-1"
        :default-size="defaultLayout[0]"
        :collapsed-size="navCollapsedSize"
        collapsible
        class="h-screen flex flex-col"
      >
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
      </ResizablePanel>
      <ResizableHandle id="resize-handle-1" with-handle />
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]">
        <Tabs
          class="h-screen overflow-hidden flex flex-col"
          default-value="book"
        >
          <div class="flex items-center px-4 py-2 shrink-0">
            <h1 class="text-xl font-bold">Inbox</h1>
            <TabsList class="ml-auto">
              <TabsTrigger
                value="book"
                class="text-zinc-600 dark:text-zinc-200"
              >
                도서
              </TabsTrigger>
              <TabsTrigger
                value="music"
                class="text-zinc-600 dark:text-zinc-200"
              >
                음악
              </TabsTrigger>
              <TabsTrigger
                value="board"
                class="text-zinc-600 dark:text-zinc-200"
              >
                게시판
              </TabsTrigger>
              <TabsTrigger
                value="figure"
                class="text-zinc-600 dark:text-zinc-200"
              >
                피규어
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div class="grow-[0] overflow-hidden flex flex-col">
            <TabsContent value="book" class="m-0 overflow-hidden">
              <BookList />
            </TabsContent>
            <TabsContent value="music" class="m-0 overflow-hidden">
              <MusicList />
            </TabsContent>
            <TabsContent value="board" class="m-0 overflow-hidden">
              <BoardList />
            </TabsContent>
            <TabsContent value="figure" class="m-0 overflow-hidden">
              <FigureList />
            </TabsContent>
          </div>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle id="resiz-handle-2" with-handle />
      <ResizablePanel id="resize-panel-3" :default-size="defaultLayout[2]">
        <!-- <MailDisplay :mail="selectedMailData" /> -->
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
