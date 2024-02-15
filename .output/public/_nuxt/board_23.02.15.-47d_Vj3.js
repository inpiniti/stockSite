import{_ as ze}from"./style.XCJmp_jT.js";import{_ as Le,a as qe,b as Me,c as Ae,d as He,e as Ne}from"./SelectScrollDownButton.vue.0wVOQ8N9.js";import{g as Oe,f as re,C as Ue,_ as Re,a as Fe,b as Ge,c as Ke,d as Je,e as Qe,h as Ye,i as We,j as Xe,k as Ze}from"./index.bb8g4lrB.js";import{_ as et,a as tt,b as lt}from"./PopoverContent.vue.FKNbaZ09.js";import{_ as nt}from"./index.SvzD3KMI.js";import{_ as ot}from"./Menubar.vue.fVykeZfX.js";import{_ as st}from"./index.UR85n2bJ.js";import{f as pe,r as _,l as at,m as ve,g as ge,q as ct,o as d,c as g,s as it,v as rt,a as t,x as W,b as e,t as i,y as X,n as he,p as we,e as xe,j as ut,k as dt,z as mt,u as ue,h as _t,i as s,w as n,A as K,d as S,F as T,B as L,C as q,D as de,E as ft,G as pt,H as vt,Q as gt,Y as ht}from"./entry.atDAzTud.js";import{u as wt}from"./fetch.hpWHEP8l.js";import{r as me,t as _e}from"./book.Jn-fh3Jt.js";import{_ as xt}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./SheetContent.vue.D-lzj76Q.js";import"./SheetTitle.vue.UvD6E2yD.js";import"./chevron-down.qbL52Roa.js";import"./check.p0-8n-54.js";import"./vue.f36acd1f.gNzmQVUO.js";import"./more-horizontal.oaBXg02m.js";function yt(a,r){const u=a.getBoundingClientRect();if(!r)return u.top>=0&&u.bottom<=window.innerHeight;const m=r.getBoundingClientRect();return u.top>=m.top&&u.bottom<=m.bottom}async function kt(a){return await he(),a.value instanceof HTMLElement?a.value:a.value?document.querySelector(a.value):null}function fe(a){let r=`0px 0px ${a.distance}px 0px`;a.top&&(r=`${a.distance}px 0px 0px 0px`);const u=new IntersectionObserver(m=>{m[0].isIntersecting&&(a.firstload&&a.emit(),a.firstload=!0)},{root:a.parentEl,rootMargin:r});return u.observe(a.infiniteLoading.value),u}const ye=(a,r)=>{const u=a.__vccOpts||a;for(const[m,z]of r)u[m]=z;return u},bt={},$t=a=>(we("data-v-d3e37633"),a=a(),xe(),a),St={class:"container"},Ct=$t(()=>t("div",{class:"spinner"},null,-1)),Bt=[Ct];function Vt(a,r){return d(),g("div",St,Bt)}const Tt=ye(bt,[["render",Vt],["__scopeId","data-v-d3e37633"]]),Dt={class:"state-error"},Et=pe({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(a,{emit:r}){const u=a;let m=null,z=0;const U=_(null),p=_(""),{top:R,firstload:Q,distance:M}=u,{identifier:C,target:f}=at(u),h={infiniteLoading:U,top:R,firstload:Q,distance:M,parentEl:null,emit(){z=(h.parentEl||document.documentElement).scrollHeight,A.loading(),r("infinite",A)}},A={loading(){p.value="loading"},async loaded(){p.value="loaded";const w=h.parentEl||document.documentElement;await he(),R&&(w.scrollTop=w.scrollHeight-z),yt(U.value,h.parentEl)&&h.emit()},complete(){p.value="complete",m==null||m.disconnect()},error(){p.value="error"}};return ve(C,()=>{m==null||m.disconnect(),m=fe(h)}),ge(async()=>{h.parentEl=await kt(f),m=fe(h)}),ct(()=>{m==null||m.disconnect()}),(w,k)=>(d(),g("div",{ref_key:"infiniteLoading",ref:U,style:{"min-height":"1px"}},[it(t("div",null,[W(w.$slots,"spinner",{},()=>[e(Tt)],!0)],512),[[rt,p.value=="loading"]]),p.value=="complete"?W(w.$slots,"complete",{key:0},()=>{var D;return[t("span",null,i(((D=w.slots)==null?void 0:D.complete)||"No more results!"),1)]},!0):X("",!0),p.value=="error"?W(w.$slots,"error",{key:1,retry:h.emit},()=>{var D;return[t("span",Dt,[t("span",null,i(((D=w.slots)==null?void 0:D.error)||"Oops something went wrong!"),1),t("button",{class:"retry",onClick:k[0]||(k[0]=(...y)=>h.emit&&h.emit(...y))},"retry")])]},!0):X("",!0)],512))}}),It=ye(Et,[["__scopeId","data-v-a7077831"]]),Z=a=>(we("data-v-4b31fb80"),a=a(),xe(),a),Pt={class:"flex items-center gap-2"},jt={class:"sm:hidden pt-10"},zt={class:"w-screen mb-4"},Lt={class:"relative w-full"},qt={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},Mt={class:"font-bold line-clamp-2"},At={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},Ht={class:"relative h-full"},Nt=Z(()=>t("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0.5)
            )`,"pointer-events":"none"}},null,-1)),Ot={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},Ut={class:"flex gap-4 items-end flex-1 overflow-hidden"},Rt={class:"flex-col flex-1 overflow-hidden"},Ft={class:"line-clamp-2"},Gt={class:"flex text-xs gap-2"},Kt={class:"font-normal"},Jt={class:"flex flex-col gap-2 text-xl items-center shrink-0"},Qt=["onClick"],Yt={class:"text-sm"},Wt={class:"flex flex-col gap-1 items-center"},Xt={class:"text-sm"},Zt={class:"flex flex-col gap-1 items-center"},el={class:"text-sm"},tl={class:"w-full rounded-md p-2 flex items-center justify-center"},ll={class:"md:p-2 md:py-4 md:pt-14 hidden sm:block"},nl={class:"grid"},ol=Z(()=>t("div",{class:"grid-sizer"},null,-1)),sl={class:"w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7"},al={class:"relative w-full"},cl={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},il={class:"font-bold line-clamp-2"},rl={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},ul={class:"relative h-full"},dl=Z(()=>t("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.5)
              )`,"pointer-events":"none"}},null,-1)),ml={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},_l={class:"flex gap-4 items-end flex-1 overflow-hidden"},fl={class:"flex-col flex-1 overflow-hidden"},pl={class:"line-clamp-2"},vl={class:"flex text-xs gap-2"},gl={class:"font-normal"},hl={class:"flex flex-col gap-2 text-xl items-center shrink-0"},wl=["onClick"],xl={class:"text-sm"},yl={class:"flex flex-col gap-1 items-center"},kl={class:"text-sm"},bl={class:"flex flex-col gap-1 items-center"},$l={class:"text-sm"},O=10,Sl=pe({__name:"board_23.02.15",setup(a){const r=_(1),u=_(1),m=_(100),z=_(0),U=ut("isScrollingDown"),p=_([]),R=_([]),Q=_(["스포","핫산","건국담","창작","번역","짤","유출","게임","팬아트","분석","창조","정보","일반","이벤트","구매","원작","질문","성지","잡담"]),M=_("date"),C=_(),f=_();function h(){B.value=!1,u.value=1,r.value=1,document.documentElement.scrollTop=0,y.value=[],H()}ve(f,()=>{console.log("date"),B.value=!1,u.value=1,r.value=1,document.documentElement.scrollTop=0,y.value=[],H()});let A=null;const w=dt();mt();const k=_();function D(){B.value=!1,u.value=1,r.value=1,document.documentElement.scrollTop=0,y.value=[],H()}const y=_([]);ge(async()=>{H(),R.value=await Oe()});async function H(){let o=ue().value.from("board").select().neq("link",null).range((u.value-1)*m.value,u.value*m.value-1),c=ue().value.from("board").select("*",{count:"exact",head:!0}).neq("link",null);if(C.value&&C.value!="all"&&(o=o.ilike("subject",`%${C.value}%`),c=c.ilike("subject",`%${C.value}%`)),k.value&&k.value!="all"&&(o=o.eq("kr",k.value),c=c.eq("kr",k.value)),console.log(f.value),f.value){console.log(f.value);const P=re(f.value,"yyyy-MM-dd");o=o.gte("date",`${P}T00:00:00`).lte("date",`${P}T23:59:59`),c=c.gte("date",`${P}T00:00:00`).lte("date",`${P}T23:59:59`)}const{data:b,error:V}=await o.order(M.value,{ascending:!1});V?console.error(V):(p.value=b??[],y.value=[...y.value,...p.value.slice(0,r.value*O)],$e());const{data:E,error:v,status:$,count:I}=await c;v?console.error(v):(console.log(E),console.log($),console.log(I),z.value=I||0)}function ke(o){r.value=1,u.value=o,B.value=!1,document.documentElement.scrollTop=0,y.value=[],H()}const B=_(!1);function be(o){if(console.log("infiniteHandler"),B.value)return;if(console.log(`${p.value.length} < ${(r.value-1)*O}`),p.value.length==r.value*O){r.value=1,u.value=u.value+1,B.value=!1,H();return}B.value=!0;const c=setTimeout(()=>{try{r.value++;const b=[...p.value.slice((r.value-1)*O,r.value*O)];if(b.length==0)return;y.value.push(...b),setTimeout(()=>{p.value.length<r.value*O?o.loaded():o.complete(),clearTimeout(c),B.value=!1})}catch(b){console.error(b),o.error()}})}function $e(){console.log("gridReorder"),A=document.querySelector(".grid"),console.log(A);for(let o=0;o<100;o++)setTimeout(()=>{new Masonry(A,{itemSelector:".grid-item",percentPosition:!0})},1e3*o)}function J(o){if(o.includes("["))return JSON.parse(o);{let c=[];return c.push(o),c}}const F=_(!1),G=_();async function ee(o){var V,E,v,$;const{dc:c}=pt(o.kr),{data:b}=await wt(`/api/dcinside/${c}/${o.num}?kr=${o.kr}`,"$DLpIDC1HTn");G.value=b.value,(E=(V=G.value)==null?void 0:V.comment)!=null&&E.comments&&(G.value.comment.comments=($=(v=G.value)==null?void 0:v.comment)==null?void 0:$.comments.filter(I=>I.no!=0)),F.value=!F.value}return(o,c)=>{const b=ze,V=Le,E=qe,v=Me,$=Re,I=Ae,P=He,Y=Ne,te=Fe,le=et,ne=tt,oe=nt,Se=lt,Ce=ot,se=st,ae=Ge,ce=Ke,ie=Je,N=_t("font-awesome-icon"),Be=Qe,Ve=Ye,Te=vt,De=We,Ee=Xe,Ie=Ze,Pe=gt,je=ht;return d(),g(T,null,[e(b,{open:s(F),reply:s(G),"onUpdate:open":c[0]||(c[0]=l=>F.value=!s(F))},null,8,["open","reply"]),t("div",{class:de(["fixed top-13 w-full z-20 border-y bg-white dark:bg-black",{hidden:s(U)}])},[e(Ce,{class:"border-0"},{default:n(()=>[e(Y,{modelValue:s(k),"onUpdate:modelValue":[c[1]||(c[1]=l=>K(k)?k.value=l:null),D]},{default:n(()=>[e(E,{class:"w-fit border-0 max-w-48"},{default:n(()=>[e(V,{placeholder:"comic"})]),_:1}),e(P,{class:"max-w-96"},{default:n(()=>[e(I,null,{default:n(()=>[e(v,{value:"all"},{default:n(()=>[S("전체")]),_:1}),(d(!0),g(T,null,L(s(R),l=>(d(),q(v,{class:"pl-0",value:l.kr},{default:n(()=>[t("div",Pt,[e($,{loading:"lazy",class:"h-8 rounded-md object-scale-down",src:s(w)[l.kr]},null,8,["src"]),t("div",null,i(l.kr),1)])]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:s(C),"onUpdate:modelValue":[c[2]||(c[2]=l=>K(C)?C.value=l:null),D]},{default:n(()=>[e(E,{class:"w-fit border-0"},{default:n(()=>[e(V,{placeholder:"sub"})]),_:1}),e(P,null,{default:n(()=>[e(I,null,{default:n(()=>[e(v,{class:"pl-0",value:"all"},{default:n(()=>[S("전체")]),_:1}),(d(!0),g(T,null,L(s(Q),l=>(d(),q(v,{class:"pl-0",value:l},{default:n(()=>[S(i(l),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Y,{modelValue:s(M),"onUpdate:modelValue":[c[3]||(c[3]=l=>K(M)?M.value=l:null),h]},{default:n(()=>[e(E,{class:"w-fit border-0"},{default:n(()=>[e(V,{placeholder:"order"})]),_:1}),e(P,null,{default:n(()=>[e(I,null,{default:n(()=>[e(v,{class:"pl-0",value:"date"},{default:n(()=>[S(" 시간순 ")]),_:1}),e(v,{class:"pl-0",value:"recommend"},{default:n(()=>[S(" 추천순 ")]),_:1}),e(v,{class:"pl-0",value:"number"},{default:n(()=>[S(" 덧글순 ")]),_:1}),e(v,{class:"pl-0",value:"count"},{default:n(()=>[S(" 조회순 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ne,{class:"hidden"},{default:n(()=>[e(le,{class:"w-auto p-0"},{default:n(()=>[e(te,{modelValue:s(f),"onUpdate:modelValue":c[4]||(c[4]=l=>K(f)?f.value=l:null)},null,8,["modelValue"])]),_:1})]),_:1}),e(ne,null,{default:n(()=>[e(Se,null,{default:n(()=>[e(oe,{variant:"ghost",class:de(s(ft)("justify-start text-left font-normal",!s(f)&&"text-muted-foreground"))},{default:n(()=>[e(s(Ue),{class:"mr-2 h-4 w-4"}),t("span",null,i(s(f)?s(re)(s(f),"yyyy-MM-dd"):"날짜"),1)]),_:1},8,["class"])]),_:1}),e(le,null,{default:n(()=>[e(te,{modelValue:s(f),"onUpdate:modelValue":c[5]||(c[5]=l=>K(f)?f.value=l:null)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],2),t("div",jt,[(d(!0),g(T,null,L(s(y),l=>(d(),g("div",zt,[t("div",Lt,[t("div",qt,[t("div",Mt,i(l.title),1),t("div",At,i(l.writer),1)]),e(ie,null,{default:n(()=>[e(ce,null,{default:n(()=>[(d(!0),g(T,null,L(J(l.link),(x,j)=>(d(),q(ae,{key:j},{default:n(()=>[t("div",Ht,[e($,{loading:"lazy",class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in o?o.replaceDomain:s(me))(x).replace(/co\.kr/g,"com")},null,8,["src"]),e(se,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:n(()=>[S(i(j+1)+" / "+i(J(l.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),Nt,t("div",Ot,[t("div",Ut,[e($,{loading:"lazy",class:"h-16 rounded-md object-cover shrink-0",src:s(w)[l.kr]},null,8,["src"]),t("div",Rt,[t("div",Ft,i(l.content),1),t("div",Gt,[t("div",Kt,i(("timeAgo"in o?o.timeAgo:s(_e))(l.date)),1)])])]),t("div",Jt,[t("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:x=>ee(l)},[e(N,{icon:["far","comment"]}),t("div",Yt,i(l.number),1)],8,Qt),t("div",Wt,[e(N,{icon:["far","eye"]}),t("div",Xt,i(l.count),1)]),t("div",Zt,[e(N,{icon:["fas","star"]}),t("div",el,i(l.recommend),1)])])])])]))),256)),t("div",tl,[s(y).length>0&&s(B)==!1?(d(),q(s(It),{key:0,onInfinite:be})):X("",!0)])]),t("div",ll,[t("div",nl,[ol,(d(!0),g(T,null,L(s(p),l=>(d(),g("div",sl,[t("div",al,[t("div",cl,[t("div",il,i(l.title),1),t("div",rl,i(l.writer),1)]),e(ie,null,{default:n(()=>[e(ce,null,{default:n(()=>[(d(!0),g(T,null,L(J(l.link),(x,j)=>(d(),q(ae,{key:j},{default:n(()=>[t("div",ul,[e($,{loading:"lazy",class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in o?o.replaceDomain:s(me))(x).replace(/co\.kr/g,"com")},null,8,["src"]),e(se,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:n(()=>[S(i(j+1)+" / "+i(J(l.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),dl,t("div",ml,[t("div",_l,[e($,{loading:"lazy",class:"h-16 rounded-md object-cover shrink-0",src:s(w)[l.kr]},null,8,["src"]),t("div",fl,[t("div",pl,i(l.content),1),t("div",vl,[t("div",gl,i(("timeAgo"in o?o.timeAgo:s(_e))(l.date)),1)])])]),t("div",hl,[t("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:x=>ee(l)},[e(N,{icon:["far","comment"]}),t("div",xl,i(l.number),1)],8,wl),t("div",yl,[e(N,{icon:["far","eye"]}),t("div",kl,i(l.count),1)]),t("div",bl,[e(N,{icon:["fas","star"]}),t("div",$l,i(l.recommend),1)])])])])]))),256))]),e(je,{class:"flex justify-center",total:s(z)/10,"sibling-count":1,"show-edges":"","default-page":1},{default:n(()=>[e(Pe,{class:"flex items-center gap-1"},{default:n(({items:l})=>[e(Be),e(Ve),(d(!0),g(T,null,L(l,(x,j)=>(d(),g(T,null,[x.type==="page"?(d(),q(Te,{key:j,value:x.value,"as-child":""},{default:n(()=>[e(oe,{class:"w-10 h-10 p-0",variant:x.value===s(u)?"default":"outline",onClick:Cl=>ke(x.value)},{default:n(()=>[S(i(x.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(d(),q(De,{key:x.type,index:j},null,8,["index"]))],64))),256)),e(Ee),e(Ie)]),_:1})]),_:1},8,["total"])])],64)}}}),Rl=xt(Sl,[["__scopeId","data-v-4b31fb80"]]);export{Rl as default};
