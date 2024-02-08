import{_ as $}from"./Card.vue.64f068iX.js";import{_ as b,a as y,b as B,c as z}from"./CardContent.vue.XClFthX8.js";import{n as p,o as m,c as f,z as E,C as N,u as O,D as S,P as V,b as a,w as e,d as s,a as t,O as d}from"./entry.Pg85z5HU.js";import{_ as j}from"./index.J7ENQBLG.js";import{_ as A}from"./Label.vue.nJNs1SsI.js";import{_ as D}from"./Input.vue.nfUQWqqa.js";import{u}from"./useAuth.rt6Hxg5E.js";const F=p({__name:"CardFooter",props:{class:{type:String,default:""}},setup(r){const n=r;return(o,l)=>(m(),f("div",{class:N(O(S)("p-6 pt-0",n.class))},[E(o.$slots,"default")],2))}}),H={class:"w-full h-screen flex items-center justify-center"},I={class:"grid grid-cols-2 gap-6"},P=t("svg",{role:"img",viewBox:"0 0 24 24",class:"mr-2 h-4 w-4"},[t("path",{fill:"currentColor",d:"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"})],-1),T=t("div",{class:"relative"},[t("div",{class:"absolute inset-0 flex items-center"},[t("span",{class:"w-full border-t"})]),t("div",{class:"relative flex justify-center text-xs uppercase"},[t("span",{class:"bg-background px-2 text-muted-foreground"}," Or continue with ")])],-1),G={class:"grid gap-2"},K={class:"grid gap-2"},R=p({__name:"login",setup(r){async function n(){const{data:o,error:l}=await d().value.auth.signInWithOAuth({provider:"kakao"});u().value=o,u().value=await d().value.auth.getUser()}return(o,l)=>{const v=b,h=y,C=B,c=j,_=A,i=D,g=z,w=F,x=$,k=V("Container");return m(),f("div",H,[a(k,{class:"w-fit"},{default:e(()=>[a(x,null,{default:e(()=>[a(C,{class:"space-y-1"},{default:e(()=>[a(v,{class:"text-2xl"},{default:e(()=>[s(" Create an account ")]),_:1}),a(h,null,{default:e(()=>[s(" Enter your email below to create your account ")]),_:1})]),_:1}),a(g,{class:"grid gap-4"},{default:e(()=>[t("div",I,[a(c,{variant:"outline",onClick:n},{default:e(()=>[s(" Kakao ")]),_:1}),a(c,{variant:"outline"},{default:e(()=>[P,s(" Google ")]),_:1})]),T,t("div",G,[a(_,{for:"email"},{default:e(()=>[s("Email")]),_:1}),a(i,{id:"email",type:"email",placeholder:"m@example.com"})]),t("div",K,[a(_,{for:"password"},{default:e(()=>[s("Password")]),_:1}),a(i,{id:"password",type:"password"})])]),_:1}),a(w,null,{default:e(()=>[a(c,{class:"w-full"},{default:e(()=>[s(" Create account ")]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{R as default};
