<script setup lang="ts">
import moment from "moment";
const { darkmode, toggleDarkmode } = useDarkmode();
const props = defineProps<{
  open: boolean;
}>();

const auth = useAuth();

const emit = defineEmits(["update:open"]);

function onLogout() {
  useSupabase().value.auth.signOut();
  navigateTo("/");
}
</script>
<template>
  <Dialog :open="open" @update:open="emit('update:open')">
    <DialogContent class="sm:max-w-[425px]">
      <div class="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>유저 정보</DialogTitle>
          <DialogDescription> 유저 정보 화면 입니다. </DialogDescription>
        </DialogHeader>
        <div class="flex flex-col gap-3 text-sm">
          <div class="flex gap-3">
            <Avatar>
              <AvatarImage :src="auth?.user_metadata?.avatar_url" />
            </Avatar>
            <div>
              <div>
                {{ auth?.user_metadata?.name }}
              </div>
              <div class="text-neutral-400">{{ auth?.email }}</div>
            </div>
          </div>
          <div class="flex gap-2">
            <div>가입일</div>
            <div class="text-neutral-400">
              {{ moment(auth?.created_at).format("YYYY-MM-DD") }}
            </div>
          </div>

          <Tabs default-value="account" class="w-[400px]">
            <TabsList>
              <TabsTrigger value="account"> 장바구니 </TabsTrigger>
              <TabsTrigger value="password"> 작성한 글 </TabsTrigger>
              <TabsTrigger value="password"> 작성한 덧글 </TabsTrigger>
            </TabsList>
          </Tabs>

          <div class="flex items-center gap-2">
            <Switch
              id="airplane-mode"
              v-model="darkmode"
              @click="toggleDarkmode"
            />
            <Label for="airplane-mode">Dark Mode</Label>
          </div>

          <Button class="w-fit" size="sm" @click="onLogout">로그아웃</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
