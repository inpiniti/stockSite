import{_ as c}from"./Header.vue.BM4qEZvv.js";import{_ as p}from"./DataTable.vue.u7D5ToEi.js";import{n as _,aC as u,M as l,o as f,c as d,b as a,s as n,aD as h}from"./entry.rAop2VOQ.js";import{u as C}from"./fetch.3ddrTDEe.js";import{columns as b}from"./columns.DVf2s1Zp.js";import"./Input.vue.ZYgyAlFH.js";import"./index.qpMHwsRA.js";import"./DropdownMenuContent.vue.OdZNfgXo.js";import"./index.nK9wIgiY.js";import"./check.mfsBNYCe.js";import"./chevron-down.HfvB_CDn.js";import"./DataTableDropDown.vue.wQuKjigd.js";const g={class:"p-4"},j=_({__name:"list",async setup(x){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>C(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",g,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(b),data:n(r)},null,8,["columns","data"])])}}});export{j as default};
