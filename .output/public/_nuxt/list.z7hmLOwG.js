import{_ as c}from"./Header.vue.LSDzOcMu.js";import{_ as p}from"./DataTable.vue.Q1vZ5lr6.js";import{n as _,aC as u,P as l,o as f,c as d,b as a,s as n,aD as h}from"./entry.UUms7g76.js";import{u as C}from"./fetch.aXmpu8CB.js";import{columns as b}from"./columns.REIt6Hjr.js";import"./Input.vue.g7hKwM4j.js";import"./index.JmZ5MrjL.js";import"./DropdownMenuContent.vue.Kp59G_5L.js";import"./index.vQh5LnMS.js";import"./check.4p07yMQr.js";import"./chevron-down.N_1-NcwP.js";import"./DataTableDropDown.vue.AW-4g4QN.js";const g={class:"p-4"},q=_({__name:"list",async setup(x){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>C(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",g,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(b),data:n(r)},null,8,["columns","data"])])}}});export{q as default};
