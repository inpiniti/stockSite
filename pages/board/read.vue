<script setup>
definePageMeta({
  layout: "mail",
});

const board = useBoardDetail();
// book:null
// content:"<p>ㄴㄹㄴㅇㄹㄴㅇㄹ</p>"
// count:null
// date:null
// id:59463
// kr:"ㄴㅇㄹ"
// link:"ㅈㄷㄱㅈㄷㄱ"
// num:null
// number:null
// recommend:null
// subject:"ㄴㅇㄹ"
// title:"ㄴㅇㄹ"
// type:null
// writer:"ㄴㅇㄹ"

const reply = ref(null);
// no:"56998"
// parent:"14462"
// user_id:""
// name:"ㅇㅇ"
// ip:"125.129"
// reg_date:"05.03 00:35:25"
// nicktype:"00"
// t_ch1:""
// t_ch2:""
// vr_type:""
// voice:null
// rcnt:"0"
// c_no:0
// depth:0
// del_yn:"N"
// is_delete:"0"
// password_pop:"Y"
// memo:"진짜 설정 세계관 버리고 아예 신작으로 가려나보네"
// my_cmt:"N"
// del_btn:"Y"
// mod_btn:"N"
// a_my_cmt:"N"
// reply_w:"Y"
// gallog_icon:"<span class="nickname"><em title = "ㅇㅇ">ㅇㅇ</em><span class="ip">(125.129)</span></span>"
// vr_player:false
// vr_player_tag:""

const scrollContainer = ref(null);

watch(
  () => board.value?.id,
  () => {
    getReply();
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0;
    }
  }
);

async function getReply() {
  console.log("getReply");
  if (!board.value) {
    console.error("board.value is not defined");
    return;
  }

  const { dc } = findBook(board.value.kr);

  // 덧글 조회
  const { data: newData } = await useFetch(
    `/api/dcinside/${dc}/${board.value.num}?kr=${board.value.kr}`
  );

  reply.value = newData.value;
  if (reply.value?.comment?.comments) {
    reply.value.comment.comments = reply.value?.comment?.comments.filter(
      (comment) => {
        return comment.no != 0;
      }
    );
  }
}
</script>
<template>
  <div class="h-full overflow-hidden flex flex-col" v-if="board">
    <div class="shrink-0 flex flex-col p-4 gap-4">
      <div class="flex justify-between text-xs">
        <div class="flex gap-1">
          <h3 class="text-blue-500">
            {{ board.kr }}
          </h3>
          <div class="text-neutral-300">/</div>
          {{ board.num }}
        </div>
        <div class="flex gap-1">
          <div>{{ board.id }}</div>
          <div class="text-neutral-300">/</div>
          <div>{{ board.subject }}</div>
          <div class="text-neutral-300">/</div>
          <div>{{ board.type }}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-neutral-100 rounded-full"></div>
        <div class="flex flex-col text-sm">
          <div>{{ board.writer }}</div>
          <div class="flex gap-2">
            <div>조회 {{ board.count }}</div>
            <div class="text-neutral-300">|</div>
            <div>덧글 {{ board.number }}</div>
            <div class="text-neutral-300">|</div>
            <div>추천 {{ board.recommend }}</div>
            <div class="text-neutral-300">|</div>
            <div>{{ timeAgo(board.date) }}</div>
          </div>
        </div>
      </div>
      <div class="text-3xl font-bold">{{ board.title }}</div>
    </div>
    <Separator />
    <div class="grow-[0] overflow-y-scroll" ref="scrollContainer">
      <div class="p-4 flex flex-col gap-4">
        <div
          v-html="
            board.content
              ?.replace(
                /https:\/\/dcimg\d\.dcinside/g,
                'https://images.dcinside'
              )
              .replace(/co\.kr/g, 'com')
          "
        ></div>
      </div>
      <Separator />
      <div class="p-4">
        <div class="flex gap-4">
          <div class="shrink-0 w-10 h-10 bg-neutral-100 rounded-full"></div>
          <div class="grow-[0] w-full">
            <Textarea placeholder="Type your message here." />
          </div>
        </div>
        <Button class="w-full mt-4">작성</Button>
      </div>
      <Separator />
      <div>
        <div
          class="p-4 flex flex-col gap-2"
          v-for="comment in reply?.comment?.comments"
        >
          <p class="text-xs">{{ comment.user_id }}({{ comment.name }})</p>
          <div class="flex items-end gap-1">
            <div class="bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit">
              <div
                v-html="replaceDomain(comment.memo).replace(/co\.kr/g, 'com')"
              ></div>
            </div>
            <p class="text-xs">{{ comment.reg_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
