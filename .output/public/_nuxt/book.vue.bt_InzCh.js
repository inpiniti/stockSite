import{_ as D,a as C,b as $,c as J,d as M}from"./DialogContent.vue.gRTi2vKn.js";import{_ as Z}from"./DialogFooter.vue.FfGrY2fj.js";import{_ as j}from"./Label.vue.RcDR3CmT.js";import{_ as S}from"./Input.vue.XcFyEySi.js";import{_ as z}from"./index.yBksFz8a.js";import{M as L,dm as N,bJ as O,aM as v,aE as q,s as Q,bx as n,I as s,H as t,v as d,bc as l,b3 as R,cs as W,dn as X}from"./entry.773nEwdk.js";import{u as o}from"./useBook.zddMW_cy.js";const Y={class:"grid gap-4 py-4"},E={class:"grid grid-cols-4 items-center gap-4"},F={class:"grid grid-cols-4 items-center gap-4"},H={class:"grid grid-cols-4 items-center gap-4"},T={class:"grid grid-cols-4 items-center gap-4"},A={class:"grid grid-cols-4 items-center gap-4"},G={class:"grid grid-cols-4 items-center gap-4"},K={class:"grid grid-cols-4 items-center gap-4"},P={class:"grid grid-cols-4 items-center gap-4"},x={class:"grid grid-cols-4 items-center gap-4"},de=L({__name:"book",emits:["update:open"],setup(ee,{emit:g}){const m=N("https://etnyrefdmddqiuatswhb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"),c=O("bookOpen"),f=v(!1),p=v(!1),B=g;async function V(){f.value=!0,await m.from("book").update({kr:o().selected.value.kr,img:o().selected.value.img}).eq("jp",o().selected.value.jp);const{data:e,error:a}=await m.from("book_info").select("*").eq("kr",o().selected.value.kr);e&&e.length>0?await m.from("book_info").update({author:o().selected.value.author,publisher:o().selected.value.publisher,description:o().selected.value.description,summary:o().selected.value.summary,dc:o().selected.value.dc,namu:o().selected.value.namu}).eq("kr",o().selected.value.kr):await m.from("book_info").insert([{kr:o().selected.value.kr,author:o().selected.value.author,publisher:o().selected.value.publisher,description:o().selected.value.description,summary:o().selected.value.summary,dc:o().selected.value.dc,namu:o().selected.value.namu}]),await W(),await X(),f.value=!1,c.value=!1,B("update:open")}async function _(){p.value=!0;try{await fetch(`/api/namuWiki/${o().selected.value.namu}`)}catch(e){console.error(e)}finally{p.value=!1}}return(e,a)=>{const b=D,h=C,I=$,i=j,r=S,k=z,y=Z,U=J,w=M;return q(),Q(w,{open:l(c),"onUpdate:open":a[9]||(a[9]=u=>c.value=!1)},{default:n(()=>[s(U,{class:"sm:max-w-[425px]"},{default:n(()=>[s(I,null,{default:n(()=>[s(b,null,{default:n(()=>[t("만화책 수정")]),_:1}),s(h,null,{default:n(()=>[t(" 만화책의 한국어 제목 및 책의 이미지를 수정할 수 있습니다. ")]),_:1})]),_:1}),d("div",Y,[d("div",E,[s(i,{for:"name",class:"text-right"},{default:n(()=>[t(" 일본어 제목 ")]),_:1}),s(r,{id:"name",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.jp,"onUpdate:modelValue":a[0]||(a[0]=u=>("useBook"in e?e.useBook:l(o))().selected.value.jp=u)},null,8,["modelValue"])]),d("div",F,[s(i,{for:"name",class:"text-right"},{default:n(()=>[t(" 한국어 제목 ")]),_:1}),s(r,{id:"name",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.kr,"onUpdate:modelValue":a[1]||(a[1]=u=>("useBook"in e?e.useBook:l(o))().selected.value.kr=u)},null,8,["modelValue"])]),d("div",H,[s(i,{for:"username",class:"text-right"},{default:n(()=>[t(" 이미지 url ")]),_:1}),s(r,{id:"username",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.img,"onUpdate:modelValue":a[2]||(a[2]=u=>("useBook"in e?e.useBook:l(o))().selected.value.img=u)},null,8,["modelValue"])]),d("div",T,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" 나무위키 url ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.namu,"onUpdate:modelValue":a[3]||(a[3]=u=>("useBook"in e?e.useBook:l(o))().selected.value.namu=u)},null,8,["modelValue"])]),d("div",A,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" dcinside id ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.dc,"onUpdate:modelValue":a[4]||(a[4]=u=>("useBook"in e?e.useBook:l(o))().selected.value.dc=u)},null,8,["modelValue"])]),d("div",G,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" 저자 ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.author,"onUpdate:modelValue":a[5]||(a[5]=u=>("useBook"in e?e.useBook:l(o))().selected.value.author=u)},null,8,["modelValue"])]),d("div",K,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" 출판사 ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.publisher,"onUpdate:modelValue":a[6]||(a[6]=u=>("useBook"in e?e.useBook:l(o))().selected.value.publisher=u)},null,8,["modelValue"])]),d("div",P,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" 요약 ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.description,"onUpdate:modelValue":a[7]||(a[7]=u=>("useBook"in e?e.useBook:l(o))().selected.value.description=u)},null,8,["modelValue"])]),d("div",x,[s(i,{for:"namu",class:"text-right"},{default:n(()=>[t(" 줄거리 ")]),_:1}),s(r,{id:"namu",class:"col-span-3",modelValue:("useBook"in e?e.useBook:l(o))().selected.value.summary,"onUpdate:modelValue":a[8]||(a[8]=u=>("useBook"in e?e.useBook:l(o))().selected.value.summary=u)},null,8,["modelValue"])])]),s(y,null,{default:n(()=>[s(k,{variant:"secondary",onClick:_,disabled:!("useBook"in e?e.useBook:l(o))().selected.value.namu},{default:n(()=>[t(R(l(p)?"Uploading...":"Cover Image Upload"),1)]),_:1},8,["disabled"]),s(k,{onClick:V},{default:n(()=>[t("Save changes")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}});export{de as _};
