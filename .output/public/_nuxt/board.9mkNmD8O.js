import{_ as Tt}from"./style.Dkqc2soZ.js";import{_ as Ot,a as $t,b as Bt,c as Mt,d as Nt,e as Ft}from"./SelectScrollDownButton.vue.McNMczzi.js";import{_ as jt}from"./Menubar.vue.GhnteQoR.js";import{_ as Vt}from"./index.vpr75j1L.js";import{A as Ne,r as R,B as xe,s as Fe,j as zt,h as qe,C as Rt,n as ce,o as M,c as X,D as re,E as Pe,G as De,x as I,H as we,I as me,a as w,J as mt,K as Ae,L as te,w as L,b as k,X as Ht,M as qt,Z as Gt,N as Ut,O as Kt,u as Ge,P as Jt,Q as Qt,R as Xt,S as Yt,t as V,T as Ue,z as gt,p as vt,e as ht,y as Zt,q as Wt,U as en,v as tn,F as fe,V as ye,d as pe,W as nn,Y as on,_ as sn,$ as rn}from"./entry.SQZ2563T.js";import{M as cn}from"./more-horizontal.IakdluS-.js";import{_ as Te}from"./index.atalWuR9.js";import{u as ln}from"./fetch.n7l5Djdb.js";import{r as ct,t as lt}from"./book.Jn-fh3Jt.js";import{_ as an}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./SheetContent.vue.vmcRbFL_.js";import"./SheetTitle.vue.toAZpd7y.js";import"./chevron-down.OthDTkKD.js";import"./check.jKQrVD6e.js";/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=Ne("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=Ne("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=Ne("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=Ne("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);function mn(e){return Object.prototype.toString.call(e)==="[object Object]"}function at(e){return mn(e)||Array.isArray(e)}function gn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Je(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==s?!1:n.every(r=>{const c=e[r],l=t[r];return typeof c=="function"?`${c}`==`${l}`:!at(c)||!at(l)?c===l:Je(c,l)})}function ut(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function vn(e,t){if(e.length!==t.length)return!1;const n=ut(e),o=ut(t);return n.every((i,s)=>{const r=o[s];return Je(i,r)})}function Qe(e){return typeof e=="number"}function Ke(e){return typeof e=="string"}function Xe(e){return typeof e=="boolean"}function ft(e){return Object.prototype.toString.call(e)==="[object Object]"}function j(e){return Math.abs(e)}function Ye(e){return Math.sign(e)}function Ie(e,t){return j(e-t)}function hn(e,t){if(e===0||t===0||j(e)<=j(t))return 0;const n=Ie(j(e),j(t));return j(n/e)}function Ee(e){return Le(e).map(Number)}function ie(e){return e[Oe(e)]}function Oe(e){return Math.max(0,e.length-1)}function Ze(e,t){return t===Oe(e)}function dt(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function Le(e){return Object.keys(e)}function _t(e,t){return[e,t].reduce((n,o)=>(Le(o).forEach(i=>{const s=n[i],r=o[i],c=ft(s)&&ft(r);n[i]=c?_t(s,r):r}),n),{})}function yt(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function _n(e,t){const n={start:o,center:i,end:s};function o(){return 0}function i(l){return s(l)/2}function s(l){return t-l}function r(l,u){return Ke(e)?n[e](l):e(t,l,u)}return{measure:r}}function Ce(){let e=[];function t(i,s,r,c={passive:!0}){let l;if("addEventListener"in i)i.addEventListener(s,r,c),l=()=>i.removeEventListener(s,r,c);else{const u=i;u.addListener(r),l=()=>u.removeListener(r)}return e.push(l),o}function n(){e=e.filter(i=>i())}const o={add:t,clear:n};return o}function yn(e,t,n,o){const i=Ce(),s=1e3/60;let r=null,c=0,l=0;function u(){i.add(e,"visibilitychange",()=>{e.hidden&&p()})}function v(){b(),i.clear()}function a(g){r||(r=g);const f=g-r;for(r=g,c+=f;c>=s;)n(),c-=s;const h=j(c/s);o(h),l&&t.requestAnimationFrame(a)}function d(){l||(l=t.requestAnimationFrame(a))}function b(){t.cancelAnimationFrame(l),r=null,c=0,l=0}function p(){r=null,c=0}return{init:u,destroy:v,start:d,stop:b,update:n,render:o}}function xn(e,t){const n=e==="y"?"y":"x",o=e==="y"?"x":"y",i=c(),s=l();function r(v){const{width:a,height:d}=v;return n==="x"?a:d}function c(){return n==="y"?"top":t==="rtl"?"right":"left"}function l(){return n==="y"?"bottom":t==="rtl"?"left":"right"}return{scroll:n,cross:o,startEdge:i,endEdge:s,measureSize:r}}function be(e=0,t=0){const n=j(e-t);function o(u){return u<e}function i(u){return u>t}function s(u){return o(u)||i(u)}function r(u){return s(u)?o(u)?e:t:u}function c(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:r,reachedAny:s,reachedMax:i,reachedMin:o,removeOffset:c}}function xt(e,t,n){const{constrain:o}=be(0,e),i=e+1;let s=r(t);function r(d){return n?j((i+d)%i):o(d)}function c(){return s}function l(d){return s=r(d),a}function u(d){return v().set(c()+d)}function v(){return xt(e,c(),n)}const a={get:c,set:l,add:u,clone:v};return a}function bn(e){const t=e==="rtl"?-1:1;function n(i){return i*t}return{apply:n}}function wn(e,t,n,o,i,s,r,c,l,u,v,a,d,b,p,m,g,f,h,x){const{cross:P}=e,T=["INPUT","SELECT","TEXTAREA"],O={passive:!1},N=Ce(),C=Ce(),D=be(50,225).constrain(p.measure(20)),_={mouse:300,touch:400},E={mouse:500,touch:600},A=m?43:25;let H=!1,q=0,z=0,G=!1,U=!1,ee=!1,ne=!1;function de(S){if(!x)return;function $(B){(Xe(x)||x(S,B))&&ve(B)}const y=n;N.add(y,"dragstart",B=>B.preventDefault(),O).add(y,"touchmove",()=>{},O).add(y,"touchend",()=>{}).add(y,"touchstart",$).add(y,"mousedown",$).add(y,"touchcancel",Q).add(y,"contextmenu",Q).add(y,"click",oe,!0)}function Z(){N.clear(),C.clear()}function le(){const S=ne?o:n;C.add(S,"touchmove",Y,O).add(S,"touchend",Q).add(S,"mousemove",Y,O).add(S,"mouseup",Q)}function ae(S){const $=S.nodeName||"";return T.includes($)}function J(){return(m?E:_)[ne?"mouse":"touch"]}function ge(S,$){const y=d.add(Ye(S)*-1),B=a.byDistance(S,!m).distance;return m||j(S)<D?B:f&&$?B*.5:a.byIndex(y.get(),0).distance}function ve(S){const $=yt(S,i);ne=$,!($&&S.button!==0)&&(ae(S.target)||(ee=m&&$&&!S.buttons&&H,H=Ie(s.get(),c.get())>=2,G=!0,r.pointerDown(S),v.useFriction(0).useDuration(0),s.set(c),le(),q=r.readPoint(S),z=r.readPoint(S,P),b.emit("pointerDown")))}function Y(S){const $=r.readPoint(S),y=r.readPoint(S,P),B=Ie($,q),K=Ie(y,z);if(!U&&!ne&&(!S.cancelable||(U=B>K,!U)))return Q(S);const se=r.pointerMove(S);B>g&&(ee=!0),v.useFriction(.3).useDuration(1),l.start(),s.add(t.apply(se)),S.preventDefault()}function Q(S){const y=a.byDistance(0,!1).index!==d.get(),B=r.pointerUp(S)*J(),K=ge(t.apply(B),y),se=hn(B,K),he=A-10*se,ue=h+se/50;U=!1,G=!1,C.clear(),v.useDuration(he).useFriction(ue),u.distance(K,!m),ne=!1,b.emit("pointerUp")}function oe(S){ee&&(S.stopPropagation(),S.preventDefault())}function W(){return G}return{init:de,pointerDown:W,destroy:Z}}function Sn(e,t){let o,i;function s(a){return a.timeStamp}function r(a,d){const p=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(yt(a,t)?a:a.touches[0])[p]}function c(a){return o=a,i=a,r(a)}function l(a){const d=r(a)-r(i),b=s(a)-s(o)>170;return i=a,b&&(o=a),d}function u(a){if(!o||!i)return 0;const d=r(i)-r(o),b=s(a)-s(o),p=s(a)-s(i)>170,m=d/b;return b&&!p&&j(m)>.1?m:0}return{pointerDown:c,pointerMove:l,pointerUp:u,readPoint:r}}function kn(){function e(n){const{offsetTop:o,offsetLeft:i,offsetWidth:s,offsetHeight:r}=n;return{top:o,right:i+s,bottom:o+r,left:i,width:s,height:r}}return{measure:e}}function In(e){function t(o){return e*(o/100)}return{measure:t}}function En(e,t,n,o,i,s,r){let c,l,u=[],v=!1;function a(m){return i.measureSize(r.measure(m))}function d(m){if(!s)return;l=a(e),u=o.map(a);function g(h){for(const x of h){const P=x.target===e,T=o.indexOf(x.target),O=P?l:u[T],N=a(P?e:o[T]);if(j(N-O)>=.5){n.requestAnimationFrame(()=>{m.reInit(),t.emit("resize")});break}}}c=new ResizeObserver(h=>{v||(Xe(s)||s(m,h))&&g(h)}),[e].concat(o).forEach(h=>c.observe(h))}function b(){c&&c.disconnect(),v=!0}return{init:d,destroy:b}}function Ln(e,t,n,o,i){let s=0,r=0,c=o,l=i,u=e.get(),v=0;function a(){const T=n.get()-e.get(),O=!c;let N=0;return O?(s=0,e.set(n),N=T):(s+=T/c,s*=l,u+=s,e.add(s),N=u-v),r=Ye(N),v=u,P}function d(){const T=n.get()-t.get();return j(T)<.001}function b(){return c}function p(){return r}function m(){return s}function g(){return h(o)}function f(){return x(i)}function h(T){return c=T,P}function x(T){return l=T,P}const P={direction:p,duration:b,velocity:m,seek:a,settled:d,useBaseFriction:f,useBaseDuration:g,useFriction:x,useDuration:h};return P}function Cn(e,t,n,o,i){const s=i.measure(10),r=i.measure(50),c=be(.1,.99);let l=!1;function u(){return!(l||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function v(b){if(!u())return;const p=e.reachedMin(t.get())?"min":"max",m=j(e[p]-t.get()),g=n.get()-t.get(),f=c.constrain(m/r);n.subtract(g*f),!b&&j(g)<s&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function a(b){l=!b}return{constrain:v,toggleActive:a}}function Pn(e,t,n,o,i){const s=be(-t+e,0),r=a(),c=v(),l=d();function u(p,m){return Ie(p,m)<1}function v(){const p=r[0],m=ie(r),g=r.lastIndexOf(p),f=r.indexOf(m)+1;return be(g,f)}function a(){return n.map((p,m)=>{const{min:g,max:f}=s,h=s.constrain(p),x=!m,P=Ze(n,m);return x?f:P||u(g,h)?g:u(f,h)?f:h}).map(p=>parseFloat(p.toFixed(3)))}function d(){if(t<=e+i)return[s.max];if(o==="keepSnaps")return r;const{min:p,max:m}=c;return r.slice(p,m)}return{snapsContained:l,scrollContainLimit:c}}function Dn(e,t,n){const o=t[0],i=n?o-e:ie(t);return{limit:be(i,o)}}function An(e,t,n,o){const s=t.min+.1,r=t.max+.1,{reachedMin:c,reachedMax:l}=be(s,r);function u(d){return d===1?l(n.get()):d===-1?c(n.get()):!1}function v(d){if(!u(d))return;const b=e*(d*-1);o.forEach(p=>p.add(b))}return{loop:v}}function Tn(e){const{max:t,length:n}=e;function o(s){const r=s-t;return n?r/-n:0}return{get:o}}function On(e,t,n,o,i){const{startEdge:s,endEdge:r}=e,{groupSlides:c}=i,l=a().map(t.measure),u=d(),v=b();function a(){return c(o).map(m=>ie(m)[r]-m[0][s]).map(j)}function d(){return o.map(m=>n[s]-m[s]).map(m=>-j(m))}function b(){return c(u).map(m=>m[0]).map((m,g)=>m+l[g])}return{snaps:u,snapsAligned:v}}function $n(e,t,n,o,i,s){const{groupSlides:r}=i,{min:c,max:l}=o,u=v();function v(){const d=r(s),b=!e||t==="keepSnaps";return n.length===1?[s]:b?d:d.slice(c,l).map((p,m,g)=>{const f=!m,h=Ze(g,m);if(f){const x=ie(g[0])+1;return dt(x)}if(h){const x=Oe(s)-ie(g)[0]+1;return dt(x,ie(g)[0])}return p})}return{slideRegistry:u}}function Bn(e,t,n,o,i){const{reachedAny:s,removeOffset:r,constrain:c}=o;function l(p){return p.concat().sort((m,g)=>j(m)-j(g))[0]}function u(p){const m=e?r(p):c(p),g=t.map(h=>h-m).map(h=>v(h,0)).map((h,x)=>({diff:h,index:x})).sort((h,x)=>j(h.diff)-j(x.diff)),{index:f}=g[0];return{index:f,distance:m}}function v(p,m){const g=[p,p+n,p-n];if(!e)return g[0];if(!m)return l(g);const f=g.filter(h=>Ye(h)===m);return f.length?l(f):ie(g)-n}function a(p,m){const g=t[p]-i.get(),f=v(g,m);return{index:p,distance:f}}function d(p,m){const g=i.get()+p,{index:f,distance:h}=u(g),x=!e&&s(g);if(!m||x)return{index:f,distance:p};const P=t[f]-h,T=p+v(P,0);return{index:f,distance:T}}return{byDistance:d,byIndex:a,shortcut:v}}function Mn(e,t,n,o,i,s,r){function c(a){const d=a.distance,b=a.index!==t.get();s.add(d),d&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),b&&(n.set(t.get()),t.set(a.index),r.emit("select"))}function l(a,d){const b=i.byDistance(a,d);c(b)}function u(a,d){const b=t.clone().set(a),p=i.byIndex(b.get(),d);c(p)}return{distance:l,index:u}}function Nn(e,t,n,o,i,s){let r=0;function c(){s.add(document,"keydown",l,!1),t.forEach(u)}function l(a){a.code==="Tab"&&(r=new Date().getTime())}function u(a){const d=()=>{if(new Date().getTime()-r>10)return;e.scrollLeft=0;const m=t.indexOf(a),g=n.findIndex(f=>f.includes(m));Qe(g)&&(i.useDuration(0),o.index(g,0))};s.add(a,"focus",d,{passive:!0,capture:!0})}return{init:c}}function Be(e){let t=e;function n(){return t}function o(l){t=r(l)}function i(l){t+=r(l)}function s(l){t-=r(l)}function r(l){return Qe(l)?l:l.get()}return{get:n,set:o,add:i,subtract:s}}function bt(e,t,n){const o=e.scroll==="x"?r:c,i=n.style;let s=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function c(d){return`translate3d(0px,${d}px,0px)`}function l(d){s||(i.transform=o(t.apply(d)))}function u(d){s=!d}function v(){s||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:v,to:l,toggleActive:u}}function Fn(e,t,n,o,i,s,r,c,l,u){const a=Ee(s),d=Ee(s).reverse(),b=h().concat(x());function p(C,D){return C.reduce((_,E)=>_-s[E],D)}function m(C,D){return C.reduce((_,E)=>p(_,D)>0?_.concat([E]):_,[])}function g(C){return r.map((D,_)=>({start:D-i[_]+.5+C,end:D+n-.5+C}))}function f(C,D,_){const E=g(D);return C.map(A=>{const H=_?0:-o,q=_?o:0,z=_?"end":"start",G=E[A][z];return{index:A,loopPoint:G,slideLocation:Be(-1),translate:bt(e,t,u[A]),target:()=>l.get()>G?H:q}})}function h(){const C=c[0],D=m(d,C);return f(D,o,!1)}function x(){const C=n-c[0]-1,D=m(a,C);return f(D,-o,!0)}function P(){return b.every(({index:C})=>{const D=a.filter(_=>_!==C);return p(D,n)<=.1})}function T(){b.forEach(C=>{const{target:D,translate:_,slideLocation:E}=C,A=D();A!==E.get()&&(_.to(A),E.set(A))})}function O(){b.forEach(C=>C.translate.clear())}return{canLoop:P,clear:O,loop:T,loopPoints:b}}function jn(e,t,n){let o,i=!1;function s(l){if(!n)return;function u(v){for(const a of v)if(a.type==="childList"){l.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(v=>{i||(Xe(n)||n(l,v))&&u(v)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),i=!0}return{init:s,destroy:r}}function Vn(e,t,n,o){const i={};let s=null,r=null,c,l=!1;function u(){c=new IntersectionObserver(p=>{l||(p.forEach(m=>{const g=t.indexOf(m.target);i[g]=m}),s=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(p=>c.observe(p))}function v(){c&&c.disconnect(),l=!0}function a(p){return Le(i).reduce((m,g)=>{const f=parseInt(g),{isIntersecting:h}=i[f];return(p&&h||!p&&!h)&&m.push(f),m},[])}function d(p=!0){if(p&&s)return s;if(!p&&r)return r;const m=a(p);return p&&(s=m),p||(r=m),m}return{init:u,destroy:v,get:d}}function zn(e,t,n,o,i,s){const{measureSize:r,startEdge:c,endEdge:l}=e,u=n[0]&&i,v=p(),a=m(),d=n.map(r),b=g();function p(){if(!u)return 0;const h=n[0];return j(t[c]-h[c])}function m(){if(!u)return 0;const h=s.getComputedStyle(ie(o));return parseFloat(h.getPropertyValue(`margin-${l}`))}function g(){return n.map((h,x,P)=>{const T=!x,O=Ze(P,x);return T?d[x]+v:O?d[x]+a:P[x+1][c]-h[c]}).map(j)}return{slideSizes:d,slideSizesWithGaps:b,startGap:v,endGap:a}}function Rn(e,t,n,o,i,s,r,c,l,u){const{startEdge:v,endEdge:a}=e,d=Qe(o);function b(f,h){return Ee(f).filter(x=>x%h===0).map(x=>f.slice(x,x+h))}function p(f){return f.length?Ee(f).reduce((h,x)=>{const P=ie(h)||0,T=P===0,O=x===Oe(f),N=s[v]-r[P][v],C=s[v]-r[x][a],D=!i&&T?t.apply(c):0,_=!i&&O?t.apply(l):0;return j(C-_-(N+D))>n+u&&h.push(x),O&&h.push(f.length),h},[]).map((h,x,P)=>{const T=Math.max(P[x-1]||0);return f.slice(T,h)}):[]}function m(f){return d?b(f,o):p(f)}return{groupSlides:m}}function Hn(e,t,n,o,i,s,r){const{align:c,axis:l,direction:u,startIndex:v,loop:a,duration:d,dragFree:b,dragThreshold:p,inViewThreshold:m,slidesToScroll:g,skipSnaps:f,containScroll:h,watchResize:x,watchSlides:P,watchDrag:T}=s,O=2,N=kn(),C=N.measure(t),D=n.map(N.measure),_=bn(u),E=xn(l,u),A=E.measureSize(C),H=In(A),q=_n(c,A),z=!a&&!!h,G=a||!!h,{slideSizes:U,slideSizesWithGaps:ee,startGap:ne,endGap:de}=zn(E,C,D,n,G,i),Z=Rn(E,_,A,g,a,C,D,ne,de,O),{snaps:le,snapsAligned:ae}=On(E,q,C,D,Z),J=-ie(le)+ie(ee),{snapsContained:ge,scrollContainLimit:ve}=Pn(A,J,ae,h,O),Y=z?ge:ae,{limit:Q}=Dn(J,Y,a),oe=xt(Oe(Y),v,a),W=oe.clone(),F=Ee(n),S=({dragHandler:_e,scrollBody:Re,scrollBounds:He,options:{loop:$e}})=>{$e||He.constrain(_e.pointerDown()),Re.seek()},$=({scrollBody:_e,translate:Re,location:He,offsetLocation:$e,scrollLooper:Et,slideLooper:Lt,dragHandler:Ct,animation:Pt,eventHandler:st,options:{loop:Dt}},At)=>{const rt=_e.velocity(),it=_e.settled();it&&!Ct.pointerDown()&&(Pt.stop(),st.emit("settle")),it||st.emit("scroll"),$e.set(He.get()-rt+rt*At),Dt&&(Et.loop(_e.direction()),Lt.loop()),Re.to($e.get())},y=yn(o,i,()=>S(ze),_e=>$(ze,_e)),B=.68,K=Y[oe.get()],se=Be(K),he=Be(K),ue=Be(K),ke=Ln(se,he,ue,d,B),je=Bn(a,Y,J,Q,ue),Ve=Mn(y,oe,W,ke,je,ue,r),tt=Tn(Q),nt=Ce(),kt=Vn(t,n,r,m),{slideRegistry:ot}=$n(z,h,Y,ve,Z,F),It=Nn(e,n,ot,Ve,ke,nt),ze={ownerDocument:o,ownerWindow:i,eventHandler:r,containerRect:C,slideRects:D,animation:y,axis:E,direction:_,dragHandler:wn(E,_,e,o,i,ue,Sn(E,i),se,y,Ve,ke,je,oe,r,H,b,p,f,B,T),eventStore:nt,percentOfView:H,index:oe,indexPrevious:W,limit:Q,location:se,offsetLocation:he,options:s,resizeHandler:En(t,r,i,n,E,x,N),scrollBody:ke,scrollBounds:Cn(Q,se,ue,ke,H),scrollLooper:An(J,Q,he,[se,he,ue]),scrollProgress:tt,scrollSnapList:Y.map(tt.get),scrollSnaps:Y,scrollTarget:je,scrollTo:Ve,slideLooper:Fn(E,_,A,J,U,ee,le,Y,he,n),slideFocus:It,slidesHandler:jn(t,r,P),slidesInView:kt,slideIndexes:F,slideRegistry:ot,slidesToScroll:Z,target:ue,translate:bt(E,_,t)};return ze}function qn(){const e={};let t;function n(l){t=l}function o(l){return e[l]||[]}function i(l){return o(l).forEach(u=>u(t,l)),c}function s(l,u){return e[l]=o(l).concat([u]),c}function r(l,u){return e[l]=o(l).filter(v=>v!==u),c}const c={init:n,emit:i,off:r,on:s};return c}const Gn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Un(e){function t(s,r){return _t(s,r||{})}function n(s){const r=s.breakpoints||{},c=Le(r).filter(l=>e.matchMedia(l).matches).map(l=>r[l]).reduce((l,u)=>t(l,u),{});return t(s,c)}function o(s){return s.map(r=>Le(r.breakpoints||{})).reduce((r,c)=>r.concat(c),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function Kn(e){let t=[];function n(s,r){return t=r.filter(({options:c})=>e.optionsAtMedia(c).active!==!1),t.forEach(c=>c.init(s,e)),r.reduce((c,l)=>Object.assign(c,{[l.name]:l}),{})}function o(){t=t.filter(s=>s.destroy())}return{init:n,destroy:o}}function Me(e,t,n){const o=e.ownerDocument,i=o.defaultView,s=Un(i),r=Kn(s),c=Ce(),l=qn(),{mergeOptions:u,optionsAtMedia:v,optionsMediaQueries:a}=s,{on:d,off:b,emit:p}=l,m=E;let g=!1,f,h=u(Gn,Me.globalOptions),x=u(h),P=[],T,O,N;function C(){const{container:F,slides:S}=x;O=(Ke(F)?e.querySelector(F):F)||e.children[0];const y=Ke(S)?O.querySelectorAll(S):S;N=[].slice.call(y||O.children)}function D(F){const S=Hn(e,O,N,o,i,F,l);if(F.loop&&!S.slideLooper.canLoop()){const $=Object.assign({},F,{loop:!1});return D($)}return S}function _(F,S){g||(h=u(h,F),x=v(h),P=S||P,C(),f=D(x),a([h,...P.map(({options:$})=>$)]).forEach($=>c.add($,"change",E)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(W),f.resizeHandler.init(W),f.slidesHandler.init(W),f.options.loop&&f.slideLooper.loop(),O.offsetParent&&N.length&&f.dragHandler.init(W),T=r.init(W,P)))}function E(F,S){const $=Z();A(),_(u({startIndex:$},F),S),l.emit("reInit")}function A(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),c.clear()}function H(){g||(g=!0,c.clear(),A(),l.emit("destroy"))}function q(F,S,$){!x.active||g||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:x.duration),f.scrollTo.index(F,$||0))}function z(F){const S=f.index.add(1).get();q(S,F,-1)}function G(F){const S=f.index.add(-1).get();q(S,F,1)}function U(){return f.index.add(1).get()!==Z()}function ee(){return f.index.add(-1).get()!==Z()}function ne(){return f.scrollSnapList}function de(){return f.scrollProgress.get(f.location.get())}function Z(){return f.index.get()}function le(){return f.indexPrevious.get()}function ae(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function ge(){return T}function ve(){return f}function Y(){return e}function Q(){return O}function oe(){return N}const W={canScrollNext:U,canScrollPrev:ee,containerNode:Q,internalEngine:ve,destroy:H,off:b,on:d,emit:p,plugins:ge,previousScrollSnap:le,reInit:m,rootNode:Y,scrollNext:z,scrollPrev:G,scrollProgress:de,scrollSnapList:ne,scrollTo:q,selectedScrollSnap:Z,slideNodes:oe,slidesInView:ae,slidesNotInView:J};return _(t,n),setTimeout(()=>l.emit("init"),0),W}Me.globalOptions=void 0;function We(e={},t=[]){const n=R(xe(e)?e.value:e),o=R(xe(t)?t.value:t),i=R(),s=R();function r(){s.value&&s.value.reInit(n.value,o.value)}return Fe(()=>{!gn()||!i.value||(Me.globalOptions=We.globalOptions,s.value=Me(i.value,n.value,o.value))}),zt(()=>{s.value&&s.value.destroy()}),xe(e)&&qe(e,c=>{Je(n.value,c)||(n.value=c,r())}),xe(t)&&qe(t,c=>{vn(o.value,c)||(o.value=c,r())}),[i,s]}We.globalOptions=void 0;const[Jn,Qn]=Rt(({opts:e,orientation:t,plugins:n},o)=>{const[i,s]=We({...e,axis:t==="horizontal"?"x":"y"},n);function r(){var a;(a=s.value)==null||a.scrollPrev()}function c(){var a;(a=s.value)==null||a.scrollNext()}const l=R(!0),u=R(!0);function v(a){l.value=a.canScrollNext(),u.value=a.canScrollPrev()}return Fe(()=>{var a,d,b;s.value&&((a=s.value)==null||a.on("init",v),(d=s.value)==null||d.on("reInit",v),(b=s.value)==null||b.on("select",v),o("init-api",s.value))}),{carouselRef:i,carouselApi:s,canScrollPrev:u,canScrollNext:l,scrollPrev:r,scrollNext:c,orientation:t}});function wt(){const e=Qn();if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const Xn=ce({__name:"Carousel",props:{opts:{},plugins:{},orientation:{default:"horizontal"},class:{}},emits:["init-api"],setup(e,{expose:t,emit:n}){const o=e,s=Jn(o,n);t(s);function r(c){const l=o.orientation==="vertical"?"ArrowUp":"ArrowLeft",u=o.orientation==="vertical"?"ArrowDown":"ArrowRight";if(c.key===l){c.preventDefault(),s.scrollPrev();return}c.key===u&&(c.preventDefault(),s.scrollNext())}return(c,l)=>(M(),X("div",{class:we(I(me)("relative",o.class)),role:"region","aria-roledescription":"carousel",tabindex:"0",onKeydown:r},[re(c.$slots,"default",Pe(De(I(s))))],34))}}),Yn=ce({inheritAttrs:!1,__name:"CarouselContent",props:{class:{}},setup(e){const t=e,{carouselRef:n,orientation:o}=wt();return(i,s)=>(M(),X("div",{ref_key:"carouselRef",ref:n,class:"overflow-hidden"},[w("div",mt({class:I(me)("flex",I(o)==="horizontal"?"-ml-4":"-mt-4 flex-col",t.class)},i.$attrs),[re(i.$slots,"default")],16)],512))}}),Zn=ce({__name:"CarouselItem",props:{class:{}},setup(e){const t=e,{orientation:n}=wt();return(o,i)=>(M(),X("div",{role:"group","aria-roledescription":"slide",class:we(I(me)("min-w-0 shrink-0 grow-0 basis-full",I(n)==="horizontal"?"pl-4":"pt-4",t.class))},[re(o.$slots,"default")],2))}}),Wn=ce({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(e){const t=e,n=Ae(()=>{const{class:o,...i}=t;return i});return(o,i)=>(M(),te(I(Ht),mt(n.value,{class:I(me)("w-9 h-9 flex items-center justify-center",t.class)}),{default:L(()=>[re(o.$slots,"default",{},()=>[k(I(cn))])]),_:3},16,["class"]))}}),eo=ce({__name:"PaginationFirst",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(e){const t=e,n=Ae(()=>{const{class:o,...i}=t;return i});return(o,i)=>(M(),te(I(qt),Pe(De(n.value)),{default:L(()=>[k(I(Te),{class:we(I(me)("w-10 h-10 p-0",t.class)),variant:"outline"},{default:L(()=>[re(o.$slots,"default",{},()=>[k(I(dn),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),to=ce({__name:"PaginationLast",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(e){const t=e,n=Ae(()=>{const{class:o,...i}=t;return i});return(o,i)=>(M(),te(I(Gt),Pe(De(n.value)),{default:L(()=>[k(I(Te),{class:we(I(me)("w-10 h-10 p-0",t.class)),variant:"outline"},{default:L(()=>[re(o.$slots,"default",{},()=>[k(I(pn),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),no=ce({__name:"PaginationNext",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(e){const t=e,n=Ae(()=>{const{class:o,...i}=t;return i});return(o,i)=>(M(),te(I(Ut),Pe(De(n.value)),{default:L(()=>[k(I(Te),{class:we(I(me)("w-10 h-10 p-0",t.class)),variant:"outline"},{default:L(()=>[re(o.$slots,"default",{},()=>[k(I(fn),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),oo=ce({__name:"PaginationPrev",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(e){const t=e,n=Ae(()=>{const{class:o,...i}=t;return i});return(o,i)=>(M(),te(I(Kt),Pe(De(n.value)),{default:L(()=>[k(I(Te),{class:we(I(me)("w-10 h-10 p-0",t.class)),variant:"outline"},{default:L(()=>[re(o.$slots,"default",{},()=>[k(I(un),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}});async function so(){const{data:e,error:t}=await Ge().value.from("board_kr").select().order("kr");return t?(console.error(t),[]):e??[]}function ro(e,t){const n=e.getBoundingClientRect();if(!t)return n.top>=0&&n.bottom<=window.innerHeight;const o=t.getBoundingClientRect();return n.top>=o.top&&n.bottom<=o.bottom}async function io(e){return await gt(),e.value instanceof HTMLElement?e.value:e.value?document.querySelector(e.value):null}function pt(e){let t=`0px 0px ${e.distance}px 0px`;e.top&&(t=`${e.distance}px 0px 0px 0px`);const n=new IntersectionObserver(o=>{o[0].isIntersecting&&(e.firstload&&e.emit(),e.firstload=!0)},{root:e.parentEl,rootMargin:t});return n.observe(e.infiniteLoading.value),n}const St=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},co={},lo=e=>(vt("data-v-d3e37633"),e=e(),ht(),e),ao={class:"container"},uo=lo(()=>w("div",{class:"spinner"},null,-1)),fo=[uo];function po(e,t){return M(),X("div",ao,fo)}const mo=St(co,[["render",po],["__scopeId","data-v-d3e37633"]]),go={class:"state-error"},vo=ce({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(e,{emit:t}){const n=e;let o=null,i=0;const s=R(null),r=R(""),{top:c,firstload:l,distance:u}=n,{identifier:v,target:a}=Jt(n),d={infiniteLoading:s,top:c,firstload:l,distance:u,parentEl:null,emit(){i=(d.parentEl||document.documentElement).scrollHeight,b.loading(),t("infinite",b)}},b={loading(){r.value="loading"},async loaded(){r.value="loaded";const p=d.parentEl||document.documentElement;await gt(),c&&(p.scrollTop=p.scrollHeight-i),ro(s.value,d.parentEl)&&d.emit()},complete(){r.value="complete",o==null||o.disconnect()},error(){r.value="error"}};return qe(v,()=>{o==null||o.disconnect(),o=pt(d)}),Fe(async()=>{d.parentEl=await io(a),o=pt(d)}),Qt(()=>{o==null||o.disconnect()}),(p,m)=>(M(),X("div",{ref_key:"infiniteLoading",ref:s,style:{"min-height":"1px"}},[Xt(w("div",null,[re(p.$slots,"spinner",{},()=>[k(mo)],!0)],512),[[Yt,r.value=="loading"]]),r.value=="complete"?re(p.$slots,"complete",{key:0},()=>{var g;return[w("span",null,V(((g=p.slots)==null?void 0:g.complete)||"No more results!"),1)]},!0):Ue("",!0),r.value=="error"?re(p.$slots,"error",{key:1,retry:d.emit},()=>{var g;return[w("span",go,[w("span",null,V(((g=p.slots)==null?void 0:g.error)||"Oops something went wrong!"),1),w("button",{class:"retry",onClick:m[0]||(m[0]=(...f)=>d.emit&&d.emit(...f))},"retry")])]},!0):Ue("",!0)],512))}}),ho=St(vo,[["__scopeId","data-v-a7077831"]]),et=e=>(vt("data-v-92bff541"),e=e(),ht(),e),_o={class:"flex items-center gap-2"},yo=["src"],xo={class:"sm:hidden"},bo={class:"w-screen mb-4"},wo={class:"relative w-full"},So={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},ko={class:"font-bold line-clamp-2"},Io={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},Eo={class:"relative h-full"},Lo=["src"],Co=et(()=>w("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0.5)
            )`,"pointer-events":"none"}},null,-1)),Po={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},Do={class:"flex gap-4 items-end flex-1 overflow-hidden"},Ao=["src"],To={class:"flex-col flex-1 overflow-hidden"},Oo={class:"line-clamp-2"},$o={class:"flex text-xs gap-2"},Bo={class:"font-normal"},Mo={class:"flex flex-col gap-2 text-xl items-center shrink-0"},No=["onClick"],Fo={class:"text-sm"},jo={class:"flex flex-col gap-1 items-center"},Vo={class:"text-sm"},zo={class:"flex flex-col gap-1 items-center"},Ro={class:"text-sm"},Ho={class:"w-full rounded-md p-2 flex items-center justify-center"},qo={class:"md:p-2 md:py-4 md:pt-14 hidden sm:block"},Go={class:"grid"},Uo=et(()=>w("div",{class:"grid-sizer"},null,-1)),Ko={class:"w-screen mb-4 grid-item md:px-2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6 4xl:w-1/7"},Jo={class:"relative w-full"},Qo={class:"absolute z-10 p-2 text-white w-2/3",style:{"pointer-events":"none"}},Xo={class:"font-bold line-clamp-2"},Yo={class:"text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"},Zo={class:"relative h-full"},Wo=["src"],es=et(()=>w("div",{class:"absolute top-0 left-0 w-full h-full md:rounded-md",style:{background:`linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.5)
              )`,"pointer-events":"none"}},null,-1)),ts={class:"p-4 flex w-full absolute bottom-0 text-white justify-between gap-4 items-end overflow-hidden",style:{"pointer-events":"none"}},ns={class:"flex gap-4 items-end flex-1 overflow-hidden"},os=["src"],ss={class:"flex-col flex-1 overflow-hidden"},rs={class:"line-clamp-2"},is={class:"flex text-xs gap-2"},cs={class:"font-normal"},ls={class:"flex flex-col gap-2 text-xl items-center shrink-0"},as=["onClick"],us={class:"text-sm"},fs={class:"flex flex-col gap-1 items-center"},ds={class:"text-sm"},ps={class:"flex flex-col gap-1 items-center"},ms={class:"text-sm"},Se=10,gs=ce({__name:"board",setup(e){const t=R(1),n=R(1),o=R(100),i=R(0),s=Zt("isScrollingDown"),r=R([]),c=R([]),l=R(["스포","핫산","건국담","창작","번역","짤","유출","게임","팬아트","분석","창조","정보","일반","이벤트","구매","원작","질문","성지","잡담"]),u=R("date"),v=R();function a(){x.value=!1,n.value=1,t.value=1,f()}let d=null;const b=Wt();en();const p=R();function m(){x.value=!1,n.value=1,t.value=1,f()}const g=R([]);Fe(async()=>{f(),c.value=await so()});async function f(){document.documentElement.scrollTop=0,console.log("searchBooks");let _=Ge().value.from("board").select().neq("link",null).range((n.value-1)*o.value,n.value*o.value-1),E=Ge().value.from("board").select("*",{count:"exact",head:!0}).neq("link",null);v.value&&(_=_.ilike("subject",`%${v.value}%`),E=E.ilike("subject",`%${v.value}%`)),p.value&&(_=_.eq("kr",p.value),E=E.eq("kr",p.value));const{data:A,error:H}=await _.order(u.value,{ascending:!1});H?console.error(H):(r.value=A??[],g.value=[...g.value,...r.value.slice(0,t.value*Se)],T());const{data:q,error:z,status:G,count:U}=await E;z?console.error(z):(console.log(q),console.log(G),console.log(U),i.value=U||0)}function h(_){t.value=1,n.value=_,x.value=!1,f()}const x=R(!1);function P(_){if(console.log("infiniteHandler"),x.value)return;if(console.log(`${r.value.length} < ${(t.value-1)*Se}`),r.value.length==t.value*Se){t.value=1,n.value=n.value+1,x.value=!1,f();return}x.value=!0;const E=setTimeout(()=>{try{t.value++;const A=[...r.value.slice((t.value-1)*Se,t.value*Se)];if(A.length==0)return;g.value.push(...A),g.value=[...g.value,...A],setTimeout(()=>{r.value.length<t.value*Se?_.loaded():_.complete(),clearTimeout(E),x.value=!1})}catch(A){console.error(A),_.error()}})}function T(){console.log("gridReorder"),d=document.querySelector(".grid"),console.log(d);for(let _=0;_<100;_++)setTimeout(()=>{new Masonry(d,{itemSelector:".grid-item",percentPosition:!0})},1e3*_)}function O(_){if(_.includes("["))return JSON.parse(_);{let E=[];return E.push(_),E}}const N=R(!1),C=R();async function D(_){var H,q,z,G;const{dc:E}=nn(_.kr),{data:A}=await ln(`/api/dcinside/${E}/${_.num}?kr=${_.kr}`,"$Hg2q9B5c9C");C.value=A.value,(q=(H=C.value)==null?void 0:H.comment)!=null&&q.comments&&(C.value.comment.comments=(G=(z=C.value)==null?void 0:z.comment)==null?void 0:G.comments.filter(U=>U.no!=0)),N.value=!N.value}return(_,E)=>{const A=Tt,H=Ot,q=$t,z=Bt,G=Mt,U=Nt,ee=Ft,ne=jt,de=Vt,Z=Zn,le=Yn,ae=Xn,J=tn("font-awesome-icon"),ge=eo,ve=oo,Y=Te,Q=on,oe=Wn,W=no,F=to,S=sn,$=rn;return M(),X(fe,null,[k(A,{open:I(N),reply:I(C),"onUpdate:open":E[0]||(E[0]=y=>N.value=!I(N))},null,8,["open","reply"]),w("div",{class:we(["fixed top-13 w-full z-20 border-y bg-white dark:bg-black",{hidden:I(s)}])},[k(ne,{class:"border-0"},{default:L(()=>[k(ee,{modelValue:I(p),"onUpdate:modelValue":[E[1]||(E[1]=y=>xe(p)?p.value=y:null),m]},{default:L(()=>[k(q,{class:"w-fit border-0"},{default:L(()=>[k(H,{placeholder:"comic"})]),_:1}),k(U,null,{default:L(()=>[k(G,null,{default:L(()=>[(M(!0),X(fe,null,ye(I(c),y=>(M(),te(z,{value:y.kr},{default:L(()=>[w("div",_o,[w("img",{class:"h-8 w-fit rounded-md object-cover",src:I(b)[y.kr]},null,8,yo),w("div",null,V(y.kr),1)])]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),k(ee,{modelValue:I(v),"onUpdate:modelValue":[E[2]||(E[2]=y=>xe(v)?v.value=y:null),m]},{default:L(()=>[k(q,{class:"w-fit border-0"},{default:L(()=>[k(H,{placeholder:"sub"})]),_:1}),k(U,null,{default:L(()=>[k(G,null,{default:L(()=>[(M(!0),X(fe,null,ye(I(l),y=>(M(),te(z,{value:y},{default:L(()=>[pe(V(y),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),k(ee,{modelValue:I(u),"onUpdate:modelValue":[E[3]||(E[3]=y=>xe(u)?u.value=y:null),a]},{default:L(()=>[k(q,{class:"w-fit border-0"},{default:L(()=>[k(H,{placeholder:"order"})]),_:1}),k(U,null,{default:L(()=>[k(G,null,{default:L(()=>[k(z,{value:"date"},{default:L(()=>[pe(" 시간순 ")]),_:1}),k(z,{value:"recommend"},{default:L(()=>[pe(" 추천순 ")]),_:1}),k(z,{value:"number"},{default:L(()=>[pe(" 덧글순 ")]),_:1}),k(z,{value:"count"},{default:L(()=>[pe(" 조회순 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],2),w("div",xo,[(M(!0),X(fe,null,ye(I(g),y=>(M(),X("div",bo,[w("div",wo,[w("div",So,[w("div",ko,V(y.title),1),w("div",Io,V(y.writer),1)]),k(ae,null,{default:L(()=>[k(le,null,{default:L(()=>[(M(!0),X(fe,null,ye(O(y.link),(B,K)=>(M(),te(Z,{key:K},{default:L(()=>[w("div",Eo,[w("img",{class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in _?_.replaceDomain:I(ct))(B).replace(/co\.kr/g,"com")},null,8,Lo),k(de,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:L(()=>[pe(V(K+1)+" / "+V(O(y.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),Co,w("div",Po,[w("div",Do,[w("img",{class:"h-16 rounded-md object-cover shrink-0",src:I(b)[y.kr]},null,8,Ao),w("div",To,[w("div",Oo,V(y.content),1),w("div",$o,[w("div",Bo,V(("timeAgo"in _?_.timeAgo:I(lt))(y.date)),1)])])]),w("div",Mo,[w("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:B=>D(y)},[k(J,{icon:["far","comment"]}),w("div",Fo,V(y.number),1)],8,No),w("div",jo,[k(J,{icon:["far","eye"]}),w("div",Vo,V(y.count),1)]),w("div",zo,[k(J,{icon:["fas","star"]}),w("div",Ro,V(y.recommend),1)])])])])]))),256)),w("div",Ho,[I(g).length>0&&I(x)==!1?(M(),te(I(ho),{key:0,onInfinite:P})):Ue("",!0)])]),w("div",qo,[w("div",Go,[Uo,(M(!0),X(fe,null,ye(I(r),y=>(M(),X("div",Ko,[w("div",Jo,[w("div",Qo,[w("div",Xo,V(y.title),1),w("div",Yo,V(y.writer),1)]),k(ae,null,{default:L(()=>[k(le,null,{default:L(()=>[(M(!0),X(fe,null,ye(O(y.link),(B,K)=>(M(),te(Z,{key:K},{default:L(()=>[w("div",Zo,[w("img",{class:"md:rounded-md min-h-56 max-h-256 h-full w-full object-scale-down",src:("replaceDomain"in _?_.replaceDomain:I(ct))(B).replace(/co\.kr/g,"com")},null,8,Wo),k(de,{class:"absolute top-3 right-3 bg-opacity-50 bg-black"},{default:L(()=>[pe(V(K+1)+" / "+V(O(y.link).length),1)]),_:2},1024)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),es,w("div",ts,[w("div",ns,[w("img",{class:"h-16 rounded-md object-cover shrink-0",src:I(b)[y.kr]},null,8,os),w("div",ss,[w("div",rs,V(y.content),1),w("div",is,[w("div",cs,V(("timeAgo"in _?_.timeAgo:I(lt))(y.date)),1)])])]),w("div",ls,[w("div",{class:"flex flex-col gap-1 items-center",style:{"pointer-events":"auto"},onClick:B=>D(y)},[k(J,{icon:["far","comment"]}),w("div",us,V(y.number),1)],8,as),w("div",fs,[k(J,{icon:["far","eye"]}),w("div",ds,V(y.count),1)]),w("div",ps,[k(J,{icon:["fas","star"]}),w("div",ms,V(y.recommend),1)])])])])]))),256))]),k($,{class:"flex justify-center",total:I(i)/10,"sibling-count":1,"show-edges":"","default-page":1},{default:L(()=>[k(S,{class:"flex items-center gap-1"},{default:L(({items:y})=>[k(ge),k(ve),(M(!0),X(fe,null,ye(y,(B,K)=>(M(),X(fe,null,[B.type==="page"?(M(),te(Q,{key:K,value:B.value,"as-child":""},{default:L(()=>[k(Y,{class:"w-10 h-10 p-0",variant:B.value===I(n)?"default":"outline",onClick:se=>h(B.value)},{default:L(()=>[pe(V(B.value),1)]),_:2},1032,["variant","onClick"])]),_:2},1032,["value"])):(M(),te(oe,{key:B.type,index:K},null,8,["index"]))],64))),256)),k(W),k(F)]),_:1})]),_:1},8,["total"])])],64)}}}),Ds=an(gs,[["__scopeId","data-v-92bff541"]]);export{Ds as default};
