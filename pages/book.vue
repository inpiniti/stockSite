<script setup>
definePageMeta({
  layout: "mail",
});
const selectedBook = useSelectedBook();
</script>
<template>
  <div class="w-full" v-if="selectedBook.kr">
    <div class="flex justify-center">
      <div class="grid-cols-2 grid min-w-[600px] max-w-[600px]">
        <div class="p-5"><img :src="selectedBook.img" /></div>
        <div class="flex flex-col p-5 border-l">
          <div class="text-lg font-semibold">주술회전 공식 팬북 만화 책</div>
          <div class="flex text-xl justify-end items-center gap-2 font-bold">
            <div class="text-neutral-400 line-through">9,000원</div>
            <div class="text-2xl">8,550원</div>
          </div>
          <Separator class="my-4" />
          <div class="text-sm">
            <div>택배배송 <span class="text-neutral-200">|</span> 무료배송 우체국택배</div>
            <div class="text-neutral-400">제주, 도서지역 추가 6,000원</div>
          </div>
          <Separator class="my-4" />
          <div>수량</div>
          <div class="flex items-end justify-between">
            <div class="flex border w-fit">
              <div class="bg-neutral-200 py-2 px-4">-</div>
              <div class="py-2 px-4">1</div>
              <div class="bg-neutral-200 py-2 px-4">+</div>
            </div>
            <div>8,500원</div>
          </div>
          <Separator class="my-4" />
          <div class="flex items-center justify-between pb-4">
            <div class="text-sm font-bold">총 상품 금액</div>
            <div class="flex gap-2 items-center">
              <div class="text-sm text-neutral-400">총 수량 1개</div>
              <div class="text-2xl text-red-400 font-bold">8,550원</div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div><Button size="lg" class="w-full">구매하기</Button></div>
            <div class="flex gap-2">
              <div class="flex-1">
                <Button variant="secondary" class="w-full">찜하기</Button>
              </div>
              <div class="flex-1">
                <Button variant="outline" class="w-full">장바구니</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t flex justify-center">
      <div class="w-full">
        <Tabs default-value="book">
          <div class="flex justify-center">
            <div class="p-2 px-5 min-w-[600px] max-w-[600px]">
              <TabsList class="w-full">
                <TabsTrigger value="book" class="text-zinc-600 dark:text-zinc-200"> 상세정보 </TabsTrigger>
                <TabsTrigger value="music" class="text-zinc-600 dark:text-zinc-200"> 리뷰 0 </TabsTrigger>
                <TabsTrigger value="board" class="text-zinc-600 dark:text-zinc-200"> Q&A 0 </TabsTrigger>
                <TabsTrigger value="figure" class="text-zinc-600 dark:text-zinc-200"> 반품/교환정보 </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <Separator class="mb-2" />
          <div class="grow-[0] overflow-hidden flex flex-col p-2">
            <TabsContent value="book" class="m-0 overflow-hidden"> 상세정보 </TabsContent>
            <TabsContent value="music" class="m-0 overflow-hidden"> 리뷰 0 </TabsContent>
            <TabsContent value="board" class="m-0 overflow-hidden"> Q&A 0 </TabsContent>
            <TabsContent value="figure" class="m-0 overflow-hidden"> 반품/교환정보 </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  </div>
</template>
