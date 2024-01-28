import{_ as N,a as O,b as H,c as U,d as q}from"./DialogContent.vue.PRObhQ0q.js";import{_ as F,a as P}from"./Label.vue.MGUIzXYP.js";import{_ as R}from"./Input.vue.lWM-qJ_S.js";import{_ as z}from"./Textarea.vue.YHsYi47C.js";import{_ as E}from"./index.YezxBemq.js";import{u as G}from"./fetch.SVnEq9vC.js";import{n as r,r as C,o as _,q as I,w as c,d as i,b as o,s as n,a as g,c as p,H as d,x as m,M as u}from"./entry.hPOjlSdm.js";const J={class:"grid gap-4 py-4"},L={class:"grid grid-cols-4 items-center gap-4"},M={class:"grid grid-cols-4 items-center gap-4"},Z=r({__name:"board",setup(s,{expose:e}){const t=C(!1),a=C({title:"",content:"",tel:"",email:""});function $(){t.value=!t.value}async function b(){await G("/api/email",{method:"POST",body:JSON.stringify(a.value),onResponse({request:y,response:l,options:x}){console.log(l)}},"$h5GTxi8mRP")}return e({onOpen:$}),(y,l)=>{const x=N,v=O,V=H,h=F,D=R,S=z,T=E,k=P,w=U,B=q;return _(),I(B,{"onUpdate:open":$,open:n(t)},{default:c(()=>[o(w,{class:"w-5/6"},{default:c(()=>[o(V,null,{default:c(()=>[o(x,null,{default:c(()=>[i("글쓰기")]),_:1}),o(v,null,{default:c(()=>[i(" 애니메이션에 대한 글을 남겨주세요. ")]),_:1})]),_:1}),g("div",J,[g("div",L,[o(h,{for:"title",class:"text-right"},{default:c(()=>[i(" 제목 ")]),_:1}),o(D,{modelValue:n(a).title,"onUpdate:modelValue":l[0]||(l[0]=f=>n(a).title=f),class:"col-span-3"},null,8,["modelValue"])]),g("div",M,[o(h,{for:"content",class:"text-right"},{default:c(()=>[i(" 내용 ")]),_:1}),o(S,{modelValue:n(a).content,"onUpdate:modelValue":l[1]||(l[1]=f=>n(a).content=f),class:"col-span-3"},null,8,["modelValue"])])]),o(k,null,{default:c(()=>[o(T,{onClick:b},{default:c(()=>[i(" 글 작성 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])}}}),tt=r({__name:"Card",props:{class:{type:String,default:""}},setup(s){const e=s;return(t,a)=>(_(),p("div",{class:m(n(u)("rounded-lg border bg-card text-card-foreground shadow-sm",e.class))},[d(t.$slots,"default")],2))}}),et=r({__name:"CardHeader",props:{class:{type:String,default:""}},setup(s){const e=s;return(t,a)=>(_(),p("div",{class:m(n(u)("flex flex-col space-y-1.5 p-6",e.class))},[d(t.$slots,"default")],2))}}),st=r({__name:"CardTitle",props:{class:{type:String,default:""}},setup(s){const e=s;return(t,a)=>(_(),p("h3",{class:m(n(u)("text-2xl font-semibold leading-none tracking-tighter",e.class))},[d(t.$slots,"default")],2))}}),at=r({__name:"CardDescription",props:{class:{type:String,default:""}},setup(s){const e=s;return(t,a)=>(_(),p("p",{class:m(n(u)("text-sm text-muted-foreground",e.class))},[d(t.$slots,"default")],2))}}),ot=r({__name:"CardContent",props:{class:{type:String,default:""}},setup(s){const e=s;return(t,a)=>(_(),p("div",{class:m(n(u)("p-6 pt-0",e.class))},[d(t.$slots,"default")],2))}});export{Z as _,st as a,at as b,et as c,ot as d,tt as e};