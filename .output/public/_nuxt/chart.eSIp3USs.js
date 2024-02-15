import{_ as Z,a as b,b as ee,c as se,d as le}from"./DialogContent.vue.ybQurYsA.js";import{_ as te}from"./index.k1f0FSOJ.js";import{f as J,o as r,J as L,w as i,b as c,a as e,d as y,t as o,c as _,i as v,aq as ne,Q as A,F as B,O as T,G as ae,K as oe,a4 as ie,as as re,r as h,C as ue,g as ce,at as de,T as _e,u as H,au as ve}from"./entry.0rB_JXnC.js";import{_ as fe}from"./Header.vue.c5skSzBC.js";import{_ as me,a as pe,b as ge}from"./TabsList.vue.Y_ZdOL0p.js";import{g as V}from"./book.Jn-fh3Jt.js";import{u as he}from"./fetch.N4WHTgiN.js";const we={class:"flex flex-col gap-4"},xe={class:"flex gap-4"},ke=["src"],ye={class:"flex flex-col gap-4"},$e=e("div",{class:"text-sm font-bold"},"kr",-1),Be=e("div",{class:"text-sm font-bold"},"jp",-1),Ce={key:0,class:"flex flex-col gap-1"},je=e("div",{class:"text-sm font-bold"},"게시판으로",-1),De={class:"flex flex-col gap-1"},Te={class:"text-3xl font-bold"},Ge=J({__name:"namuWiki",props:{open:{type:Boolean},wiki:{},selectedBook:{}},emits:["update:open"],setup(N,{emit:d}){const $=d;return(u,p)=>{const w=Z,x=b,f=ee,C=te,G=se,k=le;return r(),L(k,{open:u.open,"onUpdate:open":p[1]||(p[1]=m=>$("update:open"))},{default:i(()=>[c(G,{class:"w-full max-w-7xl h-5/6 overflow-y-scroll"},{default:i(()=>[e("div",we,[c(f,null,{default:i(()=>[c(w,null,{default:i(()=>[y("만화 상세")]),_:1}),c(x,null,{default:i(()=>[y(" 해당 내용은 나무위키에서 발췌한 것입니다. ")]),_:1})]),_:1}),e("div",xe,[e("img",{src:u.selectedBook.img,class:"h-56 w-fit object-cover overflow-hidden rounded-md"},null,8,ke),e("div",ye,[e("div",null,[$e,e("div",null,o(u.selectedBook.kr),1)]),e("div",null,[Be,e("div",null,o(u.selectedBook.jp),1)]),u.selectedBook.dc?(r(),_("div",Ce,[je,c(C,{variant:"outline",onClick:p[0]||(p[0]=m=>("navigateTo"in u?u.navigateTo:v(ne))(`/book/board/${u.selectedBook.kr}`))},{default:i(()=>[y(o(u.selectedBook.kr)+" 게시판으로 이동 ",1)]),_:1})])):A("",!0)])]),(r(!0),_(B,null,T(u.wiki,(m,q)=>(r(),_("div",De,[e("div",Te,o(q+1)+". "+o(m==null?void 0:m.title),1),e("div",null,o(m==null?void 0:m.content),1)]))),256))])]),_:1})]),_:1},8,["open"])}}}),qe=J({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(N){const d=N;return($,u)=>(r(),L(v(re),oe({class:v(ie)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",d.class)},d),{default:i(()=>[ae($.$slots,"default")]),_:3},16,["class"]))}}),Se={class:"flex flex-col p-4 gap-4 w-full"},Ve={class:"flex-col flex gap-4"},Le={class:"w-full flex flex-col gap-1"},Ne=e("div",null,[e("div",{class:"font-bold text-3xl"},"시리즈"),e("div",null,"시리즈의 전체 판매량 누적")],-1),We={class:"border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"},Fe={key:0},Ue=["onClick"],He={class:"shrink-0"},Je=["src"],Ke={class:"grow-[1]"},Me={class:"font-bold"},Oe={class:"font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},Ee={class:"text-xs"},Pe={class:"w-full flex flex-col gap-1"},Qe=e("div",null,[e("div",{class:"font-bold text-3xl"},"단행본"),e("div",null,"단행본 전체 판매량 누적")],-1),Re={class:"border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"},Ye={key:0},ze={class:"flex flex-col w-40"},Ae={class:"shrink-0"},Ie=["src"],Xe={class:"grow-[1]"},Ze={class:"font-bold"},be={class:"font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},es={class:"text-xs"},us=J({__name:"chart",setup(N){const d=h("all");async function $(s){d.value=s,await m(),await q(),await K(),C.value=[{title:"week",단행본:p.value.data,시리즈:f.value.series},{title:"month",단행본:w.value.data,시리즈:f.value.week},{title:"year",단행본:x.value.data,시리즈:f.value.year}]}const u=h(V()),p=h({data:[],error:""}),w=h({data:[],error:""}),x=h({data:[],error:""}),f=h({series:{},week:{},year:{}}),C=h([{title:"week",단행본:[],시리즈:[]},{title:"month",단행본:[],시리즈:[]},{title:"year",단행본:[],시리즈:[]}]),G=h({}),k=ue(()=>d.value==="all"?[]:ve(d.value).map(s=>s.kr));async function m(){let s=H().value.from("book").select().order("sales",{ascending:!1});k.value.length>0&&(s=s.in("kr",k.value)),p.value.data.length===0?s=s.eq("date",V(1)):s=s.eq("date",u.value),p.value=await s,f.value.series=W(p.value.data)}async function q(){let s=H().value.from("book").select().gte("date",V(4)).lte("date",u.value).order("sales",{ascending:!1});k.value.length>0&&(s=s.in("kr",k.value)),w.value=await s,w.value.data=M(w.value.data),f.value.week=W(w.value.data)}async function K(){let s=H().value.from("book").select().gte("date",V(52)).lte("date",u.value).order("sales",{ascending:!1});k.value.length>0&&(s=s.in("kr",k.value)),x.value=await s,x.value.data=M(x.value.data),f.value.year=W(x.value.data)}function M(s){return O(s.reduce((a,n)=>(a.find(g=>g.jp===n.jp&&g.booknum===n.booknum)||a.push({jp:n.jp,booknum:n.booknum,kr:n.kr,img:n.img,sales:n.sales,dc:n.dc}),a),[]))}function W(s){return O(s.reduce((a,n)=>{const j=a.find(g=>g.jp===n.jp);return j?j.sales+=n.sales:a.push({jp:n.jp,kr:n.kr,img:n.img,sales:n.sales,dc:n.dc}),a},[]))}function O(s){return s.sort((a,n)=>n.sales-a.sales)}ce(async()=>{await m(),await q(),await K(),C.value=[{title:"week",단행본:p.value.data,시리즈:f.value.series},{title:"month",단행본:w.value.data,시리즈:f.value.week},{title:"year",단행본:x.value.data,시리즈:f.value.year}]});const S=h(!1),E=h([]);async function I(s){G.value=s;const a=s.kr,{data:n}=await he(`/api/namuWiki/${a}`,"$sGCsx3DkoJ");E.value=n.value,S.value=!0}return(s,a)=>{const n=Ge,j=fe,g=me,P=pe,Q=ge,X=qe;return r(),_(B,null,[c(n,{open:v(S),wiki:v(E),selectedBook:v(G),"onUpdate:open":a[0]||(a[0]=l=>S.value=!v(S))},null,8,["open","wiki","selectedBook"]),e("div",Se,[c(j,{title:"책 차트",description:"책의 차트를 보여줍니다."}),c(Q,{class:"w-full overflow-x-scroll",modelValue:v(d),"onUpdate:modelValue":a[2]||(a[2]=l=>_e(d)?d.value=l:null)},{default:i(()=>[c(P,null,{default:i(()=>[c(g,{value:"all",onClick:a[1]||(a[1]=l=>$("all"))},{default:i(()=>[y(" 전체 ")]),_:1}),(r(!0),_(B,null,T(("uniqueGenreByGenre"in s?s.uniqueGenreByGenre:v(de))(),l=>(r(),L(g,{value:l.genre_name,onClick:F=>$(l.genre_name)},{default:i(()=>[y(o(l.genre_name),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["modelValue"]),c(Q,{"default-value":"month",class:"w-full"},{default:i(()=>[c(P,null,{default:i(()=>[c(g,{value:"week"},{default:i(()=>[y(" 이번주 ")]),_:1}),c(g,{value:"month"},{default:i(()=>[y(" 4주간 ")]),_:1}),c(g,{value:"year"},{default:i(()=>[y(" 1년간 ")]),_:1})]),_:1}),(r(!0),_(B,null,T(v(C),l=>(r(),L(X,{value:l.title},{default:i(()=>{var F,R,Y,z;return[e("div",Ve,[e("div",Le,[Ne,e("div",We,[((F=l==null?void 0:l.시리즈)==null?void 0:F.length)==0?(r(),_("div",Fe,o(l.title=="week"?"이번주":l.title=="month"?"한달간":"1년간")+"의 "+o(v(d))+" 장르의 시리즈에 집계된 데이터가 없습니다. ",1)):(r(!0),_(B,{key:1},T((R=l==null?void 0:l.시리즈)==null?void 0:R.slice(0,20),(t,U)=>{var D;return r(),_("div",null,[e("div",{class:"flex flex-col w-40 cursor-pointer",onClick:ss=>I(t)},[e("div",He,[e("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:t==null?void 0:t.img},null,8,Je)]),e("div",Ke,[e("div",null,[e("div",Me,o(U+1)+" 위",1)]),e("div",null,[e("div",Oe,o(t==null?void 0:t.kr),1)]),e("div",Ee," 판매량 "+o((D=t==null?void 0:t.sales)==null?void 0:D.toLocaleString()),1)])],8,Ue)])}),256))])]),e("div",Pe,[Qe,e("div",Re,[((Y=l==null?void 0:l.단행본)==null?void 0:Y.length)==0?(r(),_("div",Ye,o(l.title=="week"?"이번주":l.title=="month"?"한달간":"1년간")+"의 "+o(v(d))+" 장르의 단행본에 집계된 데이터가 없습니다. ",1)):A("",!0),(r(!0),_(B,null,T((z=l==null?void 0:l.단행본)==null?void 0:z.slice(0,20),(t,U)=>{var D;return r(),_("div",null,[e("div",ze,[e("div",Ae,[e("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:t==null?void 0:t.img},null,8,Ie)]),e("div",Xe,[e("div",null,[e("div",Ze,o(U+1)+" 위",1)]),e("div",null,[e("div",be,o(t==null?void 0:t.kr)+" "+o(t==null?void 0:t.booknum),1)]),e("div",es," 판매량 "+o((D=t==null?void 0:t.sales)==null?void 0:D.toLocaleString()),1)])])])}),256))])])])]}),_:2},1032,["value"]))),256))]),_:1})])],64)}}});export{us as default};
