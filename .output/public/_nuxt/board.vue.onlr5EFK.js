import{_ as y,a as T,b as w,c as B,d as C}from"./DialogContent.vue.7MU5ItPA.js";import{_ as N}from"./DialogFooter.vue.juma4w8g.js";import{_ as O}from"./Label.vue.KAwsWpLg.js";import{_ as k}from"./Input.vue.A7vKTKti.js";import{_ as U}from"./Textarea.vue.E5O3uO5z.js";import{_ as F}from"./index.59y7CFoV.js";import{u as P}from"./fetch.WmESyQx6.js";import{f as R,r as p,o as S,y as q,w as t,b as o,d as a,a as c,i as s}from"./entry.gsRA_R3H.js";const G={class:"grid gap-4 py-4"},H={class:"grid grid-cols-4 items-center gap-4"},I={class:"grid grid-cols-4 items-center gap-4"},W=R({__name:"board",setup(J,{expose:d}){const l=p(!1),n=p({title:"",content:"",tel:"",email:""});function i(){l.value=!l.value}async function f(){await P("/api/email",{method:"POST",body:JSON.stringify(n.value),onResponse({request:u,response:e,options:m}){console.log(e)}},"$h5GTxi8mRP")}return d({onOpen:i}),(u,e)=>{const m=y,g=T,$=w,r=O,x=k,V=U,D=F,h=N,v=B,b=C;return S(),q(b,{"onUpdate:open":i,open:s(l)},{default:t(()=>[o(v,{class:"w-5/6"},{default:t(()=>[o($,null,{default:t(()=>[o(m,null,{default:t(()=>[a("글쓰기")]),_:1}),o(g,null,{default:t(()=>[a(" 애니메이션에 대한 글을 남겨주세요. ")]),_:1})]),_:1}),c("div",G,[c("div",H,[o(r,{for:"title",class:"text-right"},{default:t(()=>[a(" 제목 ")]),_:1}),o(x,{modelValue:s(n).title,"onUpdate:modelValue":e[0]||(e[0]=_=>s(n).title=_),class:"col-span-3"},null,8,["modelValue"])]),c("div",I,[o(r,{for:"content",class:"text-right"},{default:t(()=>[a(" 내용 ")]),_:1}),o(V,{modelValue:s(n).content,"onUpdate:modelValue":e[1]||(e[1]=_=>s(n).content=_),class:"col-span-3"},null,8,["modelValue"])])]),o(h,null,{default:t(()=>[o(D,{onClick:f},{default:t(()=>[a(" 글 작성 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}});export{W as _};
