import{_ as c}from"./Header.vue.uJH5GaMP.js";import{_ as p}from"./DataTable.vue.3QAw_Y9-.js";import{n as _,aI as u,W as l,o as f,c as d,b as a,x as n,aJ as h}from"./entry.yfXRElsi.js";import{u as x}from"./fetch.swh_HpJ7.js";import{columns as C}from"./columns.3g-Slfxa.js";import"./Input.vue.08Cf_LiK.js";import"./index.MrlAIxSG.js";import"./DropdownMenuContent.vue.Tw0yRQca.js";import"./index.qK6MSi7R.js";import"./check.GbyDTmwP.js";import"./chevron-down.xT4F6yV6.js";import"./DataTableDropDown.vue.X1DxZ4Nm.js";const b={class:"p-4"},V=_({__name:"list",async setup(g){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>x(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",b,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(C),data:n(r)},null,8,["columns","data"])])}}});export{V as default};
