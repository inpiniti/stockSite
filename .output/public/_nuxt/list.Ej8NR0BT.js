import{_ as c}from"./Header.vue.7fppwtF_.js";import{_ as p}from"./DataTable.vue.Zme0tVd0.js";import{n as _,aI as u,N as l,o as f,c as d,b as a,u as n,aJ as h}from"./entry.ZrjVigbx.js";import{u as C}from"./fetch.UVeKDlNk.js";import{columns as b}from"./columns.XbJ5Gd1h.js";import"./Input.vue.GWWFBUEn.js";import"./index.Ac_qkOMf.js";import"./DropdownMenuContent.vue.HDnMiJ6l.js";import"./index.HasG9dug.js";import"./check.9RYKDd0g.js";import"./chevron-down.iLkNQ3u_.js";import"./DataTableDropDown.vue.qlzddXs9.js";const g={class:"p-4"},V=_({__name:"list",async setup(x){let t,o;const s=h(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>C(`${s.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),r=l(()=>e.value?e.value:[]);return(w,y)=>{const i=c,m=p;return f(),d("div",g,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(b),data:n(r)},null,8,["columns","data"])])}}});export{V as default};
