import{_ as d,A as o}from"./DataTableDropDown.vue.FEMWvqWl.js";import{_ as t}from"./index.WrFglSO-.js";import{n as g,a0 as u,o as m,P as h,w as c,b as l,x as r,ae as p,I as f,H as k,af as y,ag as s}from"./entry.PiYtPCSn.js";import{C as b}from"./check.RDWAG4x6.js";import"./DropdownMenuContent.vue.gywkP28G.js";const w=g({__name:"Checkbox",props:{defaultChecked:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},required:{type:Boolean},name:{},value:{},id:{},asChild:{type:Boolean},as:{}},emits:["update:checked"],setup(e,{emit:a}){const i=u(e,a);return(n,C)=>(m(),h(r(y),f(r(i),{class:r(k)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",n.$attrs.class??"")}),{default:c(()=>[l(r(p),{class:"flex h-full w-full items-center justify-center text-current"},{default:c(()=>[l(r(b),{class:"h-4 w-4"})]),_:1})]),_:1},16,["class"]))}}),j=[{accessorKey:"img",header:"img",cell:({row:e})=>{const a=e.getValue("img");return s("img",{class:"relative w-12 object-cover",src:a})}},{accessorKey:"jp",header:({column:e})=>s(t,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Jp",s(o,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>s("div",{class:"lowercase"},e.getValue("jp"))},{accessorKey:"kr",header:"Kr"},{accessorKey:"sales",header:({column:e})=>s(t,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Sales",s(o,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>s("div",{class:"lowercase"},e.getValue("sales"))},{accessorKey:"rank",header:"rank"},{accessorKey:"booknum",header:"booknum"},{accessorKey:"date",header:({column:e})=>s(t,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Date",s(o,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>s("div",{class:"lowercase"},e.getValue("date"))},{accessorKey:"name",header:"name"},{accessorKey:"isGenre",header:"장르 유무",cell:({row:e})=>{const a=e.getValue("isGenre");return s(w,{class:"h-4 w-4",checked:a})}},{id:"actions",enableHiding:!1,cell:({row:e})=>{const a=e.original;return s("div",{class:"relative"},s(d,{book:a}))}}];export{j as columns};