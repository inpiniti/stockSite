import{_ as c,A as r}from"./DataTableDropDown.vue.6QdGe9Sk.js";import{_ as o}from"./index.59y7CFoV.js";import{aw as a}from"./entry.gsRA_R3H.js";import"./DropdownMenuContent.vue.QRp1WKSU.js";import"./useBook.ui_WqWgL.js";import"./more-horizontal.6Aef7yh1.js";const d=[{accessorKey:"img",header:"img",cell:({row:e})=>{const s=e.getValue("img");return a("img",{class:"relative w-12 object-cover",src:s})}},{accessorKey:"jp",header:({column:e})=>a(o,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Jp",a(r,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>a("div",{class:"lowercase"},e.getValue("jp"))},{accessorKey:"kr",header:"Kr"},{accessorKey:"sales",header:({column:e})=>a(o,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Sales",a(r,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>a("div",{class:"lowercase"},e.getValue("sales"))},{accessorKey:"rank",header:"rank"},{accessorKey:"booknum",header:"booknum"},{accessorKey:"date",header:({column:e})=>a(o,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Date",a(r,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>a("div",{class:"lowercase"},e.getValue("date"))},{accessorKey:"name",header:"name"},{id:"actions",enableHiding:!1,cell:({row:e})=>{const s=e.original;return a("div",{class:"relative"},a(c,{book:s}))}}];export{d as columns};
