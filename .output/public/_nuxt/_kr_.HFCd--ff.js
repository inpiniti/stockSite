import{_ as J,a as K,b as q,c as Q,d as W}from"./DialogContent.vue.7MU5ItPA.js";import{f as z,j as A,r as h,A as X,o as t,y as w,w as o,b as s,d as S,t as m,i as e,a as c,c as p,D,F as y,E as Y,G as E,a8 as j,a9 as Z,g as ee,a4 as te}from"./entry.gsRA_R3H.js";import{u as G}from"./fetch.WmESyQx6.js";import{r as I}from"./book.Jn-fh3Jt.js";import{_ as oe}from"./Header.vue.06_aBBVv.js";import{_ as ne}from"./Input.vue.A7vKTKti.js";import{_ as ae}from"./index.59y7CFoV.js";import{_ as se,a as le,b as re}from"./DropdownMenuContent.vue.QRp1WKSU.js";import{u as ie,F as L,_ as ce,a as de,b as ue,c as me,d as _e,e as pe,f as fe,g as ge,h as ve,i as we}from"./index.P9vP4PfW.js";import{C as he}from"./chevron-down.6R8RAWpZ.js";import{columns as ke}from"./board.columns.WsqifR1f.js";import"./check.PPS_hzj3.js";const $e={class:"flex justify-between"},Ce={class:"grid gap-4 py-4"},be=["src"],De={key:0,class:"flex flex-col gap-3"},ye={class:"text-xs"},xe={class:"flex items-end gap-1"},Me={class:"bg-neutral-100 rounded-md px-2 py-1 text-sm w-fit"},Re=["innerHTML"],Fe={class:"text-xs"},Te=z({__name:"boardDetail",props:{isOpen:{type:Boolean}},emits:["update:open"],setup(N,{emit:M}){const g=M,r=A("boardDetail"),n=h(null);return X(()=>r.value,async()=>{var v,_,a,l;const{data:f}=await G(`/api/dcinside/${r.value.dc}/${r.value.num}?kr=${r.value.kr}`,"$9tuCSFDKGj");n.value=f.value,(_=(v=n.value)==null?void 0:v.comment)!=null&&_.comments&&(n.value.comment.comments=(l=(a=n.value)==null?void 0:a.comment)==null?void 0:l.comments.filter(k=>k.no!=0))}),(f,v)=>{const _=J,a=K,l=q,k=Q,R=W;return t(),w(R,{"onUpdate:open":v[0]||(v[0]=$=>g("update:open")),open:f.isOpen},{default:o(()=>[s(k,{class:"w-5/6 max-h-192 overflow-y-scroll"},{default:o(()=>{var $,C,b,F,V;return[s(l,null,{default:o(()=>[s(_,null,{default:o(()=>{var i;return[S(m((i=e(r))==null?void 0:i.title),1)]}),_:1}),s(a,null,{default:o(()=>{var i,x,B,T,H;return[c("div",$e,[c("div",null,m((i=e(r))==null?void 0:i.writer)+" "+m((x=e(r))==null?void 0:x.date),1),c("div",null," 조회 "+m((B=e(r))==null?void 0:B.count)+" 추천 "+m((T=e(r))==null?void 0:T.recommend)+" 댓글 "+m((H=e(n))==null?void 0:H.comment.total_cnt),1)])]}),_:1})]),_:1}),c("div",Ce,[(t(!0),p(y,null,D(($=e(n))==null?void 0:$.images,i=>(t(),p("img",{src:("replaceDomain"in f?f.replaceDomain:e(I))(i).replace(/co\.kr/g,"com")},null,8,be))),256)),S(" "+m((C=e(n))==null?void 0:C.content),1)]),((b=e(n))==null?void 0:b.comment.total_cnt)>0?(t(),p("div",De,[c("div",null,"전체 댓글 "+m((F=e(n))==null?void 0:F.comment.total_cnt)+"개",1),(t(!0),p(y,null,D((V=e(n))==null?void 0:V.comment.comments,i=>(t(),p("div",{class:Y(["flex flex-col gap-1",{"ml-4":i.depth==1}])},[c("p",ye,m(i.user_id)+"("+m(i.name)+")",1),c("div",xe,[c("div",Me,[c("div",{innerHTML:("replaceDomain"in f?f.replaceDomain:e(I))(i.memo).replace(/co\.kr/g,"com")},null,8,Re)]),c("p",Fe,m(i.reg_date),1)])],2))),256))])):E("",!0)]}),_:1})]),_:1},8,["open"])}}}),Se={class:"flex-1 text-sm text-muted-foreground"},Ve={class:"flex items-center py-4"},Be={class:"border rounded-md"},He=z({__name:"DataTable",props:{columns:{},data:{}},emits:["rowClick"],setup(N,{emit:M}){const g=N,r=h([]),n=h([]),f=h({}),v=h({}),_=M,a=ie({get data(){return g.data},get columns(){return g.columns},getCoreRowModel:ge(),getSortedRowModel:ve(),onSortingChange:l=>j(l,r),onColumnFiltersChange:l=>j(l,n),getFilteredRowModel:we(),onColumnVisibilityChange:l=>j(l,f),onRowSelectionChange:l=>j(l,v),state:{get sorting(){return r.value},get columnFilters(){return n.value},get columnVisibility(){return f.value},get rowSelection(){return v.value}}});return(l,k)=>{var O;const R=ne,$=ae,C=se,b=ce,F=le,V=re,i=de,x=ue,B=me,T=_e,H=pe,P=fe;return t(),p("div",null,[c("div",Se,m(e(a).getFilteredSelectedRowModel().rows.length)+" of "+m(e(a).getFilteredRowModel().rows.length)+" row(s) selected. ",1),c("div",Ve,[s(R,{class:"max-w-sm",placeholder:"Filter title...","model-value":(O=e(a).getColumn("title"))==null?void 0:O.getFilterValue(),"onUpdate:modelValue":k[0]||(k[0]=d=>{var u;return(u=e(a).getColumn("title"))==null?void 0:u.setFilterValue(d)})},null,8,["model-value"]),s(V,null,{default:o(()=>[s(C,{"as-child":""},{default:o(()=>[s($,{variant:"outline",class:"ml-auto"},{default:o(()=>[S(" Columns "),s(e(he),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),s(F,{align:"end"},{default:o(()=>[(t(!0),p(y,null,D(e(a).getAllColumns().filter(d=>d.getCanHide()),d=>(t(),w(b,{key:d.id,class:"capitalize",checked:d.getIsVisible(),"onUpdate:checked":u=>{d.toggleVisibility(!!u)}},{default:o(()=>[S(m(d.id),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))]),_:1})]),_:1})]),c("div",Be,[s(P,null,{default:o(()=>[s(B,null,{default:o(()=>[(t(!0),p(y,null,D(e(a).getHeaderGroups(),d=>(t(),w(x,{key:d.id},{default:o(()=>[(t(!0),p(y,null,D(d.headers,u=>(t(),w(i,{key:u.id},{default:o(()=>[u.isPlaceholder?E("",!0):(t(),w(e(L),{key:0,render:u.column.columnDef.header,props:u.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),s(H,null,{default:o(()=>{var d;return[(d=e(a).getRowModel().rows)!=null&&d.length?(t(!0),p(y,{key:0},D(e(a).getRowModel().rows,u=>(t(),w(x,{key:u.id,"data-state":u.getIsSelected()?"selected":void 0,class:"cursor-pointer hover:bg-gray-100",onClick:U=>_("rowClick",u)},{default:o(()=>[(t(!0),p(y,null,D(u.getVisibleCells(),U=>(t(),w(T,{key:U.id},{default:o(()=>[s(e(L),{render:U.column.columnDef.cell,props:U.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state","onClick"]))),128)):(t(),w(x,{key:1},{default:o(()=>[s(T,{colSpan:l.columns.length,class:"h-24 text-center"},{default:o(()=>[S(" No results. ")]),_:1},8,["colSpan"])]),_:1}))]}),_:1})]),_:1})])])}}}),Ue=()=>A("boardDetail"),je={class:"p-4"},Ne=["src"],Oe={key:0},Xe={__name:"[kr]",setup(N){const M=Z(),g=h({kr:"",img:""}),r=h([]);h();const n=h(!1);ee(async()=>{g.value=te(String(M.params.kr)),setTimeout(()=>{f()})});async function f(){const{data:_,error:a}=await G(`/api/dcinside/${g.value.dc}`,"$sL9RwvJxlR");_.value&&(r.value=_.value)}function v(_){n.value=!0,Ue().value={..._.original,...g.value}}return(_,a)=>{var $,C,b;const l=Te,k=oe,R=He;return t(),p("div",je,[s(l,{isOpen:e(n),"onUpdate:open":a[0]||(a[0]=F=>n.value=!1)},null,8,["isOpen"]),s(k,{title:($=e(g))==null?void 0:$.kr,description:`${(C=e(g))==null?void 0:C.kr}의 게시판 입니다`},null,8,["title","description"]),c("div",null,[c("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:(b=e(g))==null?void 0:b.img},null,8,Ne)]),_.pending?(t(),p("div",Oe,"조회중 ...")):(t(),w(R,{key:2,columns:e(ke),data:e(r),onRowClick:v},null,8,["columns","data"]))])}}};export{Xe as default};
