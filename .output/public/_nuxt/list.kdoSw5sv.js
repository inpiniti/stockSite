import{_ as c}from"./Header.vue.vdFF-1aQ.js";import{_ as p}from"./DataTable.vue.dXAXGcRa.js";import{n as _,aI as u,W as l,o as f,c as d,b as a,x as n,aJ as h}from"./entry.PiYtPCSn.js";import{u as x}from"./fetch.dpHpNHjZ.js";import{columns as C}from"./columns.jLlH64Il.js";import"./Input.vue.AtDk0niw.js";import"./index.WrFglSO-.js";import"./DropdownMenuContent.vue.gywkP28G.js";import"./index.Cs6bGerV.js";import"./check.RDWAG4x6.js";import"./chevron-down.wioGk5f9.js";import"./DataTableDropDown.vue.FEMWvqWl.js";const b={class:"p-4"},V=_({__name:"list",async setup(g){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>x(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",b,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(C),data:n(r)},null,8,["columns","data"])])}}});export{V as default};
