import{_ as c}from"./Header.vue.i0HhiG7d.js";import{_ as p}from"./DataTable.vue.drcHNOqT.js";import{n as _,aC as u,K as l,o as f,c as d,b as a,s as n,aD as h}from"./entry.wkrShRxQ.js";import{u as C}from"./fetch.SX6DP9hF.js";import{columns as b}from"./columns.u_Te69IM.js";import"./Input.vue.ZbYRpEe2.js";import"./index.PCTzjFoR.js";import"./DropdownMenuContent.vue.lebRhgro.js";import"./index.M0Ta3l61.js";import"./check.nSnzqahl.js";import"./chevron-down.iE0VoT4f.js";import"./DataTableDropDown.vue.YqENGY97.js";const g={class:"p-4"},j=_({__name:"list",async setup(x){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>C(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",g,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(b),data:n(r)},null,8,["columns","data"])])}}});export{j as default};
