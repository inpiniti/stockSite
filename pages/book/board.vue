<template>
  <div class="p-4">
    <CommonHeader title="게시판" description="커뮤니티입니다." />
    <PagesBookDataTable :columns="columns" :data="book.data" />
  </div>
</template>
