import{_ as c}from"./Header.vue.2prHX2-V.js";import{_ as p}from"./DataTable.vue.awN29kAa.js";import{M as _,bw as u,q as l,aE as f,u as d,I as a,bc as n,bS as b}from"./entry.kujcSJSR.js";import{u as h}from"./fetch.I9WL6qIq.js";import{columns as C}from"./columns.j_Wl5U59.js";import"./Input.vue.U_W0-rrI.js";import"./index.jI9725Rl.js";import"./DropdownMenuContent.vue.NwP7_EXC.js";import"./index.VxpUiwJX.js";import"./check.N_BZobwu.js";import"./chevron-down.n1oKhSMw.js";import"./DataTableDropDown.vue.1lhqxM5t.js";import"./useBook.MJQSOsm7.js";import"./more-horizontal.p77P756w.js";const g={class:"p-4"},V=_({__name:"list",async setup(x){let t,o;const r=b(),{data:e,error:B,pending:$,execute:k,refresh:v}=([t,o]=u(()=>h(`${r.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),t=await t,o(),t),s=l(()=>e.value?e.value:[]);return(w,E)=>{const i=c,m=p;return f(),d("div",g,[a(i,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(m,{columns:n(C),data:n(s)},null,8,["columns","data"])])}}});export{V as default};