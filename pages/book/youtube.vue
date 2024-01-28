<script setup>
const books = uniqueBooks();
const isOpen = ref(false);
const apiKey = ref("AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE");
const clientId = ref(
  "532479810296-7ap8aci48tgs1ak6de80qe1a2oiuf3mk.apps.googleusercontent.com"
);
const clientSecret = ref("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");
const youtubeList = ref();
const searchQuery = ref("");

function addVideo(video) {
  useYouTube().value.push(video);
}

async function youtubeListOpen(book) {
  // 선택한 제목 셋팅
  searchQuery.value = book.kr;

  // 시트창 열기
  isOpen.value = true;
  console.log(isOpen.value);
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
  <SheetYoutube
    :isOpen="isOpen"
    @update:open="isOpen = !isOpen"
    :kr="searchQuery"
  />
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
