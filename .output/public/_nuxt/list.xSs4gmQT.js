import{_ as E}from"./Header.vue.BitSch4g.js";import{_ as q}from"./Input.vue.yePUBz_x.js";import{_ as J}from"./index.p6ztR4X2.js";import{_ as K,a as L,b as O}from"./DropdownMenuContent.vue.DwFrKjSz.js";import{u as j,F as B,g as G,h as Q,i as W,_ as X,a as Y,b as Z,c as ee,d as te,e as oe,f as ne}from"./index.OI1ImYlq.js";import{n as H,r as w,o,c as i,a as $,t as F,s,b as a,w as t,d as M,F as m,q as c,v as p,y as se,z as C,aJ as ae,P as le,aK as re}from"./entry.d9WDy5gl.js";import{C as ce}from"./chevron-down.y1leeXK8.js";import{u as ie}from"./fetch.-bVTNu3G.js";import{columns as ue}from"./columns.C_p6m3YZ.js";import"./check.T_5MFlea.js";import"./DataTableDropDown.vue.a4u4oTFP.js";import"./useBook.jCpj7YUk.js";const de={class:"flex-1 text-sm text-muted-foreground"},_e={class:"flex items-center py-4"},me={class:"border rounded-md"},pe=H({__name:"DataTable",props:{columns:{},data:{}},setup(R,{expose:u}){const d=R,f=w([]),_=w([]),h=w({}),b=w({}),l=j({get data(){return d.data},get columns(){return d.columns},getCoreRowModel:G(),getSortedRowModel:Q(),onSortingChange:r=>C(r,f),onColumnFiltersChange:r=>C(r,_),getFilteredRowModel:W(),onColumnVisibilityChange:r=>C(r,h),onRowSelectionChange:r=>C(r,b),state:{get sorting(){return f.value},get columnFilters(){return _.value},get columnVisibility(){return h.value},get rowSelection(){return b.value}}});return u({table:l}),(r,g)=>{var D;const V=q,S=J,k=K,v=X,N=L,I=O,U=Y,y=Z,A=ee,T=te,P=oe,z=ne;return o(),i("div",null,[$("div",de,F(s(l).getFilteredSelectedRowModel().rows.length)+" of "+F(s(l).getFilteredRowModel().rows.length)+" row(s) selected. ",1),$("div",_e,[a(V,{class:"max-w-sm",placeholder:"Filter kr...","model-value":(D=s(l).getColumn("kr"))==null?void 0:D.getFilterValue(),"onUpdate:modelValue":g[0]||(g[0]=e=>{var n;return(n=s(l).getColumn("kr"))==null?void 0:n.setFilterValue(e)})},null,8,["model-value"]),a(I,null,{default:t(()=>[a(k,{"as-child":""},{default:t(()=>[a(S,{variant:"outline",class:"ml-auto"},{default:t(()=>[M(" Columns "),a(s(ce),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),a(N,{align:"end"},{default:t(()=>[(o(!0),i(m,null,p(s(l).getAllColumns().filter(e=>e.getCanHide()),e=>(o(),c(v,{key:e.id,class:"capitalize",checked:e.getIsVisible(),"onUpdate:checked":n=>{e.toggleVisibility(!!n)}},{default:t(()=>[M(F(e.id),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))]),_:1})]),_:1})]),$("div",me,[a(z,null,{default:t(()=>[a(A,null,{default:t(()=>[(o(!0),i(m,null,p(s(l).getHeaderGroups(),e=>(o(),c(y,{key:e.id},{default:t(()=>[(o(!0),i(m,null,p(e.headers,n=>(o(),c(U,{key:n.id},{default:t(()=>[n.isPlaceholder?se("",!0):(o(),c(s(B),{key:0,render:n.column.columnDef.header,props:n.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),a(P,null,{default:t(()=>{var e;return[(e=s(l).getRowModel().rows)!=null&&e.length?(o(!0),i(m,{key:0},p(s(l).getRowModel().rows,n=>(o(),c(y,{key:n.id,"data-state":n.getIsSelected()?"selected":void 0},{default:t(()=>[(o(!0),i(m,null,p(n.getVisibleCells(),x=>(o(),c(T,{key:x.id},{default:t(()=>[a(s(B),{render:x.column.columnDef.cell,props:x.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state"]))),128)):(o(),c(y,{key:1},{default:t(()=>[a(T,{colSpan:r.columns.length,class:"h-24 text-center"},{default:t(()=>[M(" No results. ")]),_:1},8,["colSpan"])]),_:1}))]}),_:1})]),_:1})])])}}}),fe={class:"p-4"},Re=H({__name:"list",async setup(R){let u,d;const f=re(),{data:_,error:h,pending:b,execute:l,refresh:r}=([u,d]=ae(()=>ie(`${f.public.apiBase}/db/financials`,"$A5lh5Ef2OF")),u=await u,d(),u),g=le(()=>_.value?_.value:[]);return(V,S)=>{const k=E,v=pe;return o(),i("div",fe,[a(k,{title:"주식 데이터",description:"수집된 주식의 데이터를 보여줍니다."}),a(v,{columns:s(ue),data:s(g)},null,8,["columns","data"])])}}});export{Re as default};
