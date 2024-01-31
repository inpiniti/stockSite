<script setup>
const books = useBooks();
</script>
<template>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="book in books" :key="book.id" :value="book.id">
      <AccordionTrigger>
        <div class="px-4 flex flex-col gap-2 w-full">
          <div class="flex gap-4">
            <div><img class="h-40 rounded-sm" :src="book.img" /></div>
            <div class="flex flex-col items-start text-xs gap-1">
              <div class="flex gap-2 text-nowrap text-sm">
                <div class="text-neutral-500">예약판매</div>
                <div class="font-semibold">{{ book.kr }}</div>
              </div>
              <div>요한 볼프강 폰 괴테 - 현대지성 - 2024.02.08</div>
              <div>{{ book.jp }}</div>
              <div>{{ book.name }}</div>
              <div class="flex gap-1">
                <div class="text-red-500">10%</div>
                <div class="font-bold">54,00원</div>
                <div class="text-neutral-400 line-through">6,000원</div>
                <div>| 870p</div>
              </div>
              <div class="test-left">
                “온갖 학문에 통달하고 마법까지 익혔지만, 자신의 능력에 한계를
                느껴 절망한 노학자(老學者) 파우스트. 이런 그 앞에
                메피스토펠레스라는 악마가 나타나 솔깃한 제안을 한다. 유혹에
                넘어간 파우스
              </div>
              <div>0.0</div>
            </div>
            <div>
              <div>1/31(수)</div>
              <div>출고예정</div>
            </div>
            <div>
              <div><Button variant="secondary">장바구니</Button></div>
              <div><Button>구매하기</Button></div>
            </div>
          </div>
          <div class="flex gap-4">
            <div><Badge variant="secondary">리뷰 보기</Badge></div>
            <div><Badge variant="secondary">노래 듣기</Badge></div>
            <div><Badge variant="secondary">게시판 보기</Badge></div>
            <div><Badge variant="secondary">차트 보드</Badge></div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div>다른 책 리스트</div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
