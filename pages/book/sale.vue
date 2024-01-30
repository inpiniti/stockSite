<script setup>
const books = useBooks();
</script>
<template>
  <Accordion type="single" class="w-full" collapsible>
    <AccordionItem v-for="book in books" :key="book.value" :value="book.value">
      <AccordionTrigger>
        <div>
          <div>
            <div>이미지</div>
            <div>책정보</div>
            <div>
              <div>장바구니</div>
              <div>구매하기</div>
            </div>
          </div>
          <div>
            <div>리뷰</div>
            <div>노래</div>
            <div>게시판</div>
            <div>차트</div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div>다른 책 리스트</div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
