import{_ as U,a as K,b as Q,c as J,d as X,e as Z}from"./SelectScrollDownButton.vue.Yq9hDBSI.js";import{_ as ce}from"./SelectLabel.vue.2x73HX3l.js";import{_ as ee}from"./Separator.vue.K9dKYU0L.js";import{_ as de}from"./book.vue.p879GGy6.js";import{_ as te}from"./index.jI9725Rl.js";import{h as L}from"./moment.WSJ9un1t.js";import{bK as ue,M as $,aM as g,q as D,aE as p,u as w,v as t,I as e,bx as o,H as u,b3 as _,bc as f,af as _e,bF as F,aR as N,s as z,t as I,ao as A,dd as fe,am as O,bH as V,de as pe,aQ as q,df as me,dg as ve,cq as he,bE as be,F as G,aP as R,cf as oe,dh as xe,di as ke,bJ as ge,cr as se,cv as we,h as ae,ax as $e,bs as ye,bG as W,ap as Be,a3 as ze,dj as Ye,dk as Se}from"./entry.kujcSJSR.js";import{_ as le}from"./index.OJ-2ErZz.js";import{u as Ce}from"./useBook.MJQSOsm7.js";import{a as je,b as Le,_ as Me}from"./TabsList.vue.53s7DoXi.js";import{_ as De}from"./TabsContent.vue.p7uD4HvB.js";import{_ as Pe}from"./nuxt-link.dvJ0U-Aa.js";import{u as ne}from"./useBoardDetail.wMjpaAc5.js";import{t as Te}from"./book.Jn-fh3Jt.js";import{f as Ie}from"./index.gsOVgP4H.js";import"./chevron-down.n1oKhSMw.js";import"./check.N_BZobwu.js";import"./DialogContent.vue.a-1XCd2n.js";import"./DialogFooter.vue.KlUNe-An.js";import"./Label.vue.HhelblZf.js";import"./Input.vue.U_W0-rrI.js";/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=ue("GripVerticalIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]),Ve={class:"flex gap-2 justify-between"},qe={class:"flex gap-2 items-center"},Ge={class:"font-semibold whitespace-nowrap"},Re=$({__name:"DateSelection",emits:["change"],setup(v,{emit:c}){const n=c,l=g("week"),s=g(L());function a(){n("change",{type:l.value,date:s.value})}const r=D(()=>{if(l.value==="month")return s.value.format("YYYY.MM");if(l.value==="year")return s.value.format("YYYY");if(l.value==="week")return s.value.format("YYYY.MM.DD")});function d(){l.value==="week"?s.value=s.value.clone().subtract(1,"weeks"):l.value==="month"?s.value=s.value.clone().subtract(1,"months"):l.value==="year"&&(s.value=s.value.clone().subtract(1,"years")),a()}function k(){l.value==="week"?s.value=s.value.clone().add(1,"weeks"):l.value==="month"?s.value=s.value.clone().add(1,"months"):l.value==="year"&&(s.value=s.value.clone().add(1,"years")),a()}return(h,i)=>{const m=te,B=U,S=K,b=Q,x=J,y=X,Y=Z;return p(),w("div",Ve,[t("div",qe,[e(m,{variant:"outline",size:"sm",onClick:d},{default:o(()=>[u("<")]),_:1}),e(m,{variant:"outline",size:"sm",onClick:k},{default:o(()=>[u(">")]),_:1}),t("div",Ge,_(f(r)),1)]),e(Y,{modelValue:f(l),"onUpdate:modelValue":[i[0]||(i[0]=j=>_e(l)?l.value=j:null),a]},{default:o(()=>[e(S,{class:"w-[100px]"},{default:o(()=>[e(B,{placeholder:"Select"})]),_:1}),e(y,null,{default:o(()=>[e(x,null,{default:o(()=>[e(b,{value:"week"},{default:o(()=>[u("주")]),_:1}),e(b,{value:"month"},{default:o(()=>[u("월")]),_:1}),e(b,{value:"year"},{default:o(()=>[u("년")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),He={class:"flex gap-2 justify-between items-center"},Ee={class:"grow-[0] text-left font-semibold text-sm"},Fe={class:"text-xs text-left font-normal"},Ne={class:"shrink-0 text-xs"},Oe={class:"text-xs text-left overflow-hidden overflow-ellipsis",style:{display:"-webkit-box","-webkit-line-clamp":"3","-webkit-box-orient":"vertical"}},We={class:"text-xs text-neutral-400 text-left overflow-hidden overflow-ellipsis",style:{display:"-webkit-box","-webkit-line-clamp":"3","-webkit-box-orient":"vertical"}},Ue={class:"flex justify-between items-end"},Ke={class:"flex flex-col justify-left text-xs text-left gap-1"},Qe={class:"flex gap-1"},Je=["href"],Xe=["href"],Ze={class:"w-fit flex gap-2 items-center"},et={class:"w-fit flex gap-2"},tt={class:"w-fit flex gap-2"},ot=$({__name:"Oricon",props:{book:{}},setup(v){const c=v,n=F();function l(){n.value=c.book}return(s,a)=>{const r=le,d=N("font-awesome-icon"),k=te;return s.book?(p(),w("div",{key:0,class:A(["flex w-full flex-col gap-1 border rounded-lg p-2 hover:bg-neutral-50 cursor-pointer",{"bg-neutral-100":f(n).id==s.book.id}]),onClick:l},[t("div",He,[t("div",Ee,[u(_(s.book.kr)+" "+_(s.book.booknum)+" ",1),t("div",Fe,_(s.book.jp),1)]),t("div",Ne,_(s.book.date),1)]),t("div",Oe,_(s.book.description),1),t("div",We,_(s.book.summary),1),t("div",Ue,[t("div",Ke,[t("div",Qe,[t("a",{href:`https://gall.dcinside.com/mgallery/board/lists/?id=${s.book.dc}`,target:"_blank",rel:"noopener noreferrer"},[s.book.dc?(p(),z(r,{key:0},{default:o(()=>[u("dc")]),_:1})):I("",!0)],8,Je),t("a",{href:`https://namu.wiki/w/${s.book.namu}`,target:"_blank",rel:"noopener noreferrer"},[s.book.namu?(p(),z(r,{key:0},{default:o(()=>[u("namu")]),_:1})):I("",!0)],8,Xe)]),t("div",Ze,[u(" 저자 "),e(r,{variant:"outline"},{default:o(()=>[u(_(s.book.author),1)]),_:1})]),t("div",et,[u(" 출판사 "),e(r,{variant:"outline"},{default:o(()=>[u(_(s.book.publisher),1)]),_:1})]),t("div",tt,[u(" 주간 판매량 "),e(r,{variant:"outline"},{default:o(()=>[u(_(s.book.sales),1)]),_:1})])]),e(k,{variant:"ghost",onClick:a[0]||(a[0]=h=>("useBook"in s?s.useBook:f(Ce))().openBook(s.book))},{default:o(()=>[e(d,{icon:["fas","ellipsis"]})]),_:1})])],2)):I("",!0)}}}),st=$({__name:"ScrollBar",props:{orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(v){const c=v;return(n,l)=>(p(),z(f(pe),O(c,{class:f(V)("flex touch-none select-none transition-colors",n.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",n.orientation==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",n.$attrs.class??"")}),{default:o(()=>[e(f(fe),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}}),at={"data-radix-scroll-area-viewport":"",class:"h-full w-full rounded-[inherit] overflow-y-scroll"},H=$({__name:"ScrollArea",props:{type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{},class:{default:""}},setup(v){const c=v;return(n,l)=>(p(),z(f(ve),{type:n.type,class:A(f(V)("relative overflow-hidden",c.class))},{default:o(()=>[t("div",at,[q(n.$slots,"default")]),e(st),e(f(me))]),_:3},8,["type","class"]))}}),lt={class:"grow-[1] overflow-hidden flex flex-col"},nt={class:"flex-1 flex flex-col gap-2 p-2"},rt=$({__name:"NavBooks",setup(v){const c=he(),n=be(),l=g("week"),s=g(new Date);g(!1);const a=D(()=>{if(l.value==="week"){const i=c.value.filter(m=>L(m.date).format("YYYY.WW")===L(s.value).format("YYYY.WW"));return d(i)}else if(l.value==="month"){const i=c.value.filter(m=>L(m.date).format("YYYY.MM")===L(s.value).format("YYYY.MM"));return d(i)}else if(l.value==="year"){const i=c.value.filter(m=>L(m.date).format("YYYY")===L(s.value).format("YYYY"));return d(i)}}),r=D(()=>Object.fromEntries(n.value.map(i=>[i.kr,i])));function d(i){return i==null?void 0:i.map(m=>{const B=r.value[m.kr];return B?{...m,...B}:{...m}})}function k(i){l.value=i.type,s.value=i.date}function h(){}return(i,m)=>{const B=de,S=Re,b=ee,x=ot,y=H;return p(),w("div",lt,[e(B,{"onUpdate:open":h}),e(S,{class:"p-2 shrink-0",onChange:k}),e(b),e(y,{class:"flex grow-[0]"},{default:o(()=>[t("div",nt,[(p(!0),w(G,null,R(f(a),(Y,j)=>(p(),w("div",{key:j},[e(x,{book:Y},null,8,["book"])]))),128))])]),_:1})])}}}),it=$({__name:"ResizablePanelGroup",props:{id:{},autoSaveId:{},direction:{},keyboardResizeBy:{},storage:{},asChild:{type:Boolean},as:{},class:{}},emits:["layout"],setup(v,{emit:c}){const n=v,l=c,s=D(()=>{const{class:r,...d}=n;return d}),a=oe(s,l);return(r,d)=>(p(),z(f(xe),O(f(a),{class:f(V)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",n.class)}),{default:o(()=>[q(r.$slots,"default")]),_:3},16,["class"]))}}),ct={key:0,class:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"},dt=$({__name:"ResizableHandle",props:{id:{},hitAreaMargins:{},tabindex:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{},withHandle:{type:Boolean}},emits:["dragging"],setup(v,{emit:c}){const n=v,l=c,s=D(()=>{const{class:r,...d}=n;return d}),a=oe(s,l);return(r,d)=>(p(),z(f(ke),O(f(a),{class:f(V)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90",n.class)}),{default:o(()=>[n.withHandle?(p(),w("div",ct,[e(f(Ae),{class:"h-2.5 w-2.5"})])):I("",!0)]),_:1},16,["class"]))}}),ut=()=>ge("paperback",()=>({})),_t={class:"flex-1 flex flex-col gap-2 p-2"},ft=["onClick"],pt={class:"h-32 w-24 rounded-md overflow-hidden relative"},mt=["src"],vt={class:"flex flex-col text-xs"},ht={class:"text-sm"},bt=t("div",{class:"flex gap-1 items-center"},[t("div",{class:"text-sm font-bold"},"5,400원"),t("span",{class:"text-neutral-400"},"배송 무료")],-1),xt=t("div",{class:"text-neutral-400 ring-1 ring-neutral-400 w-fit rounded-md px-1 my-1"}," 오늘출발 ",-1),kt=t("div",{class:"flex gap-2 items-center"},[t("div",{class:"text-neutral-400"},"inpiniti"),t("span",{class:"text-white font-semibold px-2 bg-green-400 rounded-full"},"naver pay")],-1),gt=t("div",{class:"flex gap-1 overflow-ellipsis"},[t("div",{class:"text-neutral-400 font-thin"},"배송"),u(" 오늘 "),t("div",{class:"text-neutral-400"},"15:00"),u(" 까지 주문 시 ")],-1),wt=$({__name:"bookList",setup(v){const c=se(),n=F(),l=ut(),s=D(()=>c.value.filter(r=>{var d;return console.log(r.kr),(d=r.kr)==null?void 0:d.includes(n.value.kr)}));function a(r){l.value=r}return(r,d)=>{const k=H;return p(),z(k,{class:"flex h-full"},{default:o(()=>[t("div",_t,[(p(!0),w(G,null,R(f(s),(h,i)=>(p(),w("div",{key:i,onClick:m=>a(h)},[t("div",{class:A(["flex border rounded-lg p-2 gap-2 cursor-pointer hover:bg-neutral-50",{"bg-neutral-100":f(l)==h}])},[t("div",pt,[t("img",{src:h.cover_image,class:"min-w-full min-h-full object-cover"},null,8,mt)]),t("div",vt,[t("div",ht,_(h.kr)+" "+_(h.booknum),1),bt,xt,kt,gt])],2)],8,ft))),128))])]),_:1})}}}),$t={class:"flex-1 flex flex-col gap-2 p-2"},yt={class:"flex border rounded-lg p-2 hover:bg-neutral-100 gap-2"},Bt={class:"flex w-full flex-col gap-1"},zt={class:"flex gap-2 justify-between items-center"},Yt={class:"grow-[0] text-left font-semibold text-sm"},St={class:"grow-[0] text-left font-semibold text-sm"},Ct=$({__name:"musicList",setup(v){const c=we();return(n,l)=>{const s=H;return p(),z(s,{class:"flex h-full"},{default:o(()=>[t("div",$t,[e(ae,{name:"list",appear:""},{default:o(()=>[(p(!0),w(G,null,R(f(c),a=>(p(),w("button",{key:a.id},[t("div",yt,[t("div",Bt,[t("div",zt,[t("div",Yt,_(a.kr),1),t("div",St,_(a.title)+" "+_(a.season)+"기 "+_(a.cool)+"쿨 ",1)])])])]))),128))]),_:1})])]),_:1})}}}),jt={class:"w-full p-4"},Lt={class:"flex gap-2"},Mt={class:"flex flex-col gap-2 grow-[0] w-full"},Dt={class:"flex gap-2 items-center text-sm"},Pt={class:"overflow-hidden whitespace-nowrap overflow-ellipsis"},Tt=t("div",null,"·",-1),It={style:{"pointer-events":"none"}},At={class:"font-semibold line-clamp-2"},Vt={class:"flex justify-between"},qt={class:"flex gap-1"},Gt={class:"flex gap-2 text-xs items-center justify-end shrink-0"},Rt={class:"text-sm"},Ht={class:"flex gap-1 items-center"},Et={class:"text-sm"},Ft={class:"flex gap-1 items-center"},Nt={class:"text-sm"},Ot=$({__name:"board",props:{board:{}},emits:["click"],setup(v,{emit:c}){const n=ne(),l=c,s=a=>{l("click",a)};return(a,r)=>{var h,i;const d=le,k=N("font-awesome-icon");return p(),w("div",{class:A(["flex rounded-lg overflow-hidden hover:bg-neutral-100 hover:text-black gap-2 cursor-pointer border",{"bg-neutral-100":((h=f(n))==null?void 0:h.id)==((i=a.board)==null?void 0:i.id)}]),onClick:r[1]||(r[1]=m=>s(a.board))},[t("div",jt,[t("div",Lt,[t("div",Mt,[t("div",Dt,[e(d,{class:"overflow-hidden whitespace-nowrap overflow-ellipsis max-w-24"},{default:o(()=>[u(_(a.board.kr),1)]),_:1}),t("div",Pt,_(a.board.writer),1),Tt,t("div",null,_(("timeAgo"in a?a.timeAgo:f(Te))(a.board.date)),1)]),t("div",It,[t("div",At,_(a.board.title),1)]),t("div",Vt,[t("div",qt,[e(d,{variant:"secondary"},{default:o(()=>[u(_(a.board.type),1)]),_:1}),e(d,{variant:"outline"},{default:o(()=>[u(_(a.board.subject),1)]),_:1})]),t("div",Gt,[t("div",{class:"flex gap-1 items-center",style:{"pointer-events":"auto"},onClick:r[0]||(r[0]=m=>s(a.board))},[e(k,{icon:["far","comment"]}),t("div",Rt,_(a.board.number),1)]),t("div",Ht,[e(k,{icon:["far","eye"]}),t("div",Et,_(a.board.count),1)]),t("div",Ft,[e(k,{icon:["fas","star"]}),t("div",Nt,_(a.board.recommend),1)])])])])])])],2)}}}),Wt={class:"flex-1 flex flex-col gap-2 p-2"},Ut={class:"flex border rounded-lg px-4 py-2 hover:bg-neutral-100 cursor-pointer items-center gap-2"},Kt=10,Qt=$({__name:"boardList",setup(v){const c=g(1),n=g(1),l=g(100),s=g(0),a=g(),r=g(),d=F(),k=g("date"),h=g([]),i=g([]),m=ne();$e(()=>{B()}),ye(()=>d.value,()=>{h.value=[],n.value=1,B()},{deep:!0});async function B(){var T;let b=W().value.from("board").select().neq("link",null).range((n.value-1)*l.value,n.value*l.value-1),x=W().value.from("board").select("*",{count:"exact",head:!0}).neq("link",null);if(a.value&&a.value!="all"&&(b=b.ilike("subject",`%${a.value}%`),x=x.ilike("subject",`%${a.value}%`)),(T=d.value)!=null&&T.kr&&(b=b.eq("kr",d.value.kr),x=x.eq("kr",d.value.kr)),r.value){console.log(r.value);const M=Ie(r.value,"yyyy-MM-dd");b=b.gte("date",`${M}T00:00:00`).lte("date",`${M}T23:59:59`),x=x.gte("date",`${M}T00:00:00`).lte("date",`${M}T23:59:59`)}const{data:y,error:Y}=await b.order(k.value,{ascending:!1});Y?console.error(Y):(i.value=y??[],h.value=[...h.value,...i.value.slice(0,c.value*Kt)]);const{data:j,error:C,status:P,count:E}=await x;C?console.error(C):s.value=E||0}async function S(b){m.value=b}return(b,x)=>{const y=N("font-awesome-icon"),Y=Ot,j=H;return p(),z(j,{class:"flex h-full"},{default:o(()=>[t("div",Wt,[e(ae,{name:"list",appear:""},{default:o(()=>[t("div",Ut,[e(y,{icon:["fas","pen"]}),u(" 글 쓰기 ")]),(p(!0),w(G,null,R(f(i),(C,P)=>(p(),w("div",{key:P},[e(Y,{board:C,onClick:S},null,8,["board"])]))),128))]),_:1})])]),_:1})}}}),Jt={class:"flex h-full items-center justify-center bg-neutral-100"},Xt=t("div",{class:"flex flex-col gap-2 p-2"},"아직 개발중에 있습니다",-1),Zt=[Xt],eo=$({__name:"figureList",setup(v){return se(),(c,n)=>(p(),w("div",Jt,Zt))}}),to=$({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(v){const c=v;return(n,l)=>(p(),z(f(Ye),Be(ze(c)),{default:o(()=>[q(n.$slots,"default")]),_:3},16))}}),oo={class:"pl-4 p-2 shrink-0"},so={class:"flex items-center justify-between"},ao=t("div",{class:"font-bold text-xl"},"Inpiniti",-1),lo={class:"flex items-center px-4 py-2 shrink-0"},no=t("h1",{class:"text-xl font-bold"},"Inbox",-1),ro={class:"grow-[0] h-full overflow-hidden flex flex-col"},io={class:"h-screen overflow-hidden flex flex-col"},co={class:"pl-4 p-2 shrink-0"},uo={class:"flex items-center justify-between"},_o=t("div",{class:"font-bold text-xl"},"Inpiniti",-1),fo={class:"grow-[0] overflow-hidden"},po=4,Io=$({__name:"mail",setup(v){const c=[300,200,800];return(n,l)=>{const s=U,a=K,r=ce,d=Q,k=J,h=X,i=Z,m=ee,B=rt,S=Se,b=dt,x=je,y=Pe,Y=Le,j=wt,C=De,P=Ct,E=Qt,T=eo,M=Me,re=it,ie=to;return p(),z(ie,{"delay-duration":0},{default:o(()=>[e(re,{id:"resize-panel-group-1",direction:"horizontal",class:"h-full items-stretch"},{default:o(()=>[e(S,{id:"resize-panel-1","default-size":c[0],"collapsed-size":po,collapsible:"",class:"h-screen flex flex-col min-w-[250px] max-w-[350px]"},{default:o(()=>[t("div",oo,[t("div",so,[ao,e(i,null,{default:o(()=>[e(a,{class:"w-fit"},{default:o(()=>[e(s,{placeholder:"select"})]),_:1}),e(h,null,{default:o(()=>[e(k,null,{default:o(()=>[e(r,null,{default:o(()=>[u("Fruits")]),_:1}),e(d,{value:"apple"},{default:o(()=>[u(" Apple ")]),_:1})]),_:1})]),_:1})]),_:1})])]),e(m),e(B)]),_:1},8,["default-size"]),e(b,{id:"resize-handle-1","with-handle":""}),e(S,{id:"resize-panel-2",class:"min-w-[400px] max-w-[400px]","default-size":c[1]},{default:o(()=>[e(M,{class:"h-screen overflow-hidden flex flex-col","default-value":"book"},{default:o(()=>[t("div",lo,[no,e(Y,{class:"ml-auto"},{default:o(()=>[e(y,{to:"/book"},{default:o(()=>[e(x,{value:"book",class:"text-zinc-600 dark:text-zinc-200"},{default:o(()=>[u(" 도서 ")]),_:1})]),_:1}),e(y,{to:"/music"},{default:o(()=>[e(x,{value:"music",class:"text-zinc-600 dark:text-zinc-200"},{default:o(()=>[u(" 음악 ")]),_:1})]),_:1}),e(y,{to:"/board/read"},{default:o(()=>[e(x,{value:"board",class:"text-zinc-600 dark:text-zinc-200"},{default:o(()=>[u(" 게시판 ")]),_:1})]),_:1}),e(y,{to:"/figure"},{default:o(()=>[e(x,{value:"figure",class:"text-zinc-600 dark:text-zinc-200"},{default:o(()=>[u(" 피규어 ")]),_:1})]),_:1})]),_:1})]),e(m),t("div",ro,[e(C,{value:"book",class:"m-0 overflow-hidden"},{default:o(()=>[e(j)]),_:1}),e(C,{value:"music",class:"m-0 overflow-hidden"},{default:o(()=>[e(P)]),_:1}),e(C,{value:"board",class:"m-0 overflow-hidden"},{default:o(()=>[e(E)]),_:1}),e(C,{value:"figure",class:"m-0 overflow-hidden h-full"},{default:o(()=>[e(T)]),_:1})])]),_:1})]),_:1},8,["default-size"]),e(b,{id:"resiz-handle-2","with-handle":""}),e(S,{id:"resize-panel-3","default-size":c[2]},{default:o(()=>[t("div",io,[t("div",co,[t("div",uo,[_o,e(i,null,{default:o(()=>[e(a,{class:"w-fit"},{default:o(()=>[e(s,{placeholder:"select"})]),_:1}),e(h,null,{default:o(()=>[e(k,null,{default:o(()=>[e(r,null,{default:o(()=>[u("Fruits")]),_:1}),e(d,{value:"apple"},{default:o(()=>[u(" Apple ")]),_:1})]),_:1})]),_:1})]),_:1})])]),e(m),t("div",fo,[q(n.$slots,"default")])])]),_:3},8,["default-size"])]),_:3})]),_:3})}}});export{Io as default};