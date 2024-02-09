import{_ as xe}from"./style.dxPdf4CY.js";import{_ as Se}from"./index.7VGeyiBj.js";import{r as z,A as wt,s as Lt,j as _e,h as Ot,B as we,n as xt,o as tt,c as it,C as ut,D as Ie,E as Ee,x as N,G as oe,H as Bt,a as I,I as Le,J as De,K as Ae,L as ke,M as Ce,b as J,t as V,N as Pt,z as Nt,p as se,e as re,q as Te,u as Oe,y as Pe,v as Qt,w as gt,F as Xt,O as Me,P as Yt,d as Be,Q as Ne}from"./entry.PiYtPCSn.js";import{u as Fe}from"./fetch.dpHpNHjZ.js";import{r as ze,t as $e}from"./book.Jn-fh3Jt.js";import{_ as je}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./SheetContent.vue.OWJi-y1f.js";import"./SheetTitle.vue.53HrfGBE.js";function Ve(t){return Object.prototype.toString.call(t)==="[object Object]"}function Zt(t){return Ve(t)||Array.isArray(t)}function He(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ft(t,e){const o=Object.keys(t),s=Object.keys(e);if(o.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),n=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==n?!1:o.every(r=>{const c=t[r],a=e[r];return typeof c=="function"?`${c}`==`${a}`:!Zt(c)||!Zt(a)?c===a:Ft(c,a)})}function Wt(t){return t.concat().sort((e,o)=>e.name>o.name?1:-1).map(e=>e.options)}function Re(t,e){if(t.length!==e.length)return!1;const o=Wt(t),s=Wt(e);return o.every((i,n)=>{const r=s[n];return Ft(i,r)})}function zt(t){return typeof t=="number"}function Mt(t){return typeof t=="string"}function $t(t){return typeof t=="boolean"}function te(t){return Object.prototype.toString.call(t)==="[object Object]"}function C(t){return Math.abs(t)}function jt(t){return Math.sign(t)}function vt(t,e){return C(t-e)}function Ge(t,e){if(t===0||e===0||C(t)<=C(e))return 0;const o=vt(C(t),C(e));return C(o/t)}function ht(t){return yt(t).map(Number)}function H(t){return t[St(t)]}function St(t){return Math.max(0,t.length-1)}function Vt(t,e){return e===St(t)}function ee(t,e=0){return Array.from(Array(t),(o,s)=>e+s)}function yt(t){return Object.keys(t)}function ie(t,e){return[t,e].reduce((o,s)=>(yt(s).forEach(i=>{const n=o[i],r=s[i],c=te(n)&&te(r);o[i]=c?ie(n,r):r}),o),{})}function ce(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function qe(t,e){const o={start:s,center:i,end:n};function s(){return 0}function i(a){return n(a)/2}function n(a){return e-a}function r(a,f){return Mt(t)?o[t](a):t(e,a,f)}return{measure:r}}function bt(){let t=[];function e(i,n,r,c={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(n,r,c),a=()=>i.removeEventListener(n,r,c);else{const f=i;f.addListener(r),a=()=>f.removeListener(r)}return t.push(a),s}function o(){t=t.filter(i=>i())}const s={add:e,clear:o};return s}function Ke(t,e,o,s){const i=bt(),n=1e3/60;let r=null,c=0,a=0;function f(){i.add(t,"visibilitychange",()=>{t.hidden&&m()})}function v(){h(),i.clear()}function u(g){r||(r=g);const d=g-r;for(r=g,c+=d;c>=n;)o(),c-=n;const y=C(c/n);s(y),a&&e.requestAnimationFrame(u)}function l(){a||(a=e.requestAnimationFrame(u))}function h(){e.cancelAnimationFrame(a),r=null,c=0,a=0}function m(){r=null,c=0}return{init:f,destroy:v,start:l,stop:h,update:o,render:s}}function Ue(t,e){const o=t==="y"?"y":"x",s=t==="y"?"x":"y",i=c(),n=a();function r(v){const{width:u,height:l}=v;return o==="x"?u:l}function c(){return o==="y"?"top":e==="rtl"?"right":"left"}function a(){return o==="y"?"bottom":e==="rtl"?"left":"right"}return{scroll:o,cross:s,startEdge:i,endEdge:n,measureSize:r}}function ct(t=0,e=0){const o=C(t-e);function s(f){return f<t}function i(f){return f>e}function n(f){return s(f)||i(f)}function r(f){return n(f)?s(f)?t:e:f}function c(f){return o?f-o*Math.ceil((f-e)/o):f}return{length:o,max:e,min:t,constrain:r,reachedAny:n,reachedMax:i,reachedMin:s,removeOffset:c}}function ae(t,e,o){const{constrain:s}=ct(0,t),i=t+1;let n=r(e);function r(l){return o?C((i+l)%i):s(l)}function c(){return n}function a(l){return n=r(l),u}function f(l){return v().set(c()+l)}function v(){return ae(t,c(),o)}const u={get:c,set:a,add:f,clone:v};return u}function Je(t){const e=t==="rtl"?-1:1;function o(i){return i*e}return{apply:o}}function Qe(t,e,o,s,i,n,r,c,a,f,v,u,l,h,m,p,g,d,y,b){const{cross:_}=t,S=["INPUT","SELECT","TEXTAREA"],E={passive:!1},T=bt(),w=bt(),L=ct(50,225).constrain(m.measure(20)),D={mouse:300,touch:400},k={mouse:500,touch:600},M=p?43:25;let R=!1,G=0,Q=0,q=!1,et=!1,nt=!1,X=!1;function ft(x){if(!b)return;function A(B){($t(b)||b(x,B))&&pt(B)}const P=o;T.add(P,"dragstart",B=>B.preventDefault(),E).add(P,"touchmove",()=>{},E).add(P,"touchend",()=>{}).add(P,"touchstart",A).add(P,"mousedown",A).add(P,"touchcancel",F).add(P,"contextmenu",F).add(P,"click",Z,!0)}function K(){T.clear(),w.clear()}function at(){const x=X?s:o;w.add(x,"touchmove",$,E).add(x,"touchend",F).add(x,"mousemove",$,E).add(x,"mouseup",F)}function lt(x){const A=x.nodeName||"";return S.includes(A)}function Y(){return(p?k:D)[X?"mouse":"touch"]}function dt(x,A){const P=l.add(jt(x)*-1),B=u.byDistance(x,!p).distance;return p||C(x)<L?B:d&&A?B*.5:u.byIndex(P.get(),0).distance}function pt(x){const A=ce(x,i);X=A,!(A&&x.button!==0)&&(lt(x.target)||(nt=p&&A&&!x.buttons&&R,R=vt(n.get(),c.get())>=2,q=!0,r.pointerDown(x),v.useFriction(0).useDuration(0),n.set(c),at(),G=r.readPoint(x),Q=r.readPoint(x,_),h.emit("pointerDown")))}function $(x){const A=r.readPoint(x),P=r.readPoint(x,_),B=vt(A,G),ot=vt(P,Q);if(!et&&!X&&(!x.cancelable||(et=B>ot,!et)))return F(x);const U=r.pointerMove(x);B>g&&(nt=!0),v.useFriction(.3).useDuration(1),a.start(),n.add(e.apply(U)),x.preventDefault()}function F(x){const P=u.byDistance(0,!1).index!==l.get(),B=r.pointerUp(x)*Y(),ot=dt(e.apply(B),P),U=Ge(B,ot),st=M-10*U,W=y+U/50;et=!1,q=!1,w.clear(),v.useDuration(st).useFriction(W),f.distance(ot,!p),X=!1,h.emit("pointerUp")}function Z(x){nt&&(x.stopPropagation(),x.preventDefault())}function j(){return q}return{init:ft,pointerDown:j,destroy:K}}function Xe(t,e){let s,i;function n(u){return u.timeStamp}function r(u,l){const m=`client${(l||t.scroll)==="x"?"X":"Y"}`;return(ce(u,e)?u:u.touches[0])[m]}function c(u){return s=u,i=u,r(u)}function a(u){const l=r(u)-r(i),h=n(u)-n(s)>170;return i=u,h&&(s=u),l}function f(u){if(!s||!i)return 0;const l=r(i)-r(s),h=n(u)-n(s),m=n(u)-n(i)>170,p=l/h;return h&&!m&&C(p)>.1?p:0}return{pointerDown:c,pointerMove:a,pointerUp:f,readPoint:r}}function Ye(){function t(o){const{offsetTop:s,offsetLeft:i,offsetWidth:n,offsetHeight:r}=o;return{top:s,right:i+n,bottom:s+r,left:i,width:n,height:r}}return{measure:t}}function Ze(t){function e(s){return t*(s/100)}return{measure:e}}function We(t,e,o,s,i,n,r){let c,a,f=[],v=!1;function u(p){return i.measureSize(r.measure(p))}function l(p){if(!n)return;a=u(t),f=s.map(u);function g(y){for(const b of y){const _=b.target===t,S=s.indexOf(b.target),E=_?a:f[S],T=u(_?t:s[S]);if(C(T-E)>=.5){o.requestAnimationFrame(()=>{p.reInit(),e.emit("resize")});break}}}c=new ResizeObserver(y=>{v||($t(n)||n(p,y))&&g(y)}),[t].concat(s).forEach(y=>c.observe(y))}function h(){c&&c.disconnect(),v=!0}return{init:l,destroy:h}}function tn(t,e,o,s,i){let n=0,r=0,c=s,a=i,f=t.get(),v=0;function u(){const S=o.get()-t.get(),E=!c;let T=0;return E?(n=0,t.set(o),T=S):(n+=S/c,n*=a,f+=n,t.add(n),T=f-v),r=jt(T),v=f,_}function l(){const S=o.get()-e.get();return C(S)<.001}function h(){return c}function m(){return r}function p(){return n}function g(){return y(s)}function d(){return b(i)}function y(S){return c=S,_}function b(S){return a=S,_}const _={direction:m,duration:h,velocity:p,seek:u,settled:l,useBaseFriction:d,useBaseDuration:g,useFriction:b,useDuration:y};return _}function en(t,e,o,s,i){const n=i.measure(10),r=i.measure(50),c=ct(.1,.99);let a=!1;function f(){return!(a||!t.reachedAny(o.get())||!t.reachedAny(e.get()))}function v(h){if(!f())return;const m=t.reachedMin(e.get())?"min":"max",p=C(t[m]-e.get()),g=o.get()-e.get(),d=c.constrain(p/r);o.subtract(g*d),!h&&C(g)<n&&(o.set(t.constrain(o.get())),s.useDuration(25).useBaseFriction())}function u(h){a=!h}return{constrain:v,toggleActive:u}}function nn(t,e,o,s,i){const n=ct(-e+t,0),r=u(),c=v(),a=l();function f(m,p){return vt(m,p)<1}function v(){const m=r[0],p=H(r),g=r.lastIndexOf(m),d=r.indexOf(p)+1;return ct(g,d)}function u(){return o.map((m,p)=>{const{min:g,max:d}=n,y=n.constrain(m),b=!p,_=Vt(o,p);return b?d:_||f(g,y)?g:f(d,y)?d:y}).map(m=>parseFloat(m.toFixed(3)))}function l(){if(e<=t+i)return[n.max];if(s==="keepSnaps")return r;const{min:m,max:p}=c;return r.slice(m,p)}return{snapsContained:a,scrollContainLimit:c}}function on(t,e,o){const s=e[0],i=o?s-t:H(e);return{limit:ct(i,s)}}function sn(t,e,o,s){const n=e.min+.1,r=e.max+.1,{reachedMin:c,reachedMax:a}=ct(n,r);function f(l){return l===1?a(o.get()):l===-1?c(o.get()):!1}function v(l){if(!f(l))return;const h=t*(l*-1);s.forEach(m=>m.add(h))}return{loop:v}}function rn(t){const{max:e,length:o}=t;function s(n){const r=n-e;return o?r/-o:0}return{get:s}}function cn(t,e,o,s,i){const{startEdge:n,endEdge:r}=t,{groupSlides:c}=i,a=u().map(e.measure),f=l(),v=h();function u(){return c(s).map(p=>H(p)[r]-p[0][n]).map(C)}function l(){return s.map(p=>o[n]-p[n]).map(p=>-C(p))}function h(){return c(f).map(p=>p[0]).map((p,g)=>p+a[g])}return{snaps:f,snapsAligned:v}}function an(t,e,o,s,i,n){const{groupSlides:r}=i,{min:c,max:a}=s,f=v();function v(){const l=r(n),h=!t||e==="keepSnaps";return o.length===1?[n]:h?l:l.slice(c,a).map((m,p,g)=>{const d=!p,y=Vt(g,p);if(d){const b=H(g[0])+1;return ee(b)}if(y){const b=St(n)-H(g)[0]+1;return ee(b,H(g)[0])}return m})}return{slideRegistry:f}}function ln(t,e,o,s,i){const{reachedAny:n,removeOffset:r,constrain:c}=s;function a(m){return m.concat().sort((p,g)=>C(p)-C(g))[0]}function f(m){const p=t?r(m):c(m),g=e.map(y=>y-p).map(y=>v(y,0)).map((y,b)=>({diff:y,index:b})).sort((y,b)=>C(y.diff)-C(b.diff)),{index:d}=g[0];return{index:d,distance:p}}function v(m,p){const g=[m,m+o,m-o];if(!t)return g[0];if(!p)return a(g);const d=g.filter(y=>jt(y)===p);return d.length?a(d):H(g)-o}function u(m,p){const g=e[m]-i.get(),d=v(g,p);return{index:m,distance:d}}function l(m,p){const g=i.get()+m,{index:d,distance:y}=f(g),b=!t&&n(g);if(!p||b)return{index:d,distance:m};const _=e[d]-y,S=m+v(_,0);return{index:d,distance:S}}return{byDistance:l,byIndex:u,shortcut:v}}function un(t,e,o,s,i,n,r){function c(u){const l=u.distance,h=u.index!==e.get();n.add(l),l&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),h&&(o.set(e.get()),e.set(u.index),r.emit("select"))}function a(u,l){const h=i.byDistance(u,l);c(h)}function f(u,l){const h=e.clone().set(u),m=i.byIndex(h.get(),l);c(m)}return{distance:a,index:f}}function fn(t,e,o,s,i,n){let r=0;function c(){n.add(document,"keydown",a,!1),e.forEach(f)}function a(u){u.code==="Tab"&&(r=new Date().getTime())}function f(u){const l=()=>{if(new Date().getTime()-r>10)return;t.scrollLeft=0;const p=e.indexOf(u),g=o.findIndex(d=>d.includes(p));zt(g)&&(i.useDuration(0),s.index(g,0))};n.add(u,"focus",l,{passive:!0,capture:!0})}return{init:c}}function It(t){let e=t;function o(){return e}function s(a){e=r(a)}function i(a){e+=r(a)}function n(a){e-=r(a)}function r(a){return zt(a)?a:a.get()}return{get:o,set:s,add:i,subtract:n}}function le(t,e,o){const s=t.scroll==="x"?r:c,i=o.style;let n=!1;function r(l){return`translate3d(${l}px,0px,0px)`}function c(l){return`translate3d(0px,${l}px,0px)`}function a(l){n||(i.transform=s(e.apply(l)))}function f(l){n=!l}function v(){n||(i.transform="",o.getAttribute("style")||o.removeAttribute("style"))}return{clear:v,to:a,toggleActive:f}}function dn(t,e,o,s,i,n,r,c,a,f){const u=ht(n),l=ht(n).reverse(),h=y().concat(b());function m(w,L){return w.reduce((D,k)=>D-n[k],L)}function p(w,L){return w.reduce((D,k)=>m(D,L)>0?D.concat([k]):D,[])}function g(w){return r.map((L,D)=>({start:L-i[D]+.5+w,end:L+o-.5+w}))}function d(w,L,D){const k=g(L);return w.map(M=>{const R=D?0:-s,G=D?s:0,Q=D?"end":"start",q=k[M][Q];return{index:M,loopPoint:q,slideLocation:It(-1),translate:le(t,e,f[M]),target:()=>a.get()>q?R:G}})}function y(){const w=c[0],L=p(l,w);return d(L,s,!1)}function b(){const w=o-c[0]-1,L=p(u,w);return d(L,-s,!0)}function _(){return h.every(({index:w})=>{const L=u.filter(D=>D!==w);return m(L,o)<=.1})}function S(){h.forEach(w=>{const{target:L,translate:D,slideLocation:k}=w,M=L();M!==k.get()&&(D.to(M),k.set(M))})}function E(){h.forEach(w=>w.translate.clear())}return{canLoop:_,clear:E,loop:S,loopPoints:h}}function pn(t,e,o){let s,i=!1;function n(a){if(!o)return;function f(v){for(const u of v)if(u.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(v=>{i||($t(o)||o(a,v))&&f(v)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:n,destroy:r}}function mn(t,e,o,s){const i={};let n=null,r=null,c,a=!1;function f(){c=new IntersectionObserver(m=>{a||(m.forEach(p=>{const g=e.indexOf(p.target);i[g]=p}),n=null,r=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(m=>c.observe(m))}function v(){c&&c.disconnect(),a=!0}function u(m){return yt(i).reduce((p,g)=>{const d=parseInt(g),{isIntersecting:y}=i[d];return(m&&y||!m&&!y)&&p.push(d),p},[])}function l(m=!0){if(m&&n)return n;if(!m&&r)return r;const p=u(m);return m&&(n=p),m||(r=p),p}return{init:f,destroy:v,get:l}}function gn(t,e,o,s,i,n){const{measureSize:r,startEdge:c,endEdge:a}=t,f=o[0]&&i,v=m(),u=p(),l=o.map(r),h=g();function m(){if(!f)return 0;const y=o[0];return C(e[c]-y[c])}function p(){if(!f)return 0;const y=n.getComputedStyle(H(s));return parseFloat(y.getPropertyValue(`margin-${a}`))}function g(){return o.map((y,b,_)=>{const S=!b,E=Vt(_,b);return S?l[b]+v:E?l[b]+u:_[b+1][c]-y[c]}).map(C)}return{slideSizes:l,slideSizesWithGaps:h,startGap:v,endGap:u}}function vn(t,e,o,s,i,n,r,c,a,f){const{startEdge:v,endEdge:u}=t,l=zt(s);function h(d,y){return ht(d).filter(b=>b%y===0).map(b=>d.slice(b,b+y))}function m(d){return d.length?ht(d).reduce((y,b)=>{const _=H(y)||0,S=_===0,E=b===St(d),T=n[v]-r[_][v],w=n[v]-r[b][u],L=!i&&S?e.apply(c):0,D=!i&&E?e.apply(a):0;return C(w-D-(T+L))>o+f&&y.push(b),E&&y.push(d.length),y},[]).map((y,b,_)=>{const S=Math.max(_[b-1]||0);return d.slice(S,y)}):[]}function p(d){return l?h(d,s):m(d)}return{groupSlides:p}}function hn(t,e,o,s,i,n,r){const{align:c,axis:a,direction:f,startIndex:v,loop:u,duration:l,dragFree:h,dragThreshold:m,inViewThreshold:p,slidesToScroll:g,skipSnaps:d,containScroll:y,watchResize:b,watchSlides:_,watchDrag:S}=n,E=2,T=Ye(),w=T.measure(e),L=o.map(T.measure),D=Je(f),k=Ue(a,f),M=k.measureSize(w),R=Ze(M),G=qe(c,M),Q=!u&&!!y,q=u||!!y,{slideSizes:et,slideSizesWithGaps:nt,startGap:X,endGap:ft}=gn(k,w,L,o,q,i),K=vn(k,D,M,g,u,w,L,X,ft,E),{snaps:at,snapsAligned:lt}=cn(k,G,w,L,K),Y=-H(at)+H(nt),{snapsContained:dt,scrollContainLimit:pt}=nn(M,Y,lt,y,E),$=Q?dt:lt,{limit:F}=on(Y,$,u),Z=ae(St($),v,u),j=Z.clone(),O=ht(o),x=({dragHandler:rt,scrollBody:Ct,scrollBounds:Tt,options:{loop:_t}})=>{_t||Tt.constrain(rt.pointerDown()),Ct.seek()},A=({scrollBody:rt,translate:Ct,location:Tt,offsetLocation:_t,scrollLooper:me,slideLooper:ge,dragHandler:ve,animation:he,eventHandler:Kt,options:{loop:ye}},be)=>{const Ut=rt.velocity(),Jt=rt.settled();Jt&&!ve.pointerDown()&&(he.stop(),Kt.emit("settle")),Jt||Kt.emit("scroll"),_t.set(Tt.get()-Ut+Ut*be),ye&&(me.loop(rt.direction()),ge.loop()),Ct.to(_t.get())},P=Ke(s,i,()=>x(kt),rt=>A(kt,rt)),B=.68,ot=$[Z.get()],U=It(ot),st=It(ot),W=It(ot),mt=tn(U,st,W,l,B),Dt=ln(u,$,Y,F,W),At=un(P,Z,j,mt,Dt,W,r),Rt=rn(F),Gt=bt(),de=mn(e,o,r,p),{slideRegistry:qt}=an(Q,y,$,pt,K,O),pe=fn(t,o,qt,At,mt,Gt),kt={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:w,slideRects:L,animation:P,axis:k,direction:D,dragHandler:Qe(k,D,t,s,i,W,Xe(k,i),U,P,At,mt,Dt,Z,r,R,h,m,d,B,S),eventStore:Gt,percentOfView:R,index:Z,indexPrevious:j,limit:F,location:U,offsetLocation:st,options:n,resizeHandler:We(e,r,i,o,k,b,T),scrollBody:mt,scrollBounds:en(F,U,W,mt,R),scrollLooper:sn(Y,F,st,[U,st,W]),scrollProgress:Rt,scrollSnapList:$.map(Rt.get),scrollSnaps:$,scrollTarget:Dt,scrollTo:At,slideLooper:dn(k,D,M,Y,et,nt,at,$,st,o),slideFocus:pe,slidesHandler:pn(e,r,_),slidesInView:de,slideIndexes:O,slideRegistry:qt,slidesToScroll:K,target:W,translate:le(k,D,e)};return kt}function yn(){const t={};let e;function o(a){e=a}function s(a){return t[a]||[]}function i(a){return s(a).forEach(f=>f(e,a)),c}function n(a,f){return t[a]=s(a).concat([f]),c}function r(a,f){return t[a]=s(a).filter(v=>v!==f),c}const c={init:o,emit:i,off:r,on:n};return c}const bn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function xn(t){function e(n,r){return ie(n,r||{})}function o(n){const r=n.breakpoints||{},c=yt(r).filter(a=>t.matchMedia(a).matches).map(a=>r[a]).reduce((a,f)=>e(a,f),{});return e(n,c)}function s(n){return n.map(r=>yt(r.breakpoints||{})).reduce((r,c)=>r.concat(c),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:o,optionsMediaQueries:s}}function Sn(t){let e=[];function o(n,r){return e=r.filter(({options:c})=>t.optionsAtMedia(c).active!==!1),e.forEach(c=>c.init(n,t)),r.reduce((c,a)=>Object.assign(c,{[a.name]:a}),{})}function s(){e=e.filter(n=>n.destroy())}return{init:o,destroy:s}}function Et(t,e,o){const s=t.ownerDocument,i=s.defaultView,n=xn(i),r=Sn(n),c=bt(),a=yn(),{mergeOptions:f,optionsAtMedia:v,optionsMediaQueries:u}=n,{on:l,off:h,emit:m}=a,p=k;let g=!1,d,y=f(bn,Et.globalOptions),b=f(y),_=[],S,E,T;function w(){const{container:O,slides:x}=b;E=(Mt(O)?t.querySelector(O):O)||t.children[0];const P=Mt(x)?E.querySelectorAll(x):x;T=[].slice.call(P||E.children)}function L(O){const x=hn(t,E,T,s,i,O,a);if(O.loop&&!x.slideLooper.canLoop()){const A=Object.assign({},O,{loop:!1});return L(A)}return x}function D(O,x){g||(y=f(y,O),b=v(y),_=x||_,w(),d=L(b),u([y,..._.map(({options:A})=>A)]).forEach(A=>c.add(A,"change",k)),b.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(),d.eventHandler.init(j),d.resizeHandler.init(j),d.slidesHandler.init(j),d.options.loop&&d.slideLooper.loop(),E.offsetParent&&T.length&&d.dragHandler.init(j),S=r.init(j,_)))}function k(O,x){const A=K();M(),D(f({startIndex:A},O),x),a.emit("reInit")}function M(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),r.destroy(),c.clear()}function R(){g||(g=!0,c.clear(),M(),a.emit("destroy"))}function G(O,x,A){!b.active||g||(d.scrollBody.useBaseFriction().useDuration(x===!0?0:b.duration),d.scrollTo.index(O,A||0))}function Q(O){const x=d.index.add(1).get();G(x,O,-1)}function q(O){const x=d.index.add(-1).get();G(x,O,1)}function et(){return d.index.add(1).get()!==K()}function nt(){return d.index.add(-1).get()!==K()}function X(){return d.scrollSnapList}function ft(){return d.scrollProgress.get(d.location.get())}function K(){return d.index.get()}function at(){return d.indexPrevious.get()}function lt(){return d.slidesInView.get()}function Y(){return d.slidesInView.get(!1)}function dt(){return S}function pt(){return d}function $(){return t}function F(){return E}function Z(){return T}const j={canScrollNext:et,canScrollPrev:nt,containerNode:F,internalEngine:pt,destroy:R,off:h,on:l,emit:m,plugins:dt,previousScrollSnap:at,reInit:p,rootNode:$,scrollNext:Q,scrollPrev:q,scrollProgress:ft,scrollSnapList:X,scrollTo:G,selectedScrollSnap:K,slideNodes:Z,slidesInView:lt,slidesNotInView:Y};return D(e,o),setTimeout(()=>a.emit("init"),0),j}Et.globalOptions=void 0;function Ht(t={},e=[]){const o=z(wt(t)?t.value:t),s=z(wt(e)?e.value:e),i=z(),n=z();function r(){n.value&&n.value.reInit(o.value,s.value)}return Lt(()=>{!He()||!i.value||(Et.globalOptions=Ht.globalOptions,n.value=Et(i.value,o.value,s.value))}),_e(()=>{n.value&&n.value.destroy()}),wt(t)&&Ot(t,c=>{Ft(o.value,c)||(o.value=c,r())}),wt(e)&&Ot(e,c=>{Re(s.value,c)||(s.value=c,r())}),[i,n]}Ht.globalOptions=void 0;const[_n,wn]=we(({opts:t,orientation:e,plugins:o},s)=>{const[i,n]=Ht({...t,axis:e==="horizontal"?"x":"y"},o);function r(){var u;(u=n.value)==null||u.scrollPrev()}function c(){var u;(u=n.value)==null||u.scrollNext()}const a=z(!0),f=z(!0);function v(u){a.value=u.canScrollNext(),f.value=u.canScrollPrev()}return Lt(()=>{var u,l,h;n.value&&((u=n.value)==null||u.on("init",v),(l=n.value)==null||l.on("reInit",v),(h=n.value)==null||h.on("select",v),s("init-api",n.value))}),{carouselRef:i,carouselApi:n,canScrollPrev:f,canScrollNext:a,scrollPrev:r,scrollNext:c,orientation:e}});function ue(){const t=wn();if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const In=xt({__name:"Carousel",props:{opts:{},plugins:{},orientation:{default:"horizontal"},class:{}},emits:["init-api"],setup(t,{expose:e,emit:o}){const s=t,n=_n(s,o);e(n);function r(c){const a=s.orientation==="vertical"?"ArrowUp":"ArrowLeft",f=s.orientation==="vertical"?"ArrowDown":"ArrowRight";if(c.key===a){c.preventDefault(),n.scrollPrev();return}c.key===f&&(c.preventDefault(),n.scrollNext())}return(c,a)=>(tt(),it("div",{class:oe(N(Bt)("relative",s.class)),role:"region","aria-roledescription":"carousel",tabindex:"0",onKeydown:r},[ut(c.$slots,"default",Ie(Ee(N(n))))],34))}}),En=xt({inheritAttrs:!1,__name:"CarouselContent",props:{class:{}},setup(t){const e=t,{carouselRef:o,orientation:s}=ue();return(i,n)=>(tt(),it("div",{ref_key:"carouselRef",ref:o,class:"overflow-hidden"},[I("div",Le({class:N(Bt)("flex",N(s)==="horizontal"?"-ml-4":"-mt-4 flex-col",e.class)},i.$attrs),[ut(i.$slots,"default")],16)],512))}}),Ln=xt({__name:"CarouselItem",props:{class:{}},setup(t){const e=t,{orientation:o}=ue();return(s,i)=>(tt(),it("div",{role:"group","aria-roledescription":"slide",class:oe(N(Bt)("min-w-0 shrink-0 grow-0 basis-full",N(o)==="horizontal"?"pl-4":"pt-4",e.class))},[ut(s.$slots,"default")],2))}});function Dn(t,e){const o=t.getBoundingClientRect();if(!e)return o.top>=0&&o.bottom<=window.innerHeight;const s=e.getBoundingClientRect();return o.top>=s.top&&o.bottom<=s.bottom}async function An(t){return await Nt(),t.value instanceof HTMLElement?t.value:t.value?document.querySelector(t.value):null}function ne(t){let e=`0px 0px ${t.distance}px 0px`;t.top&&(e=`${t.distance}px 0px 0px 0px`);const o=new IntersectionObserver(s=>{s[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:e});return o.observe(t.infiniteLoading.value),o}const fe=(t,e)=>{const o=t.__vccOpts||t;for(const[s,i]of e)o[s]=i;return o},kn={},Cn=t=>(se("data-v-d3e37633"),t=t(),re(),t),Tn={class:"container"},On=Cn(()=>I("div",{class:"spinner"},null,-1)),Pn=[On];function Mn(t,e){return tt(),it("div",Tn,Pn)}const Bn=fe(kn,[["render",Mn],["__scopeId","data-v-d3e37633"]]),Nn={class:"state-error"},Fn=xt({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(t,{emit:e}){const o=t;let s=null,i=0;const n=z(null),r=z(""),{top:c,firstload:a,distance:f}=o,{identifier:v,target:u}=De(o),l={infiniteLoading:n,top:c,firstload:a,distance:f,parentEl:null,emit(){i=(l.parentEl||document.documentElement).scrollHeight,h.loading(),e("infinite",h)}},h={loading(){r.value="loading"},async loaded(){r.value="loaded";const m=l.parentEl||document.documentElement;await Nt(),c&&(m.scrollTop=m.scrollHeight-i),Dn(n.value,l.parentEl)&&l.emit()},complete(){r.value="complete",s==null||s.disconnect()},error(){r.value="error"}};return Ot(v,()=>{s==null||s.disconnect(),s=ne(l)}),Lt(async()=>{l.parentEl=await An(u),s=ne(l)}),Ae(()=>{s==null||s.disconnect()}),(m,p)=>(tt(),it("div",{ref_key:"infiniteLoading",ref:n,style:{"min-height":"1px"}},[ke(I("div",null,[ut(m.$slots,"spinner",{},()=>[J(Bn)],!0)],512),[[Ce,r.value=="loading"]]),r.value=="complete"?ut(m.$slots,"complete",{key:0},()=>{var g;return[I("span",null,V(((g=m.slots)==null?void 0:g.complete)||"No more results!"),1)]},!0):Pt("",!0),r.value=="error"?ut(m.$slots,"error",{key:1,retry:l.emit},()=>{var g;return[I("span",Nn,[I("span",null,V(((g=m.slots)==null?void 0:g.error)||"Oops something went wrong!"),1),I("button",{class:"retry",onClick:p[0]||(p[0]=(...d)=>l.emit&&l.emit(...d))},"retry")])]},!0):Pt("",!0)],512))}}),zn=fe(Fn,[["__scopeId","data-v-a7077831"]]),$n=t=>(se("data-v-6cbbb137"),t=t(),re(),t),jn={class:"relative w-full"},Vn={class:"absolute z-10 p-2 text-white",style:{"pointer-events":"none"}},Hn={class:"font-bold"},Rn={class:"text-sm"},Gn={class:"relative h-full"},qn=["src"],Kn=$n(()=>I("div",{class:"absolute top-0 left-0 w-full h-full lg:rounded-md",style:{background:`linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.5)
              )`,"pointer-events":"none"}},null,-1)),Un={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end",style:{"pointer-events":"none"}},Jn={class:"flex gap-4 items-end"},Qn=["src"],Xn={class:"flex-col"},Yn={class:"line-clamp-3 overflow-hidden"},Zn={class:"flex text-xs gap-2"},Wn={class:"font-normal"},to={class:"flex flex-col gap-2 text-xl items-center"},eo=["onClick"],no={class:"text-sm"},oo={class:"flex flex-col gap-1 items-center"},so={class:"text-sm"},ro={class:"flex flex-col gap-1 items-center"},io={class:"text-sm"},co={class:"w-full rounded-md p-2 flex items-center justify-center"},ao=xt({__name:"board",setup(t){const e=z([]),o=Te(),s=z(1),i=z([]);Lt(async()=>{const{data:l,error:h}=await Oe().value.from("board").select().neq("link",null).order("date",{ascending:!1});h?console.error(h):(e.value=l??[],i.value=[...e.value.slice(0,20)])});const n=z(!1),r=Pe("scrollContainer",()=>null);function c(l){if(n.value)return;n.value=!0;let h=0;const m=setTimeout(()=>{try{h=r.value.scrollTop,s.value++;const p=[...e.value.slice((s.value-1)*20,s.value*20)];i.value=[...i.value,...p],setTimeout(()=>{l.loaded()})}catch(p){console.error(p)}finally{clearTimeout(m),n.value=!1,setTimeout(()=>{Nt(()=>{console.log(h),r.value.scrollTo(0,h)})})}})}function a(l){if(l.includes("["))return JSON.parse(l);{let h=[];return h.push(l),h}}const f=z(!1),v=z();async function u(l){var p,g,d,y;const{dc:h}=Ne(l.kr),{data:m}=await Fe(`/api/dcinside/${h}/${l.num}?kr=${l.kr}`,"$Hg2q9B5c9C");v.value=m.value,(g=(p=v.value)==null?void 0:p.comment)!=null&&g.comments&&(v.value.comment.comments=(y=(d=v.value)==null?void 0:d.comment)==null?void 0:y.comments.filter(b=>b.no!=0)),f.value=!f.value}return(l,h)=>{const m=xe,p=Se,g=Ln,d=En,y=In,b=Qt("font-awesome-icon"),_=Qt("masonry-wall");return tt(),it(Xt,null,[J(m,{open:N(f),reply:N(v),"onUpdate:open":h[0]||(h[0]=S=>f.value=!N(f))},null,8,["open","reply"]),I("div",null,[J(_,{items:N(i),"ssr-columns":20,"column-width":300,gap:16},{default:gt(({item:S})=>[I("div",jn,[I("div",Vn,[I("div",Hn,V(S.title),1),I("div",Rn,V(S.writer),1)]),J(y,null,{default:gt(()=>[J(d,null,{default:gt(()=>[(tt(!0),it(Xt,null,Me(a(S.link),(E,T)=>(tt(),Yt(g,{key:T},{default:gt(()=>[I("div",Gn,[I("img",{class:"lg:rounded-md min-h-96 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in l?l.replaceDomain:N(ze))(E).replace(/co\.kr/g,"com")},null,8,qn),J(p,{class:"absolute top-4 right-4 bg-opacity-50 bg-black"},{default:gt(()=>[Be(V(T+1)+" / "+V(a(S.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),Kn,I("div",Un,[I("div",Jn,[I("img",{class:"h-16 rounded-md object-cover",src:N(o)[S.kr]},null,8,Qn),I("div",Xn,[I("div",Yn,V(S.content),1),I("div",Zn,[I("div",Wn,V(("timeAgo"in l?l.timeAgo:N($e))(S.date)),1)])])]),I("div",to,[I("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:E=>u(S)},[J(b,{icon:["far","comment"]}),I("div",no,V(S.number),1)],8,eo),I("div",oo,[J(b,{icon:["far","eye"]}),I("div",so,V(S.count),1)]),I("div",ro,[J(b,{icon:["fas","star"]}),I("div",io,V(S.recommend),1)])])])])]),_:1},8,["items"]),I("div",co,[J(b,{icon:["fas","circle-notch"],spin:""})]),N(i).length>0?(tt(),Yt(N(zn),{key:0,onInfinite:c})):Pt("",!0)])],64)}}}),yo=je(ao,[["__scopeId","data-v-6cbbb137"]]);export{yo as default};