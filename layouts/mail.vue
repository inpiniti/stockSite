<script setup lang="ts">
const defaultLayout = [440, 265, 655];
const navCollapsedSize = 4;
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup id="resize-panel-group-1" direction="horizontal" class="h-full items-stretch">
      <ResizablePanel id="resize-panel-1" :default-size="defaultLayout[0]" :collapsed-size="navCollapsedSize" collapsible :min-size="15" :max-size="20" class="h-screen flex flex-col">
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
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
        <Tabs default-value="all">
          <div class="flex items-center px-4 py-2">
            <h1 class="text-xl font-bold">Inbox</h1>
            <TabsList class="ml-auto">
              <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200"> 도서 </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200"> 음악 </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200"> 게시판 </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200"> 피규어 </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <TabsContent value="all" class="m-0">
            <BookList />
          </TabsContent>
          <TabsContent value="unread" class="m-0">
            <!-- <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" /> -->
          </TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle id="resiz-handle-2" with-handle />
      <ResizablePanel id="resize-panel-3" :default-size="defaultLayout[2]">
        <!-- <MailDisplay :mail="selectedMailData" /> -->
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
