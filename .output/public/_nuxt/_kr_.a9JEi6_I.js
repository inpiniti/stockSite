import{_ as G,a as J,b as K,c as Z,d as q}from"./DialogContent.vue.y8zWMuOK.js";import{M as L,bJ as Q,aM as w,bs as W,aE as t,s as h,bx as o,I as s,H as V,b3 as m,bc as e,v as c,u as p,aP as D,F as y,ao as X,t as P,c6 as I,c7 as Y,ax as ee,bE as te}from"./entry.MytKFVjI.js";import{u as z}from"./fetch._v8r2mfP.js";import{r as j}from"./book.Jn-fh3Jt.js";import{_ as oe}from"./Header.vue.jAdW7AIA.js";import{_ as ne}from"./Input.vue.68qrdO9s.js";import{_ as ae}from"./index.Ve5gJNnX.js";import{_ as se,a as le,b as re}from"./DropdownMenuContent.vue.CgDbUbrR.js";import{u as ie,F as E,g as ce,a as de,b as ue,_ as me,c as _e,d as pe,e as fe,f as ge,h as ve,i as he}from"./index.FFKGZBep.js";import{C as we}from"./chevron-down.-uL9iEbb.js";import{u as ke}from"./useBoardDetail.5QRnV-IL.js";import{columns as be}from"./board.columns.WsqifR1f.js";import"./check.k9GSsCg0.js";const $e={class:"flex justify-between"},Ce={class:"grid gap-4 py-4"},De=["src"],ye={key:0,class:"flex flex-col gap-3"},xe={class:"text-xs"},Me={class:"flex items-end gap-1"},Fe={class:"bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"},Re=["innerHTML"],Te={class:"text-xs"},Ve=L({__name:"boardDetail",props:{isOpen:{type:Boolean}},emits:["update:open"],setup(N,{emit:M}){const g=M,r=Q("boardDetail"),n=w(null);return W(()=>r.value,async()=>{var v,_,a,l;const{data:f}=await z(`/api/dcinside/${r.value.dc}/${r.value.num}?kr=${r.value.kr}`,"$9tuCSFDKGj");n.value=f.value,(_=(v=n.value)==null?void 0:v.comment)!=null&&_.comments&&(n.value.comment.comments=(l=(a=n.value)==null?void 0:a.comment)==null?void 0:l.comments.filter(k=>k.no!=0))}),(f,v)=>{const _=G,a=J,l=K,k=Z,F=q;return t(),h(F,{"onUpdate:open":v[0]||(v[0]=b=>g("update:open")),open:f.isOpen},{default:o(()=>[s(k,{class:"w-5/6 max-h-192 overflow-y-scroll"},{default:o(()=>{var b,$,C,R,S;return[s(l,null,{default:o(()=>[s(_,null,{default:o(()=>{var i;return[V(m((i=e(r))==null?void 0:i.title),1)]}),_:1}),s(a,null,{default:o(()=>{var i,x,B,T,H;return[c("div",$e,[c("div",null,m((i=e(r))==null?void 0:i.writer)+" "+m((x=e(r))==null?void 0:x.date),1),c("div",null," 조회 "+m((B=e(r))==null?void 0:B.count)+" 추천 "+m((T=e(r))==null?void 0:T.recommend)+" 댓글 "+m((H=e(n))==null?void 0:H.comment.total_cnt),1)])]}),_:1})]),_:1}),c("div",Ce,[(t(!0),p(y,null,D((b=e(n))==null?void 0:b.images,i=>(t(),p("img",{src:("replaceDomain"in f?f.replaceDomain:e(j))(i).replace(/co\.kr/g,"com")},null,8,De))),256)),V(" "+m(($=e(n))==null?void 0:$.content),1)]),((C=e(n))==null?void 0:C.comment.total_cnt)>0?(t(),p("div",ye,[c("div",null,"전체 댓글 "+m((R=e(n))==null?void 0:R.comment.total_cnt)+"개",1),(t(!0),p(y,null,D((S=e(n))==null?void 0:S.comment.comments,i=>(t(),p("div",{class:X(["flex flex-col gap-1",{"ml-4":i.depth==1}])},[c("p",xe,m(i.user_id)+"("+m(i.name)+")",1),c("div",Me,[c("div",Fe,[c("div",{innerHTML:("replaceDomain"in f?f.replaceDomain:e(j))(i.memo).replace(/co\.kr/g,"com")},null,8,Re)]),c("p",Te,m(i.reg_date),1)])],2))),256))])):P("",!0)]}),_:1})]),_:1},8,["open"])}}}),Se={class:"flex-1 text-sm text-muted-foreground"},Be={class:"flex items-center py-4"},He={class:"border rounded-md"},Ue=L({__name:"DataTable",props:{columns:{},data:{}},emits:["rowClick"],setup(N,{emit:M}){const g=N,r=w([]),n=w([]),f=w({}),v=w({}),_=M,a=ie({get data(){return g.data},get columns(){return g.columns},getCoreRowModel:ce(),getSortedRowModel:de(),onSortingChange:l=>I(l,r),onColumnFiltersChange:l=>I(l,n),getFilteredRowModel:ue(),onColumnVisibilityChange:l=>I(l,f),onRowSelectionChange:l=>I(l,v),state:{get sorting(){return r.value},get columnFilters(){return n.value},get columnVisibility(){return f.value},get rowSelection(){return v.value}}});return(l,k)=>{var O;const F=ne,b=ae,$=se,C=me,R=le,S=re,i=_e,x=pe,B=fe,T=ge,H=ve,A=he;return t(),p("div",null,[c("div",Se,m(e(a).getFilteredSelectedRowModel().rows.length)+" of "+m(e(a).getFilteredRowModel().rows.length)+" row(s) selected. ",1),c("div",Be,[s(F,{class:"max-w-sm",placeholder:"Filter title...","model-value":(O=e(a).getColumn("title"))==null?void 0:O.getFilterValue(),"onUpdate:modelValue":k[0]||(k[0]=d=>{var u;return(u=e(a).getColumn("title"))==null?void 0:u.setFilterValue(d)})},null,8,["model-value"]),s(S,null,{default:o(()=>[s($,{"as-child":""},{default:o(()=>[s(b,{variant:"outline",class:"ml-auto"},{default:o(()=>[V(" Columns "),s(e(we),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),s(R,{align:"end"},{default:o(()=>[(t(!0),p(y,null,D(e(a).getAllColumns().filter(d=>d.getCanHide()),d=>(t(),h(C,{key:d.id,class:"capitalize",checked:d.getIsVisible(),"onUpdate:checked":u=>{d.toggleVisibility(!!u)}},{default:o(()=>[V(m(d.id),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))]),_:1})]),_:1})]),c("div",He,[s(A,null,{default:o(()=>[s(B,null,{default:o(()=>[(t(!0),p(y,null,D(e(a).getHeaderGroups(),d=>(t(),h(x,{key:d.id},{default:o(()=>[(t(!0),p(y,null,D(d.headers,u=>(t(),h(i,{key:u.id},{default:o(()=>[u.isPlaceholder?P("",!0):(t(),h(e(E),{key:0,render:u.column.columnDef.header,props:u.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),s(H,null,{default:o(()=>{var d;return[(d=e(a).getRowModel().rows)!=null&&d.length?(t(!0),p(y,{key:0},D(e(a).getRowModel().rows,u=>(t(),h(x,{key:u.id,"data-state":u.getIsSelected()?"selected":void 0,class:"cursor-pointer hover:bg-gray-100",onClick:U=>_("rowClick",u)},{default:o(()=>[(t(!0),p(y,null,D(u.getVisibleCells(),U=>(t(),h(T,{key:U.id},{default:o(()=>[s(e(E),{render:U.column.columnDef.cell,props:U.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state","onClick"]))),128)):(t(),h(x,{key:1},{default:o(()=>[s(T,{colSpan:l.columns.length,class:"h-24 text-center"},{default:o(()=>[V(" No results. ")]),_:1},8,["colSpan"])]),_:1}))]}),_:1})]),_:1})])])}}}),Ie={class:"p-4"},Ne=["src"],Oe={key:0},Xe={__name:"[kr]",setup(N){const M=Y(),g=w({kr:"",img:""}),r=w([]);w();const n=w(!1);ee(async()=>{g.value=te(String(M.params.kr)),setTimeout(()=>{f()})});async function f(){const{data:_,error:a}=await z(`/api/dcinside/${g.value.dc}`,"$V3MkpprZ2e");_.value&&(r.value=_.value)}function v(_){n.value=!0,ke().value={..._.original,...g.value}}return(_,a)=>{var b,$,C;const l=Ve,k=oe,F=Ue;return t(),p("div",Ie,[s(l,{isOpen:e(n),"onUpdate:open":a[0]||(a[0]=R=>n.value=!1)},null,8,["isOpen"]),s(k,{title:(b=e(g))==null?void 0:b.kr,description:`${($=e(g))==null?void 0:$.kr}의 게시판 입니다`},null,8,["title","description"]),c("div",null,[c("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:(C=e(g))==null?void 0:C.img},null,8,Ne)]),_.pending?(t(),p("div",Oe,"조회중 ...")):(t(),h(F,{key:2,columns:e(be),data:e(r),onRowClick:v},null,8,["columns","data"]))])}}};export{Xe as default};