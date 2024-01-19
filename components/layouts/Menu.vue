<script setup lang="ts">
const { darkmode, toggleDarkmode } = useDarkmode();
const emailRef = ref();
function email() {
  emailRef.value.onOpen();
}
function github() {
  window.open("https://github.com/inpiniti");
}
function blog() {
  window.open("https://velog.io/@inpiniti/posts");
}
function click() {
  console.log("click");
  console.log(darkmode.value);
  toggleDarkmode();
  console.log(darkmode.value);
}
</script>

<template>
  <div>
    <DialogEmail ref="emailRef" />
    <Menubar>
      <div class="flex flex-row justify-between w-full">
        <div class="flex">
          <MenubarMenu
            ><MenubarTrigger class="font-bold"
              >inpiniti/app</MenubarTrigger
            ></MenubarMenu
          >
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled> New Incognito Window </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                >Always Show Bookmarks Bar</MenubarCheckboxItem
              >
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset> Toggle Fullscreen </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset> Hide Sidebar </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>만든사람</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy" @click="email">
                  이메일
                </MenubarRadioItem>
                <MenubarRadioItem value="benoit" @click="github">
                  github
                </MenubarRadioItem>
                <MenubarRadioItem value="Luis" @click="blog">
                  blog
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset> Edit... </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset> Add Profile... </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <div class="flex items-center justify-center pr-4">
          <MenubarMenu>
            <div class="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label
                for="airplane-mode"
                @click="click"
                :checked="useDarkmode().darkmode"
                >Dark Mode</Label
              >
            </div>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  </div>
</template>
