import{_ as ee,a as le,b as te,c as se,d as ae}from"./DialogContent.vue.gRTi2vKn.js";import{_ as ne}from"./index.yBksFz8a.js";import{M as A,aE as r,s as I,bx as u,I as c,v as e,H as y,b3 as o,u as _,bc as x,c9 as oe,t as J,F as $,aP as D,aM as h,q as ie,ax as ue,cb as re,af as ce,bG as F,cc as E,cd as H,ce as de}from"./entry.773nEwdk.js";import{_ as ve}from"./Header.vue.g-Dgb73d.js";import{a as _e,b as fe,_ as me}from"./TabsList.vue.AzI2nXAg.js";import{_ as pe}from"./TabsContent.vue.bOb1zMqc.js";import{g as L}from"./book.Jn-fh3Jt.js";import{u as we}from"./fetch.UtIobaFT.js";const ge={class:"flex flex-col gap-4"},he={class:"flex gap-4"},xe=["src"],ke={class:"flex flex-col gap-4"},ye=e("div",{class:"text-sm font-bold"},"kr",-1),$e=e("div",{class:"text-sm font-bold"},"jp",-1),Be={key:0,class:"flex flex-col gap-1"},Ce=e("div",{class:"text-sm font-bold"},"게시판으로",-1),je={class:"flex flex-col gap-1"},De={class:"text-3xl font-bold"},Ge=A({__name:"namuWiki",props:{open:{type:Boolean},wiki:{},selectedBook:{}},emits:["update:open"],setup(Q,{emit:m}){const G=m;return(d,v)=>{const p=ee,w=le,i=te,B=ne,T=se,k=ae;return r(),I(k,{open:d.open,"onUpdate:open":v[1]||(v[1]=f=>G("update:open"))},{default:u(()=>[c(T,{class:"w-full max-w-7xl h-5/6 overflow-y-scroll"},{default:u(()=>[e("div",ge,[c(i,null,{default:u(()=>[c(p,null,{default:u(()=>[y("만화 상세")]),_:1}),c(w,null,{default:u(()=>[y(" 해당 내용은 나무위키에서 발췌한 것입니다. ")]),_:1})]),_:1}),e("div",he,[e("img",{src:d.selectedBook.img,class:"h-56 w-fit object-cover overflow-hidden rounded-md"},null,8,xe),e("div",ke,[e("div",null,[ye,e("div",null,o(d.selectedBook.kr),1)]),e("div",null,[$e,e("div",null,o(d.selectedBook.jp),1)]),d.selectedBook.dc?(r(),_("div",Be,[Ce,c(B,{variant:"outline",onClick:v[0]||(v[0]=f=>("navigateTo"in d?d.navigateTo:x(oe))(`/book/board/${d.selectedBook.kr}`))},{default:u(()=>[y(o(d.selectedBook.kr)+" 게시판으로 이동 ",1)]),_:1})])):J("",!0)])]),(r(!0),_($,null,D(d.wiki,(f,q)=>(r(),_("div",je,[e("div",De,o(q+1)+". "+o(f==null?void 0:f.title),1),e("div",null,o(f==null?void 0:f.content),1)]))),256))])]),_:1})]),_:1},8,["open"])}}}),Te={class:"flex flex-col p-4 gap-4 w-full"},qe={class:"flex-col flex gap-4"},Ve={class:"w-full flex flex-col gap-1"},Le=e("div",null,[e("div",{class:"font-bold text-3xl"},"시리즈"),e("div",null,"시리즈의 전체 판매량 누적")],-1),Ne={class:"border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"},Se={key:0},We=["onClick"],Fe={class:"shrink-0"},Ee=["src"],He={class:"grow-[1]"},Ie={class:"font-bold"},Me={class:"font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},Ue={class:"text-xs"},Ye={class:"w-full flex flex-col gap-1"},Ke=e("div",null,[e("div",{class:"font-bold text-3xl"},"단행본"),e("div",null,"단행본 전체 판매량 누적")],-1),Oe={class:"border rounded-md p-4 flex flex-row gap-1 overflow-x-scroll"},Pe={key:0},Re={class:"flex flex-col w-40"},Xe={class:"shrink-0"},ze=["src"],Ae={class:"grow-[1]"},Je={class:"font-bold"},Qe={class:"font-bold text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},Ze={class:"text-xs"},ul=A({__name:"chart",setup(Q){const m=h("all");async function G(l){m.value=l,await f(),await q(),await M(),B.value=[{title:"week",단행본:v.value.data,시리즈:i.value.series},{title:"month",단행본:p.value.data,시리즈:i.value.week},{title:"year",단행본:w.value.data,시리즈:i.value.year}]}const d=h(L()),v=h({data:[],error:""}),p=h({data:[],error:""}),w=h({data:[],error:""}),i=h({series:{},week:{},year:{}}),B=h([{title:"week",단행본:[],시리즈:[]},{title:"month",단행본:[],시리즈:[]},{title:"year",단행본:[],시리즈:[]}]),T=h({}),k=ie(()=>m.value==="all"?[]:de(m.value).map(l=>l.kr));async function f(){let l=F().value.from("book").select().order("sales",{ascending:!1});k.value.length>0&&(l=l.in("kr",k.value)),v.value.data.length===0?l=l.eq("date",L(1)):l=l.eq("date",d.value),v.value=await l,v.value.data=await E(v.value.data),i.value.series=N(v.value.data),i.value.series=await H(i.value.series)}async function q(){let l=F().value.from("book").select().gte("date",L(4)).lte("date",d.value).order("sales",{ascending:!1});k.value.length>0&&(l=l.in("kr",k.value)),p.value=await l,p.value.data=U(p.value.data),p.value.data=await E(p.value.data),i.value.week=N(p.value.data),i.value.week=await H(i.value.week)}async function M(){let l=F().value.from("book").select().gte("date",L(52)).lte("date",d.value).order("sales",{ascending:!1});k.value.length>0&&(l=l.in("kr",k.value)),w.value=await l,w.value.data=U(w.value.data),w.value.data=await E(w.value.data),i.value.year=N(w.value.data),i.value.year=await H(i.value.year)}function U(l){return Y(l.reduce((n,a)=>(n.find(g=>g.jp===a.jp&&g.booknum===a.booknum)||n.push({jp:a.jp,booknum:a.booknum,kr:a.kr,img:a.img,sales:a.sales,dc:a.dc}),n),[]))}function N(l){return Y(l.reduce((n,a)=>{const C=n.find(g=>g.jp===a.jp);return C?C.sales+=a.sales:n.push({jp:a.jp,kr:a.kr,img:a.img,sales:a.sales,dc:a.dc}),n},[]))}function Y(l){return l.sort((n,a)=>a.sales-n.sales)}ue(async()=>{await f(),await q(),await M(),B.value=[{title:"week",단행본:v.value.data,시리즈:i.value.series},{title:"month",단행본:p.value.data,시리즈:i.value.week},{title:"year",단행본:w.value.data,시리즈:i.value.year}]});const V=h(!1),K=h([]);async function Z(l){T.value=l;const n=l.kr,{data:a}=await we(`/api/namuWiki/${n}`,"$Y1tEXl443k");K.value=a.value,V.value=!0}return(l,n)=>{const a=Ge,C=ve,g=_e,O=fe,P=me,b=pe;return r(),_($,null,[c(a,{open:x(V),wiki:x(K),selectedBook:x(T),"onUpdate:open":n[0]||(n[0]=t=>V.value=!x(V))},null,8,["open","wiki","selectedBook"]),e("div",Te,[c(C,{title:"책 차트",description:"책의 차트를 보여줍니다."}),c(P,{class:"w-full overflow-x-scroll",modelValue:x(m),"onUpdate:modelValue":n[2]||(n[2]=t=>ce(m)?m.value=t:null)},{default:u(()=>[c(O,null,{default:u(()=>[c(g,{value:"all",onClick:n[1]||(n[1]=t=>G("all"))},{default:u(()=>[y(" 전체 ")]),_:1}),(r(!0),_($,null,D(("uniqueGenreByGenre"in l?l.uniqueGenreByGenre:x(re))(),t=>(r(),I(g,{value:t.genre_name,onClick:S=>G(t.genre_name)},{default:u(()=>[y(o(t.genre_name),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["modelValue"]),c(P,{"default-value":"month",class:"w-full"},{default:u(()=>[c(O,null,{default:u(()=>[c(g,{value:"week"},{default:u(()=>[y(" 이번주 ")]),_:1}),c(g,{value:"month"},{default:u(()=>[y(" 4주간 ")]),_:1}),c(g,{value:"year"},{default:u(()=>[y(" 1년간 ")]),_:1})]),_:1}),(r(!0),_($,null,D(x(B),t=>(r(),I(b,{value:t.title},{default:u(()=>{var S,R,X,z;return[e("div",qe,[e("div",Ve,[Le,e("div",Ne,[((S=t==null?void 0:t.시리즈)==null?void 0:S.length)==0?(r(),_("div",Se,o(t.title=="week"?"이번주":t.title=="month"?"한달간":"1년간")+"의 "+o(x(m))+" 장르의 시리즈에 집계된 데이터가 없습니다. ",1)):(r(!0),_($,{key:1},D((R=t==null?void 0:t.시리즈)==null?void 0:R.slice(0,20),(s,W)=>{var j;return r(),_("div",null,[e("div",{class:"flex flex-col w-40 cursor-pointer",onClick:be=>Z(s)},[e("div",Fe,[e("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:s==null?void 0:s.img},null,8,Ee)]),e("div",He,[e("div",null,[e("div",Ie,o(W+1)+" 위",1)]),e("div",null,[e("div",Me,o(s==null?void 0:s.kr),1)]),e("div",Ue," 판매량 "+o((j=s==null?void 0:s.sales)==null?void 0:j.toLocaleString()),1)])],8,We)])}),256))])]),e("div",Ye,[Ke,e("div",Oe,[((X=t==null?void 0:t.단행본)==null?void 0:X.length)==0?(r(),_("div",Pe,o(t.title=="week"?"이번주":t.title=="month"?"한달간":"1년간")+"의 "+o(x(m))+" 장르의 단행본에 집계된 데이터가 없습니다. ",1)):J("",!0),(r(!0),_($,null,D((z=t==null?void 0:t.단행본)==null?void 0:z.slice(0,20),(s,W)=>{var j;return r(),_("div",null,[e("div",Re,[e("div",Xe,[e("img",{class:"h-56 object-cover overflow-hidden rounded-md",src:s==null?void 0:s.img},null,8,ze)]),e("div",Ae,[e("div",null,[e("div",Je,o(W+1)+" 위",1)]),e("div",null,[e("div",Qe,o(s==null?void 0:s.kr)+" "+o(s==null?void 0:s.booknum),1)]),e("div",Ze," 판매량 "+o((j=s==null?void 0:s.sales)==null?void 0:j.toLocaleString()),1)])])])}),256))])])])]}),_:2},1032,["value"]))),256))]),_:1})])],64)}}});export{ul as default};