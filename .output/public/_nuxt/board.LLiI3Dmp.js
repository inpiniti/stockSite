import{_ as Le}from"./style.XCJmp_jT.js";import{_ as Se,a as je,b as qe,c as De,d as Pe,e as Ve}from"./SelectScrollDownButton.vue.0wVOQ8N9.js";import{g as Ae,f as de,C as Oe,_ as Te,a as ze,b as Me,c as Ue,d as Ge,e as Re,h as Fe,i as We,j as Ne,k as Je}from"./index.bb8g4lrB.js";import{_ as Ke,a as Qe,b as He}from"./PopoverContent.vue.FKNbaZ09.js";import{_ as Ye}from"./index.SvzD3KMI.js";import{_ as Xe}from"./Menubar.vue.fVykeZfX.js";import{_ as Ze}from"./index.UR85n2bJ.js";import{f as et,r as v,j as tt,m as st,k as nt,z as ot,g as lt,u as ue,h as it,o as g,c as I,b as t,i as r,a as s,w as l,A as W,d as C,F as j,B as A,C as z,t as h,D as me,E as at,G as rt,H as ct,Q as dt,Y as ut,p as mt,e as ft}from"./entry.atDAzTud.js";import{u as pt}from"./fetch.hpWHEP8l.js";import{r as fe,t as pe}from"./book.Jn-fh3Jt.js";import{c as _e,g as ht}from"./_commonjsHelpers.5-cIlDoe.js";import{_ as _t}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./SheetContent.vue.D-lzj76Q.js";import"./SheetTitle.vue.UvD6E2yD.js";import"./chevron-down.qbL52Roa.js";import"./check.p0-8n-54.js";import"./vue.f36acd1f.gNzmQVUO.js";import"./more-horizontal.oaBXg02m.js";var ge={exports:{}},H={exports:{}},he;function gt(){return he||(he=1,function($){(function(w,m){$.exports?$.exports=m():w.EvEmitter=m()})(typeof window<"u"?window:_e,function(){function w(){}let m=w.prototype;return m.on=function(d,p){if(!d||!p)return this;let f=this._events=this._events||{},y=f[d]=f[d]||[];return y.includes(p)||y.push(p),this},m.once=function(d,p){if(!d||!p)return this;this.on(d,p);let f=this._onceEvents=this._onceEvents||{},y=f[d]=f[d]||{};return y[p]=!0,this},m.off=function(d,p){let f=this._events&&this._events[d];if(!f||!f.length)return this;let y=f.indexOf(p);return y!=-1&&f.splice(y,1),this},m.emitEvent=function(d,p){let f=this._events&&this._events[d];if(!f||!f.length)return this;f=f.slice(0),p=p||[];let y=this._onceEvents&&this._onceEvents[d];for(let i of f)y&&y[i]&&(this.off(d,i),delete y[i]),i.apply(this,p);return this},m.allOff=function(){return delete this._events,delete this._onceEvents,this},w})}(H)),H.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function($){(function(w,m){$.exports?$.exports=m(w,gt()):w.imagesLoaded=m(w,w.EvEmitter)})(typeof window<"u"?window:_e,function(m,d){let p=m.jQuery,f=m.console;function y(e){return Array.isArray(e)?e:typeof e=="object"&&typeof e.length=="number"?[...e]:[e]}function i(e,o,c){if(!(this instanceof i))return new i(e,o,c);let _=e;if(typeof e=="string"&&(_=document.querySelectorAll(e)),!_){f.error(`Bad element for imagesLoaded ${_||e}`);return}this.elements=y(_),this.options={},typeof o=="function"?c=o:Object.assign(this.options,o),c&&this.on("always",c),this.getImages(),p&&(this.jqDeferred=new p.Deferred),setTimeout(this.check.bind(this))}i.prototype=Object.create(d.prototype),i.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const M=[1,9,11];i.prototype.addElementImages=function(e){e.nodeName==="IMG"&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);let{nodeType:o}=e;if(!o||!M.includes(o))return;let c=e.querySelectorAll("img");for(let _ of c)this.addImage(_);if(typeof this.options.background=="string"){let _=e.querySelectorAll(this.options.background);for(let B of _)this.addElementBackgroundImages(B)}};const N=/url\((['"])?(.*?)\1\)/gi;i.prototype.addElementBackgroundImages=function(e){let o=getComputedStyle(e);if(!o)return;let c=N.exec(o.backgroundImage);for(;c!==null;){let _=c&&c[2];_&&this.addBackground(_,e),c=N.exec(o.backgroundImage)}},i.prototype.addImage=function(e){let o=new x(e);this.images.push(o)},i.prototype.addBackground=function(e,o){let c=new b(e,o);this.images.push(c)},i.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let e=(o,c,_)=>{setTimeout(()=>{this.progress(o,c,_)})};this.images.forEach(function(o){o.once("progress",e),o.check()})},i.prototype.progress=function(e,o,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,o]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&f&&f.log(`progress: ${c}`,e,o)},i.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let o=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[o](this)}};function x(e){this.img=e}x.prototype=Object.create(d.prototype),x.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},x.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},x.prototype.confirm=function(e,o){this.isLoaded=e;let{parentNode:c}=this.img,_=c.nodeName==="PICTURE"?c:this.img;this.emitEvent("progress",[this,_,o])},x.prototype.handleEvent=function(e){let o="on"+e.type;this[o]&&this[o](e)},x.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},x.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},x.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function b(e,o){this.url=e,this.element=o,this.img=new Image}return b.prototype=Object.create(x.prototype),b.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},b.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},b.prototype.confirm=function(e,o){this.isLoaded=e,this.emitEvent("progress",[this,this.element,o])},i.makeJQueryPlugin=function(e){e=e||m.jQuery,e&&(p=e,p.fn.imagesLoaded=function(o,c){return new i(this,o,c).jqDeferred.promise(p(this))})},i.makeJQueryPlugin(),i})})(ge);var vt=ge.exports;const yt=ht(vt),Y=$=>(mt("data-v-2d5b341b"),$=$(),ft(),$),xt={class:"flex items-center gap-2"},kt={class:"sm:hidden pt-10"},wt={class:"w-screen mb-4"},bt={class:"relative w-full"},Et={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},It={class:"font-bold line-clamp-2"},$t={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},Ct={class:"relative h-full"},Bt=Y(()=>s("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0.5)
            )`,"pointer-events":"none"}},null,-1)),Lt={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},St={class:"flex gap-4 items-end flex-1 overflow-hidden"},jt={class:"flex-col flex-1 overflow-hidden"},qt={class:"line-clamp-2"},Dt={class:"flex text-xs gap-2"},Pt={class:"font-normal"},Vt={class:"flex flex-col gap-2 text-xl items-center shrink-0"},At=["onClick"],Ot={class:"text-sm"},Tt={class:"flex flex-col gap-1 items-center"},zt={class:"text-sm"},Mt={class:"flex flex-col gap-1 items-center"},Ut={class:"text-sm"},Gt={class:"md:p-2 md:py-4 md:pt-14 hidden sm:block"},Rt={class:"grid"},Ft=Y(()=>s("div",{class:"grid-sizer"},null,-1)),Wt={class:"w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7"},Nt={class:"relative w-full"},Jt={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},Kt={class:"font-bold line-clamp-2"},Qt={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},Ht={class:"relative h-full"},Yt=Y(()=>s("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.5)
              )`,"pointer-events":"none"}},null,-1)),Xt={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},Zt={class:"flex gap-4 items-end flex-1 overflow-hidden"},es={class:"flex-col flex-1 overflow-hidden"},ts={class:"line-clamp-2"},ss={class:"flex text-xs gap-2"},ns={class:"font-normal"},os={class:"flex flex-col gap-2 text-xl items-center shrink-0"},ls=["onClick"],is={class:"text-sm"},as={class:"flex flex-col gap-1 items-center"},rs={class:"text-sm"},cs={class:"flex flex-col gap-1 items-center"},ds={class:"text-sm"},us=et({__name:"board",setup($){const w=v(1),m=v(1),d=v(1),p=v(100),f=v(0),y=tt("isScrollingDown"),i=v([]),M=v([]),N=v(["스포","핫산","건국담","창작","번역","짤","유출","게임","팬아트","분석","창조","정보","일반","이벤트","구매","원작","질문","성지","잡담"]),x=v("date"),b=v(),e=v();function o(){J.value=!1,d.value=1,m.value=1,document.documentElement.scrollTop=0,O.value=[],i.value=[],U()}st(e,()=>{J.value=!1,d.value=1,m.value=1,document.documentElement.scrollTop=0,O.value=[],i.value=[],U()});let c=null;const _=nt();ot();const B=v();function X(){J.value=!1,d.value=1,m.value=1,document.documentElement.scrollTop=0,O.value=[],i.value=[],U()}const O=v([]);lt(async()=>{U(),M.value=await Ae()});async function U(){let a=ue().value.from("board").select().neq("link",null).range((d.value-1)*p.value,d.value*p.value-1),u=ue().value.from("board").select("*",{count:"exact",head:!0}).neq("link",null);if(b.value&&b.value!="all"&&(a=a.ilike("subject",`%${b.value}%`),u=u.ilike("subject",`%${b.value}%`)),B.value&&B.value!="all"&&(a=a.eq("kr",B.value),u=u.eq("kr",B.value)),e.value){const q=de(e.value,"yyyy-MM-dd");a=a.gte("date",`${q}T00:00:00`).lte("date",`${q}T23:59:59`),u=u.gte("date",`${q}T00:00:00`).lte("date",`${q}T23:59:59`)}const{data:F,error:L}=await a.order(x.value,{ascending:!1});L?console.error(L):(i.value=[...i.value,...F??[]],ee());const{data:P,error:k,status:S,count:V}=await u;k?console.error(k):f.value=V||0}function Z(a){d.value=a,J.value=!1,U()}const J=v(!1);function ee(){c=document.querySelector(".grid"),new Masonry(c,{itemSelector:".grid-item",percentPosition:!0}),yt(c,function(){ve()})}function ve(){if(console.log(`${m.value} == ${i.value.length}`),m.value==i.value.length){w.value++,console.log("changePage"),Z(w.value);return}m.value++;const a=[...i.value.slice(m.value-1,m.value)];a.length!=0&&(O.value.push(...a),ee())}function K(a){if(a.includes("["))return JSON.parse(a);{let u=[];return u.push(a),u}}const G=v(!1),R=v();async function te(a){var L,P,k,S;const{dc:u}=rt(a.kr),{data:F}=await pt(`/api/dcinside/${u}/${a.num}?kr=${a.kr}`,"$Hg2q9B5c9C");R.value=F.value,(P=(L=R.value)==null?void 0:L.comment)!=null&&P.comments&&(R.value.comment.comments=(S=(k=R.value)==null?void 0:k.comment)==null?void 0:S.comments.filter(V=>V.no!=0)),G.value=!G.value}return(a,u)=>{const F=Le,L=Se,P=je,k=qe,S=Te,V=De,q=Pe,Q=Ve,se=ze,ne=Ke,oe=Qe,le=Ye,ye=He,xe=Xe,ie=Ze,ae=Me,re=Ue,ce=Ge,T=it("font-awesome-icon"),ke=Re,we=Fe,be=ct,Ee=We,Ie=Ne,$e=Je,Ce=dt,Be=ut;return g(),I(j,null,[t(F,{open:r(G),reply:r(R),"onUpdate:open":u[0]||(u[0]=n=>G.value=!r(G))},null,8,["open","reply"]),s("div",{class:me(["fixed top-13 w-full z-20 border-y bg-white dark:bg-black",{hidden:r(y)}])},[t(xe,{class:"border-0"},{default:l(()=>[t(Q,{modelValue:r(B),"onUpdate:modelValue":[u[1]||(u[1]=n=>W(B)?B.value=n:null),X]},{default:l(()=>[t(P,{class:"w-fit border-0 max-w-48"},{default:l(()=>[t(L,{placeholder:"comic"})]),_:1}),t(q,{class:"max-w-96"},{default:l(()=>[t(V,null,{default:l(()=>[t(k,{value:"all"},{default:l(()=>[C("전체")]),_:1}),(g(!0),I(j,null,A(r(M),n=>(g(),z(k,{class:"pl-0",value:n.kr},{default:l(()=>[s("div",xt,[t(S,{loading:"lazy",class:"h-8 rounded-md object-scale-down",src:r(_)[n.kr]},null,8,["src"]),s("div",null,h(n.kr),1)])]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:r(b),"onUpdate:modelValue":[u[2]||(u[2]=n=>W(b)?b.value=n:null),X]},{default:l(()=>[t(P,{class:"w-fit border-0"},{default:l(()=>[t(L,{placeholder:"sub"})]),_:1}),t(q,null,{default:l(()=>[t(V,null,{default:l(()=>[t(k,{class:"pl-0",value:"all"},{default:l(()=>[C("전체")]),_:1}),(g(!0),I(j,null,A(r(N),n=>(g(),z(k,{class:"pl-0",value:n},{default:l(()=>[C(h(n),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:r(x),"onUpdate:modelValue":[u[3]||(u[3]=n=>W(x)?x.value=n:null),o]},{default:l(()=>[t(P,{class:"w-fit border-0"},{default:l(()=>[t(L,{placeholder:"order"})]),_:1}),t(q,null,{default:l(()=>[t(V,null,{default:l(()=>[t(k,{class:"pl-0",value:"date"},{default:l(()=>[C(" 시간순 ")]),_:1}),t(k,{class:"pl-0",value:"recommend"},{default:l(()=>[C(" 추천순 ")]),_:1}),t(k,{class:"pl-0",value:"number"},{default:l(()=>[C(" 덧글순 ")]),_:1}),t(k,{class:"pl-0",value:"count"},{default:l(()=>[C(" 조회순 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(oe,{class:"hidden"},{default:l(()=>[t(ne,{class:"w-auto p-0"},{default:l(()=>[t(se,{modelValue:r(e),"onUpdate:modelValue":u[4]||(u[4]=n=>W(e)?e.value=n:null)},null,8,["modelValue"])]),_:1})]),_:1}),t(oe,null,{default:l(()=>[t(ye,null,{default:l(()=>[t(le,{variant:"ghost",class:me(r(at)("justify-start text-left font-normal",!r(e)&&"text-muted-foreground"))},{default:l(()=>[t(r(Oe),{class:"mr-2 h-4 w-4"}),s("span",null,h(r(e)?r(de)(r(e),"yyyy-MM-dd"):"날짜"),1)]),_:1},8,["class"])]),_:1}),t(ne,null,{default:l(()=>[t(se,{modelValue:r(e),"onUpdate:modelValue":u[5]||(u[5]=n=>W(e)?e.value=n:null)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],2),s("div",kt,[(g(!0),I(j,null,A(r(O),n=>(g(),I("div",wt,[s("div",bt,[s("div",Et,[s("div",It,h(n.title),1),s("div",$t,h(n.writer),1)]),t(ce,null,{default:l(()=>[t(re,null,{default:l(()=>[(g(!0),I(j,null,A(K(n.link),(E,D)=>(g(),z(ae,{key:D},{default:l(()=>[s("div",Ct,[t(S,{loading:"lazy",class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in a?a.replaceDomain:r(fe))(E).replace(/co\.kr/g,"com")},null,8,["src"]),t(ie,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:l(()=>[C(h(D+1)+" / "+h(K(n.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),Bt,s("div",Lt,[s("div",St,[t(S,{loading:"lazy",class:"h-16 rounded-md object-cover shrink-0",src:r(_)[n.kr]},null,8,["src"]),s("div",jt,[s("div",qt,h(n.content),1),s("div",Dt,[s("div",Pt,h(("timeAgo"in a?a.timeAgo:r(pe))(n.date)),1)])])]),s("div",Vt,[s("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:E=>te(n)},[t(T,{icon:["far","comment"]}),s("div",Ot,h(n.number),1)],8,At),s("div",Tt,[t(T,{icon:["far","eye"]}),s("div",zt,h(n.count),1)]),s("div",Mt,[t(T,{icon:["fas","star"]}),s("div",Ut,h(n.recommend),1)])])])])]))),256))]),s("div",Gt,[s("div",Rt,[Ft,(g(!0),I(j,null,A(r(O),n=>(g(),I("div",Wt,[s("div",Nt,[s("div",Jt,[s("div",Kt,h(n.title),1),s("div",Qt,h(n.writer),1)]),t(ce,null,{default:l(()=>[t(re,null,{default:l(()=>[(g(!0),I(j,null,A(K(n.link),(E,D)=>(g(),z(ae,{key:D},{default:l(()=>[s("div",Ht,[t(S,{loading:"lazy",class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in a?a.replaceDomain:r(fe))(E).replace(/co\.kr/g,"com")},null,8,["src"]),t(ie,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:l(()=>[C(h(D+1)+" / "+h(K(n.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),Yt,s("div",Xt,[s("div",Zt,[t(S,{loading:"lazy",class:"h-16 rounded-md object-cover shrink-0",src:r(_)[n.kr]},null,8,["src"]),s("div",es,[s("div",ts,h(n.content),1),s("div",ss,[s("div",ns,h(("timeAgo"in a?a.timeAgo:r(pe))(n.date)),1)])])]),s("div",os,[s("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:E=>te(n)},[t(T,{icon:["far","comment"]}),s("div",is,h(n.number),1)],8,ls),s("div",as,[t(T,{icon:["far","eye"]}),s("div",rs,h(n.count),1)]),s("div",cs,[t(T,{icon:["fas","star"]}),s("div",ds,h(n.recommend),1)])])])])]))),256))]),t(Be,{class:"flex justify-center",total:r(f)/10,"sibling-count":1,"show-edges":"","default-page":1},{default:l(()=>[t(Ce,{class:"flex items-center gap-1"},{default:l(({items:n})=>[t(ke),t(we),(g(!0),I(j,null,A(n,(E,D)=>(g(),I(j,null,[E.type==="page"?(g(),z(be,{key:D,value:E.value,"as-child":""},{default:l(()=>[t(le,{class:"w-10 h-10 p-0",variant:E.value===r(d)?"default":"outline",onClick:ms=>Z(E.value)},{default:l(()=>[C(h(E.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(g(),z(Ee,{key:E.type,index:D},null,8,["index"]))],64))),256)),t(Ie),t($e)]),_:1})]),_:1},8,["total"])])],64)}}}),js=_t(us,[["__scopeId","data-v-2d5b341b"]]);export{js as default};
