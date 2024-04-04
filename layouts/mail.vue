<script setup lang="ts">
const defaultLayout = [440, 265, 655];
const navCollapsedSize = 4;
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup id="resize-panel-group-1" direction="horizontal" class="h-full items-stretch">
      <ResizablePanel id="resize-panel-1" :default-size="defaultLayout[0]" :collapsed-size="navCollapsedSize" collapsible :min-size="15" :max-size="20" class="h-screen flex flex-col">
        <div class="px-4 py-3.5 font-bold text-xl shrink-0">Inpiniti</div>
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
              <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200"> All mail </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200"> Unread </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div class="relative">
                <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
              </div>
            </form>
          </div>
          <TabsContent value="all" class="m-0">
            <!-- <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" /> -->
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
