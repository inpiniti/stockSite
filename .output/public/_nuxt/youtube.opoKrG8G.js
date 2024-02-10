import{_ as W,a as X}from"./SheetContent.vue.pSPf0-eK.js";import{_ as K,a as Z}from"./SheetTitle.vue.TsmDfviP.js";import{n as Y,o as m,Q as S,w as t,C as A,I as J,x as n,H as G,ap as ee,G as N,aq as te,r,S as oe,ar as se,u as ae,b as e,d as o,t as g,a as s,c as k,P as j,F as H,O as ne}from"./entry.CSCT1uCs.js";import{_ as le}from"./index.yHe2ZJDt.js";import{_ as ce,a as ie,b as de}from"./PopoverContent.vue.CpQxdwY2.js";import{_ as _e}from"./Label.vue.n7XfOWUH.js";import{_ as re}from"./Input.vue.MgsqAzm8.js";import{_ as ue,a as pe,b as me,c as fe,d as ve,e as ge}from"./SelectScrollDownButton.vue.SOKDD1R5.js";import{u as E,h as he,f as $e}from"./player.EyUkEKKH.js";import{_ as ye}from"./board.vue.tUg0n8Aw.js";import{_ as xe}from"./Header.vue.Onr3RbUt.js";import{_ as be}from"./Card.vue.gfmaA--b.js";import{_ as ke,a as Se,b as we,c as Ce}from"./CardContent.vue.PCdLH8Fb.js";import{_ as Ve}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./chevron-down.kSZfLGu1.js";import"./check.5DcjulNx.js";import"./DialogContent.vue.5coN3sbU.js";import"./DialogFooter.vue.jjPtAOM1.js";import"./Textarea.vue.B2rf2k-s.js";import"./fetch.sr3B_PTI.js";const Oe=Y({__name:"SheetDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(h){const u=h;return(i,f)=>(m(),S(n(ee),J({class:n(G)("text-sm text-muted-foreground",u.class)},u),{default:t(()=>[A(i.$slots,"default")]),_:3},16,["class"]))}}),Be=Y({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(h){const u=h;return(i,f)=>(m(),S(n(te),{class:N(n(G)("py-1.5 pl-8 pr-2 text-sm font-semibold",u.class))},{default:t(()=>[A(i.$slots,"default")]),_:3},8,["class"]))}}),De={class:"grid gap-4"},Pe=s("div",{class:"space-y-2"},[s("h4",{class:"font-medium leading-none"},"Dimensions"),s("p",{class:"text-sm text-muted-foreground"}," Set the dimensions for the layer. ")],-1),Te={class:"grid gap-2"},Ue={class:"grid grid-cols-3 items-center gap-4"},Ie={class:"grid grid-cols-3 items-center gap-4"},Le={class:"grid grid-cols-3 items-center gap-4"},He={class:"grid grid-cols-3 items-center gap-4"},Ye={class:"grid grid-cols-3 items-center gap-4"},qe={class:"flex gap-2"},Ee={class:"flex flex-col gap-2 mt-2"},Ae={class:"flex gap-2"},Ge=["src"],Ne={class:"flex flex-col grow-[0]"},je={class:"text-sm font-bold text-clamp"},ze={class:"text-xs"},Me={class:"text-xs"},Re=["onClick"],Fe=Y({__name:"youtube",props:{isOpen:{type:Boolean},kr:{}},emits:["update:open"],setup(h,{emit:u}){E();const i=r(),{toast:f}=oe(),v=h,x=u,$=r(!1),c=r({title:"",video_id:"",op_ed:"",season:"",cool:""});async function w(){$.value=!1,await he({...c.value,kr:v.kr}),f({title:"addYouTube",description:"유튜브를 추가했습니다."}),b()}function C(_){E().value.unshift(_),$e(),f({title:"재생목록 추가",description:`${_.title} 재생목록을 추가했습니다.`})}se(async()=>{console.log(v.isOpen),console.log(v),v.isOpen&&b()});async function b(){const{data:_}=await ae().value.from("youtube").select("*").eq("kr",v.kr);i.value=_}return(_,l)=>{const V=K,O=Oe,p=Z,B=le,z=ce,y=_e,q=re,D=ue,P=pe,T=Be,d=me,U=fe,I=ve,L=ge,M=ie,R=de,F=W,Q=X;return m(),S(Q,{open:_.isOpen,"onUpdate:open":l[6]||(l[6]=a=>x("update:open"))},{default:t(()=>[e(F,{class:"overflow-y-scroll"},{default:t(()=>[e(p,null,{default:t(()=>[e(V,null,{default:t(()=>[o(g(_.kr),1)]),_:1}),e(O,null,{default:t(()=>[o(" Make changes to your profile here. Click save when you're done. ")]),_:1})]),_:1}),e(R,{open:n($)},{default:t(()=>[e(z,{"as-child":"",class:"mt-2 w-full"},{default:t(()=>[e(B,{variant:"outline",onClick:l[0]||(l[0]=a=>$.value=!0)},{default:t(()=>[o(" 유튜브 영상 목록에 추가 ")]),_:1})]),_:1}),e(M,{class:"w-80"},{default:t(()=>[s("div",De,[Pe,s("div",Te,[s("div",Ue,[e(y,{for:"width"},{default:t(()=>[o("title")]),_:1}),e(q,{modelValue:n(c).title,"onUpdate:modelValue":l[1]||(l[1]=a=>n(c).title=a),id:"width",type:"text",class:"col-span-2 h-8"},null,8,["modelValue"])]),s("div",Ie,[e(y,{for:"width"},{default:t(()=>[o("videoId")]),_:1}),e(q,{modelValue:n(c).video_id,"onUpdate:modelValue":l[2]||(l[2]=a=>n(c).video_id=a),id:"width",type:"text",class:"col-span-2 h-8"},null,8,["modelValue"])]),s("div",Le,[e(y,{for:"maxWidth"},{default:t(()=>[o("op/ed")]),_:1}),e(L,{modelValue:n(c).op_ed,"onUpdate:modelValue":l[3]||(l[3]=a=>n(c).op_ed=a)},{default:t(()=>[e(P,null,{default:t(()=>[e(D,{placeholder:"Select a fruit"})]),_:1}),e(I,null,{default:t(()=>[e(U,null,{default:t(()=>[e(T,null,{default:t(()=>[o("op/ed")]),_:1}),e(d,{value:"op"},{default:t(()=>[o(" op ")]),_:1}),e(d,{value:"ed"},{default:t(()=>[o(" ed ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),s("div",He,[e(y,{for:"height"},{default:t(()=>[o("시즌")]),_:1}),e(L,{modelValue:n(c).season,"onUpdate:modelValue":l[4]||(l[4]=a=>n(c).season=a)},{default:t(()=>[e(P,null,{default:t(()=>[e(D,{placeholder:"Select a fruit"})]),_:1}),e(I,null,{default:t(()=>[e(U,null,{default:t(()=>[e(T,null,{default:t(()=>[o("시즌")]),_:1}),e(d,{value:"1"},{default:t(()=>[o("1기")]),_:1}),e(d,{value:"2"},{default:t(()=>[o("2기")]),_:1}),e(d,{value:"3"},{default:t(()=>[o("3기")]),_:1}),e(d,{value:"4"},{default:t(()=>[o("4기")]),_:1}),e(d,{value:"movie"},{default:t(()=>[o("극장판")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),s("div",Ye,[e(y,{for:"height"},{default:t(()=>[o("쿨")]),_:1}),e(L,{modelValue:n(c).cool,"onUpdate:modelValue":l[5]||(l[5]=a=>n(c).cool=a)},{default:t(()=>[e(P,null,{default:t(()=>[e(D,{placeholder:"Select a fruit"})]),_:1}),e(I,null,{default:t(()=>[e(U,null,{default:t(()=>[e(T,null,{default:t(()=>[o("쿨")]),_:1}),e(d,{value:"1"},{default:t(()=>[o("1")]),_:1}),e(d,{value:"2"},{default:t(()=>[o("2")]),_:1}),e(d,{value:"3"},{default:t(()=>[o("3")]),_:1}),e(d,{value:"4"},{default:t(()=>[o("4")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),s("div",qe,[e(B,{variant:"outline",onClick:w},{default:t(()=>[o(" add ")]),_:1})])])]),_:1})]),_:1},8,["open"]),s("div",Ee,[(m(!0),k(H,null,j(n(i),a=>(m(),k("div",{key:a.id.videoId},[s("div",Ae,[s("iframe",{class:"w-36 h-20 rounded-md",id:"player",type:"text/html",src:`http://www.youtube.com/embed/${a.video_id}?enablejsapi=1`,frameborder:"0"},null,8,Ge),s("div",Ne,[s("div",je,g(a.title),1),s("div",ze,g(a.season)+"기 "+g(a.cool)+"쿨 "+g(a.op_ed),1),s("div",Me,g(a.view_count),1),s("div",{class:"text-xs mt-1 px-2 py-1 rounded-md ring-1 ring-neutral-200 w-fit cursor-pointer",onClick:Ze=>C(a)}," 재생목록에 추가 ",8,Re)])])]))),128))])]),_:1})]),_:1},8,["open"])}}}),Qe={class:"p-4"},We={class:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"},Xe=["src"],Ke={__name:"youtube",setup(h){const u=ne(),i=r(!1);r("AIzaSyDE-WnHKaxA4y9LAYYsBg6lmMfMxEPvvRE"),r("532479810296-7ap8aci48tgs1ak6de80qe1a2oiuf3mk.apps.googleusercontent.com"),r("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"),r();const f=r("");async function v(x){f.value=x.kr,i.value=!0,console.log(i.value)}return(x,$)=>{const c=Fe,w=ye,C=xe,b=ke,_=Se,l=we,V=Ce,O=be;return m(),k(H,null,[e(c,{isOpen:n(i),"onUpdate:open":$[0]||($[0]=p=>i.value=!n(i)),kr:n(f)},null,8,["isOpen","kr"]),e(w,{ref:"boardRef"},null,512),s("div",Qe,[e(C,{title:"youtube",description:"유튜브를 연동해서 음악을 재생시킬수 있습니다."}),s("div",We,[(m(!0),k(H,null,j(n(u),p=>(m(),S(O,{class:N({"opacity-50":!p.dc,"cursor-pointer":p.dc}),onClick:B=>v(p)},{default:t(()=>[e(l,null,{default:t(()=>[e(b,{class:"overflow-hidden overflow-ellipsis whitespace-nowrap"},{default:t(()=>[o(g(p.kr),1)]),_:2},1024),e(_,null,{default:t(()=>[o("Deploy your new project in one-click.")]),_:1})]),_:2},1024),e(V,null,{default:t(()=>[s("img",{src:p.img},null,8,Xe)]),_:2},1024)]),_:2},1032,["class","onClick"]))),256))])])],64)}}},$t=Ve(Ke,[["__scopeId","data-v-87bcb623"]]);export{$t as default};
