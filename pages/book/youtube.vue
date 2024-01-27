<script setup>
const books = uniqueBooks();
const isOpen = ref(false);
const apiKey = ref("AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE");
const clientId = ref(
  "532479810296-7ap8aci48tgs1ak6de80qe1a2oiuf3mk.apps.googleusercontent.com"
);
const clientSecret = ref("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");
const youtubeList = ref();

async function youtubeListOpen(book) {
  execute();

  isOpen.value = true;
  const searchQuery = book.kr;
  //   const { data } = await useFetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery} ed&key=${apiKey.value}`
  //   );
  //youtubeList.value = data.value.items;
}

function addVideo(video) {
  useYouTube().value.push(video);
}

onBeforeMount(() => {
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: clientId.value });
  });
});

onMounted(() => {
  setTimeout(() => {
    authenticate().then(loadClient);
  }, 1000);
});

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey(apiKey.value);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi?.client?.youtube?.search
    .list({
      part: ["snippet"],
      eventType: "completed",
      forMine: true,
      type: ["video"],
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}

// {
//       "kind": "youtube#searchResult",
//       "etag": "sS4GJ2VsAP7prrHlBniPH2GKpao",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "iTh_3Kh31P0"
//       },
//       "snippet": {
//         "publishedAt": "2023-11-25T12:46:45Z",
//         "channelId": "UCrEcqnbthTdtNxtxsA-MO6Q",
//         "title": "『장송의 프리렌』 귀엽고 재밌는 장면 모음 Part.1",
//         "description": "2023년 4분기 최고 인기작 중 하나 장송의 프리렌! 재밌고 웃긴 장면들 보러 오세요! 해당영상; 1~12화 애니 제목:장송의 프리렌 ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/iTh_3Kh31P0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/iTh_3Kh31P0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/iTh_3Kh31P0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "ANIME_클리퍼",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-11-25T12:46:45Z"
//       }
//     },
</script>
<template>
  <Sheet :open="isOpen" @update:open="isOpen = false">
    <SheetContent class="overflow-y-scroll">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="flex flex-col gap-2">
        <div
          v-for="video in youtubeList"
          :key="video.id.videoId"
          @click="addVideo(video)"
        >
          <div class="flex gap-2">
            <img
              class="w-36 h-20 object-cover overflow-hidden rounded-md shrink-0"
              :src="video.snippet.thumbnails.medium.url"
            />
            <div class="flex flex-col grow-[0]">
              <div class="text-sm font-bold text-clamp">
                {{ video.snippet.title }}
              </div>
              <div class="text-xs">{{ video.snippet.channelTitle }}</div>
              <div class="text-xs">
                {{ timeAgo(video.snippet.publishedAt) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit"> Save changes </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  <DialogBoard ref="boardRef" />
  <div class="p-4">
    <CommonHeader
      title="youtube"
      description="유튜브를 연동해서 음악을 재생시킬수 있습니다."
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"
    >
      <Card
        v-for="book in books"
        :class="{ 'opacity-50': !book.dc, 'cursor-pointer': book.dc }"
        @click="youtubeListOpen(book)"
      >
        <CardHeader>
          <CardTitle
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            >{{ book.kr }}</CardTitle
          >
          <CardDescription
            >Deploy your new project in one-click.</CardDescription
          >
        </CardHeader>
        <CardContent>
          <img :src="book.img" />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
<style scoped>
.text-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
