import{_ as u,a as h}from"./SheetContent.vue.YaBxbWHr.js";import{_ as x,a as g}from"./SheetTitle.vue.xpwE6LbT.js";import{r as v}from"./book.Jn-fh3Jt.js";import{i as y,o as a,B,w as s,b as n,d as D,a as e,c as i,F as S,H as $,t as r,f as b}from"./entry.oc5bmuJu.js";const k={class:"flex flex-col gap-4 max-h-160 overflow-y-scroll"},w={class:"flex flex-col gap-1"},H={class:"text-xs"},T={class:"flex items-end gap-1"},C={class:"bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"},L=["innerHTML"],N={class:"text-xs"},j=y({__name:"boardDetail",props:{open:{type:Boolean},reply:{}},emits:["update:open"],setup(V,{emit:p}){const c=p;return(o,l)=>{const _=x,d=g,m=u,f=h;return a(),B(f,{open:o.open,"onUpdate:open":l[0]||(l[0]=t=>c("update:open"))},{default:s(()=>[n(m,{side:"bottom",class:"p-2"},{default:s(()=>[n(d,null,{default:s(()=>[n(_,null,{default:s(()=>[D("댓글")]),_:1})]),_:1}),e("div",k,[(a(!0),i(S,null,$(o.reply.comment.comments,t=>(a(),i("div",w,[e("p",H,r(t.user_id)+"("+r(t.name)+")",1),e("div",T,[e("div",C,[e("div",{innerHTML:("replaceDomain"in o?o.replaceDomain:b(v))(t.memo).replace(/co\.kr/g,"com")},null,8,L)]),e("p",N,r(t.reg_date),1)])]))),256))])]),_:1})]),_:1},8,["open"])}}});export{j as _};
