import{_ as m}from"./Header.vue.By53LVLI.js";import{_ as p}from"./DataTable.vue.LA-xr0vC.js";import{n as _,M as u,N as l,o as f,c as d,b as n,s as a,O as h}from"./entry.UCBvebao.js";import{u as C}from"./fetch.Vnh_0kyY.js";import{columns as b}from"./columns.Gohkr76d.js";import"./Input.vue.15RAgt7f.js";import"./createLucideIcon.ecQa9WbK.js";import"./index.xQ5lqcdS.js";import"./DropdownMenuContent.vue._tk0nOgq.js";import"./index.hm1hLm67.js";import"./DataTableDropDown.vue.9aXyq1Kw.js";const g={class:"p-4"},V=_({__name:"list",async setup(x){let t,e;const s=h(),{data:o,error:B,pending:$,execute:k,refresh:v}=([t,e]=u(()=>C(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,e(),t),r=l(()=>o.value?o.value:[]);return(w,y)=>{const i=m,c=p;return f(),d("div",g,[n(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),n(c,{columns:a(b),data:a(r)},null,8,["columns","data"])])}}});export{V as default};
