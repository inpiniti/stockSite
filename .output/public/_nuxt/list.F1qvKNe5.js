import{_ as c}from"./Header.vue.TFie8eDa.js";import{_ as p}from"./DataTable.vue.8GRcO6vO.js";import{n as _,aI as u,W as l,o as f,c as d,b as a,x as n,aJ as h}from"./entry.nsx0uoig.js";import{u as x}from"./fetch.7Z7l6IND.js";import{columns as C}from"./columns.hhZLuDyl.js";import"./Input.vue.12Mrn6El.js";import"./index.qui5owY7.js";import"./DropdownMenuContent.vue.MN8Mwu0i.js";import"./index.dFgaop5u.js";import"./check.wZOMwllp.js";import"./chevron-down.0E2FZPfU.js";import"./DataTableDropDown.vue.uV3jW48Z.js";const b={class:"p-4"},V=_({__name:"list",async setup(g){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>x(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",b,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(C),data:n(r)},null,8,["columns","data"])])}}});export{V as default};