import{_ as T,a as w,b as y,c as B,d as C}from"./DialogContent.vue.nr2TfFq-.js";import{_ as N}from"./DialogFooter.vue.A2TbtymO.js";import{_ as O}from"./Label.vue.aLufmlZC.js";import{_ as k}from"./Input.vue.l67dib9f.js";import{_ as U}from"./Textarea.vue.kla2BmH9.js";import{_ as F}from"./index.LbIwRaK4.js";import{u as G}from"./fetch.tBmXq0xU.js";import{n as H,r as p,o as P,H as R,w as t,b as o,d as a,a as c,G as s}from"./entry.mhhqayel.js";const S={class:"grid gap-4 py-4"},q={class:"grid grid-cols-4 items-center gap-4"},I={class:"grid grid-cols-4 items-center gap-4"},W=H({__name:"board",setup(J,{expose:d}){const l=p(!1),n=p({title:"",content:"",tel:"",email:""});function i(){l.value=!l.value}async function f(){await G("/api/email",{method:"POST",body:JSON.stringify(n.value),onResponse({request:u,response:e,options:m}){console.log(e)}},"$h5GTxi8mRP")}return d({onOpen:i}),(u,e)=>{const m=T,g=w,$=y,r=O,x=k,V=U,D=F,h=N,v=B,b=C;return P(),R(b,{"onUpdate:open":i,open:s(l)},{default:t(()=>[o(v,{class:"w-5/6"},{default:t(()=>[o($,null,{default:t(()=>[o(m,null,{default:t(()=>[a("글쓰기")]),_:1}),o(g,null,{default:t(()=>[a(" 애니메이션에 대한 글을 남겨주세요. ")]),_:1})]),_:1}),c("div",S,[c("div",q,[o(r,{for:"title",class:"text-right"},{default:t(()=>[a(" 제목 ")]),_:1}),o(x,{modelValue:s(n).title,"onUpdate:modelValue":e[0]||(e[0]=_=>s(n).title=_),class:"col-span-3"},null,8,["modelValue"])]),c("div",I,[o(r,{for:"content",class:"text-right"},{default:t(()=>[a(" 내용 ")]),_:1}),o(V,{modelValue:s(n).content,"onUpdate:modelValue":e[1]||(e[1]=_=>s(n).content=_),class:"col-span-3"},null,8,["modelValue"])])]),o(h,null,{default:t(()=>[o(D,{onClick:f},{default:t(()=>[a(" 글 작성 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}});export{W as _};
