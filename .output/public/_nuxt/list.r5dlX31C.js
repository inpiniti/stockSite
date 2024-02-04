import{_ as G,a as E,b as J,c as N,d as z}from"./DialogContent.vue.R0udzmYr.js";import{_ as Q}from"./DialogFooter.vue.iR7YKkNp.js";import{_ as R}from"./Label.vue.pK7Pn2A0.js";import{_ as X}from"./Input.vue.vlxe0U05.js";import{_ as F}from"./index.SXG93xuR.js";import{P as Y,n as w,Q as H,u as ee,r as M,o as v,q as $,w as t,d as _,b as e,s as o,a as B,R as q,G as P,H as W,I as L,S as oe,T as te,$ as se,t as O,y as ne,U as ae,c as j,V as le,W as ie,X as re,Y as ue,Z as ce,F as de,x as me,v as pe,a0 as fe,a1 as _e,a2 as ge,K as he,N as T,D as ke,a3 as ve}from"./entry.xsEIfJyE.js";import{u as g}from"./DataTableDropDown.vue.124lGtmL.js";import{_ as Be}from"./Header.vue.99QvOdEL.js";import{_ as be,a as ye,b as Ce}from"./PopoverContent.vue.u4iCr5Xd.js";import{a as $e}from"./book.GAOEFvHx.js";import{_ as we}from"./DataTable.vue.mXfP0zS4.js";import{u as Z}from"./fetch.6QBMjAE9.js";import{columns as Le}from"./columns.8LDDA8pP.js";import"./DropdownMenuContent.vue.p_-pHIN2.js";import"./index.CGdu5o_r.js";import"./check.qRHhT-ba.js";import"./chevron-down.VItxbEbg.js";/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=Y("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),We={class:"grid gap-4 py-4"},xe={class:"grid grid-cols-4 items-center gap-4"},Ve={class:"grid grid-cols-4 items-center gap-4"},De={class:"grid grid-cols-4 items-center gap-4"},Ke={class:"grid grid-cols-4 items-center gap-4"},Ue={class:"grid grid-cols-4 items-center gap-4"},Se=w({__name:"book",emits:["update:open"],setup(f,{emit:l}){const i=H("https://etnyrefdmddqiuatswhb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"),c=ee("bookOpen"),u=M(!1),h=l;async function k(){u.value=!0,await i.from("book").update({kr:g().selected.value.kr,img:g().selected.value.img,namu:g().selected.value.namu,dc:g().selected.value.dc}).eq("jp",g().selected.value.jp),u.value=!1,c.value=!1,h("update:open")}return(n,d)=>{const x=G,V=E,D=J,b=R,y=X,K=F,U=Q,S=N,r=z;return v(),$(r,{open:o(c),"onUpdate:open":d[5]||(d[5]=s=>c.value=!1)},{default:t(()=>[e(S,{class:"sm:max-w-[425px]"},{default:t(()=>[e(D,null,{default:t(()=>[e(x,null,{default:t(()=>[_("만화책 수정")]),_:1}),e(V,null,{default:t(()=>[_(" 만화책의 한국어 제목 및 책의 이미지를 수정할 수 있습니다. ")]),_:1})]),_:1}),B("div",We,[B("div",xe,[e(b,{for:"name",class:"text-right"},{default:t(()=>[_(" 일본어 제목 ")]),_:1}),e(y,{id:"name",class:"col-span-3",modelValue:("useBook"in n?n.useBook:o(g))().selected.value.jp,"onUpdate:modelValue":d[0]||(d[0]=s=>("useBook"in n?n.useBook:o(g))().selected.value.jp=s)},null,8,["modelValue"])]),B("div",Ve,[e(b,{for:"name",class:"text-right"},{default:t(()=>[_(" 한국어 제목 ")]),_:1}),e(y,{id:"name",class:"col-span-3",modelValue:("useBook"in n?n.useBook:o(g))().selected.value.kr,"onUpdate:modelValue":d[1]||(d[1]=s=>("useBook"in n?n.useBook:o(g))().selected.value.kr=s)},null,8,["modelValue"])]),B("div",De,[e(b,{for:"username",class:"text-right"},{default:t(()=>[_(" 이미지 url ")]),_:1}),e(y,{id:"username",class:"col-span-3",modelValue:("useBook"in n?n.useBook:o(g))().selected.value.img,"onUpdate:modelValue":d[2]||(d[2]=s=>("useBook"in n?n.useBook:o(g))().selected.value.img=s)},null,8,["modelValue"])]),B("div",Ke,[e(b,{for:"namu",class:"text-right"},{default:t(()=>[_(" 나무위키 url ")]),_:1}),e(y,{id:"namu",class:"col-span-3",modelValue:("useBook"in n?n.useBook:o(g))().selected.value.namu,"onUpdate:modelValue":d[3]||(d[3]=s=>("useBook"in n?n.useBook:o(g))().selected.value.namu=s)},null,8,["modelValue"])]),B("div",Ue,[e(b,{for:"namu",class:"text-right"},{default:t(()=>[_(" dcinside id ")]),_:1}),e(y,{id:"namu",class:"col-span-3",modelValue:("useBook"in n?n.useBook:o(g))().selected.value.dc,"onUpdate:modelValue":d[4]||(d[4]=s=>("useBook"in n?n.useBook:o(g))().selected.value.dc=s)},null,8,["modelValue"])])]),e(U,null,{default:t(()=>[e(K,{onClick:k},{default:t(()=>[_(" Save changes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Ae=w({__name:"Command",props:{modelValue:{},defaultValue:{},open:{type:Boolean},defaultOpen:{type:Boolean},searchTerm:{},multiple:{type:Boolean},disabled:{type:Boolean},name:{},dir:{},filterFunction:{type:Function},displayValue:{type:Function},asChild:{type:Boolean},as:{}},emits:["update:modelValue","update:open","update:searchTerm"],setup(f,{emit:l}){const u=q(f,l);return(h,k)=>(v(),$(o(oe),W(o(u),{open:!0,"model-value":"",class:o(L)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",h.$attrs.class??"")}),{default:t(()=>[P(h.$slots,"default")]),_:3},16,["class"]))}}),Pe=w({__name:"CommandEmpty",props:{asChild:{type:Boolean},as:{}},setup(f){const l=f;return(i,c)=>(v(),$(o(te),W(l,{class:o(L)("py-6 text-center text-sm",i.$attrs.class??"")}),{default:t(()=>[P(i.$slots,"default")]),_:3},16,["class"]))}}),je=w({__name:"CommandGroup",props:{asChild:{type:Boolean},as:{},heading:{}},setup(f){const l=f;return(i,c)=>(v(),$(o(ae),W(l,{class:o(L)("overflow-hidden p-1 text-foreground",i.$attrs.class??"")}),{default:t(()=>[i.heading?(v(),$(o(se),{key:0,class:"px-2 py-1.5 text-xs font-medium text-muted-foreground"},{default:t(()=>[_(O(i.heading),1)]),_:1})):ne("",!0),P(i.$slots,"default")]),_:3},16,["class"]))}}),Me={class:"flex items-center border-b px-3","cmdk-input-wrapper":""},Oe={inheritAttrs:!1},Fe=w({...Oe,__name:"CommandInput",props:{type:{},disabled:{type:Boolean},autoFocus:{type:Boolean},asChild:{type:Boolean},as:{}},setup(f){const l=f;return(i,c)=>(v(),j("div",Me,[e(o(Ie),{class:"mr-2 h-4 w-4 shrink-0 opacity-50"}),e(o(le),W({...l,...i.$attrs},{"auto-focus":"",class:o(L)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",i.$attrs.class??"")}),null,16,["class"])]))}}),Te=w({__name:"CommandItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(f,{emit:l}){const i=f,u=ie(l);return(h,k)=>(v(),$(o(ue),W({...i,...o(u)},{class:o(L)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",h.$attrs.class??""),onSelect:k[0]||(k[0]=re(()=>{},["prevent"]))}),{default:t(()=>[P(h.$slots,"default")]),_:3},16,["class"]))}}),Ze={role:"presentation"},qe=w({__name:"CommandList",props:{forceMount:{type:Boolean},position:{},bodyLock:{type:Boolean},dismissable:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},onPlaced:{type:Function},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(f,{emit:l}){const u=q(f,l);return(h,k)=>(v(),$(o(ce),W(o(u),{class:o(L)("max-h-[300px] overflow-y-auto overflow-x-hidden",h.$attrs.class??"")}),{default:t(()=>[B("div",Ze,[P(h.$slots,"default")])]),_:3},16,["class"]))}});function Ge(f,l){return v(),j("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor"})])}function Ee(f,l){return v(),j("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:"currentColor"})])}const Je=w({__name:"Combobox",emits:["select"],setup(f,{emit:l}){const i=$e(),c=M(!1),u=M(""),h=l;function k(n){typeof n.detail.value=="string"&&(u.value=n.detail.value),c.value=!1,h("select",u.value)}return(n,d)=>{const x=F,V=be,D=Fe,b=Pe,y=Te,K=je,U=qe,S=Ae,r=ye,s=Ce;return v(),$(s,{open:c.value,"onUpdate:open":d[0]||(d[0]=a=>c.value=a)},{default:t(()=>[e(V,{"as-child":""},{default:t(()=>[e(x,{variant:"outline",role:"combobox","aria-expanded":c.value,class:"w-[200px] justify-between"},{default:t(()=>{var a;return[_(O(u.value?(a=o(i).find(m=>m.value===u.value))==null?void 0:a.label:"Select ")+" ",1),e(o(Ge),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),e(r,{class:"w-[200px] p-0"},{default:t(()=>[e(S,null,{default:t(()=>[e(D,{class:"h-9",placeholder:"Search "}),e(b,null,{default:t(()=>[_("No framework found.")]),_:1}),e(U,null,{default:t(()=>[e(K,null,{default:t(()=>[(v(!0),j(de,null,pe(o(i),a=>(v(),$(y,{key:a.value,value:a.value,onSelect:k},{default:t(()=>[_(O(a.label)+" ",1),e(o(Ee),{class:me(o(L)("ml-auto h-4 w-4",u.value===a.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Ne={class:"p-4 flex flex-col gap-4"},ze={class:"flex gap-2"},po=w({__name:"list",setup(f){const{toast:l}=fe(),i=_e().value,c=ge(),u=M(""),h=he(()=>c.value.map(r=>{const s=i.filter(a=>a.kr===r.kr).length>0;return{...r,isGenre:s}}));async function k(r){l({title:"fetchBooks",description:"books 를 가져오는중"}),await ve(r),l({title:"fetchBooks",description:"books 를 가져옴"})}function n(){k()}function d(r){k(r),u.value=r}async function x(){await Z(`/api/book/${u.value}`,"$FMbvadBTOo"),k(u.value)}function V(){const r=c.value,s=r.filter(m=>m.kr&&m.img),a=r.filter(m=>!m.kr||!m.img);return{bookListWithKr:s,bookListWithoutKr:a}}function D(){const{bookListWithKr:r,bookListWithoutKr:s}=V();return s.map(m=>{const p=r.find(A=>A.jp===m.jp),{kr:C,img:I}=p||{kr:void 0,img:void 0};return{...m,kr:C,img:I}})}function b(){return D().filter(a=>a.kr)}function y(){return b().filter((a,m,p)=>m===p.findIndex(C=>C.jp===a.jp))}async function K(){y().forEach(async s=>{await T().value.from("book").update({kr:s.kr,img:s.img}).eq("jp",s.jp)})}function U(){u.value==""?k():k(u.value)}async function S(){var a,m;const s=ke().filter(p=>!i.some(C=>C.kr===p.kr));for(const p of s){const C=p.namu?p.namu:p.kr,{data:I}=await Z(`/api/namuWiki/${C}`,"$vlOMEK4siZ");(a=I.value)!=null&&a.gneres?(await T().value.from("genre").insert((m=I.value)==null?void 0:m.gneres.map(A=>({kr:p.kr,genre_name:A}))),l({title:"fetchGenre",description:`${p.kr} 의 장르를 업데이트 함`})):l({title:"fetchGenre",description:`${p.kr} 의 장르를 업데이트 실패함`}),await new Promise(A=>setTimeout(A,1e3))}}return(r,s)=>{const a=Se,m=Be,p=F,C=Je,I=we;return v(),j("div",Ne,[e(a,{"onUpdate:open":U}),e(m,{title:"List",description:"책 리스트를 볼 수 있으며, 책 편집을 하는 화면 입니다."}),B("div",ze,[e(p,{onClick:x,disabled:o(c).length!=0},{default:t(()=>[_("수집하기")]),_:1},8,["disabled"]),e(p,{onClick:S},{default:t(()=>[_("장르 업데이트")]),_:1}),e(p,{onClick:K},{default:t(()=>[_("kr, img 업데이트")]),_:1}),e(p,{variant:"secondary",onClick:n},{default:t(()=>[_("전체 조회")]),_:1}),e(C,{onSelect:d})]),e(I,{columns:o(Le),data:o(h)},null,8,["columns","data"])])}}});export{po as default};
