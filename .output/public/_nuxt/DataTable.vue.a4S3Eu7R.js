import{_ as q}from"./Input.vue.lWM-qJ_S.js";import{_ as A}from"./index.YezxBemq.js";import{_ as E,a as L,b as P}from"./DropdownMenuContent.vue.JuNkwv1U.js";import{u as j,F as x,g as G,h as J,i as K,_ as O,a as Q,b as W,c as X,d as Y,e as Z,f as ee}from"./index.MeYckoXe.js";import{n as te,r as _,o as n,c as d,a as f,t as w,s as l,b as s,w as t,d as C,F as u,q as c,v as i,y as oe,z as m}from"./entry.hPOjlSdm.js";import{C as ne}from"./chevron-down.ZSjcx2ij.js";const le={class:"flex-1 text-sm text-muted-foreground"},se={class:"flex items-center py-4"},ae={class:"border rounded-md"},me=te({__name:"DataTable",props:{columns:{},data:{}},setup(R){const b=R,h=_([]),k=_([]),y=_({}),v=_({}),r=j({get data(){return b.data},get columns(){return b.columns},getCoreRowModel:G(),getSortedRowModel:J(),onSortingChange:a=>m(a,h),onColumnFiltersChange:a=>m(a,k),getFilteredRowModel:K(),onColumnVisibilityChange:a=>m(a,y),onRowSelectionChange:a=>m(a,v),state:{get sorting(){return h.value},get columnFilters(){return k.value},get columnVisibility(){return y.value},get rowSelection(){return v.value}}});return(a,F)=>{var V;const $=q,S=A,T=E,D=O,B=L,N=P,H=Q,p=W,I=X,M=Y,U=Z,z=ee;return n(),d("div",null,[f("div",le,w(l(r).getFilteredSelectedRowModel().rows.length)+" of "+w(l(r).getFilteredRowModel().rows.length)+" row(s) selected. ",1),f("div",se,[s($,{class:"max-w-sm",placeholder:"Filter kr...","model-value":(V=l(r).getColumn("kr"))==null?void 0:V.getFilterValue(),"onUpdate:modelValue":F[0]||(F[0]=e=>{var o;return(o=l(r).getColumn("kr"))==null?void 0:o.setFilterValue(e)})},null,8,["model-value"]),s(N,null,{default:t(()=>[s(T,{"as-child":""},{default:t(()=>[s(S,{variant:"outline",class:"ml-auto"},{default:t(()=>[C(" Columns "),s(l(ne),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),s(B,{align:"end"},{default:t(()=>[(n(!0),d(u,null,i(l(r).getAllColumns().filter(e=>e.getCanHide()),e=>(n(),c(D,{key:e.id,class:"capitalize",checked:e.getIsVisible(),"onUpdate:checked":o=>{e.toggleVisibility(!!o)}},{default:t(()=>[C(w(e.id),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))]),_:1})]),_:1})]),f("div",ae,[s(z,null,{default:t(()=>[s(I,null,{default:t(()=>[(n(!0),d(u,null,i(l(r).getHeaderGroups(),e=>(n(),c(p,{key:e.id},{default:t(()=>[(n(!0),d(u,null,i(e.headers,o=>(n(),c(H,{key:o.id},{default:t(()=>[o.isPlaceholder?oe("",!0):(n(),c(l(x),{key:0,render:o.column.columnDef.header,props:o.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),s(U,null,{default:t(()=>{var e;return[(e=l(r).getRowModel().rows)!=null&&e.length?(n(!0),d(u,{key:0},i(l(r).getRowModel().rows,o=>(n(),c(p,{key:o.id,"data-state":o.getIsSelected()?"selected":void 0},{default:t(()=>[(n(!0),d(u,null,i(o.getVisibleCells(),g=>(n(),c(M,{key:g.id},{default:t(()=>[s(l(x),{render:g.column.columnDef.cell,props:g.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state"]))),128)):(n(),c(p,{key:1},{default:t(()=>[s(M,{colSpan:a.columns.length,class:"h-24 text-center"},{default:t(()=>[C(" No results. ")]),_:1},8,["colSpan"])]),_:1}))]}),_:1})]),_:1})])])}}});export{me as _};