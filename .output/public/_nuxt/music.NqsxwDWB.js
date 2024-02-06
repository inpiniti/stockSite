import{_ as se}from"./Header.vue.gMAx0r2-.js";import{_ as te}from"./Separator.vue.qiUVvpar.js";import{_ as ne}from"./Card.vue.2rQ2g0zr.js";import{_ as le}from"./index.5ANnaPf6.js";import{n as ae,a1 as ue,a8 as ie,M as c,r as g,B as re,a9 as de,H as pe,o as r,c as d,a as s,b as a,w as h,F as E,v as U,x as q,s as o,t as n,y as T,aa as ce,d as ve}from"./entry.lEE_1p0z.js";import{u as G,a as fe,b as me,c as u,p as _,d as y,n as N,e as J,f as be,g as we}from"./player.pqcCVTc6.js";const ge={class:"flex h-full overflow-hidden p-4 gap-4"},he={class:"flex flex-col grow-[1]"},Te={class:"h-full overflow-hidden flex flex-col gap-4"},_e={class:"flex gap-2"},ye=["src"],Ne={class:"flex flex-col gap-1 justify-center"},Ye={class:"text-xs text-neutral-400"},ke={class:"font-semibold text-sm"},$e={class:"flex text-neutral-500 text-sm gap-2 pr-2"},Ce={class:"flex items-center"},Se=["onClick"],je={class:"flex gap-2"},Fe=["src"],Be={class:"flex flex-col gap-1 justify-center"},Me={class:"text-xs text-neutral-400"},Ve={class:"font-semibold text-sm"},De={class:"flex items-center"},Le={class:"w-80 shrink-0 h-full lg:block hidden"},xe={class:"h-full flex flex-col gap-4"},ze={class:"shrink-0"},Ae=["src"],He={class:"text-center"},Ie={class:"text-center text-sm text-neutral-400"},Pe={class:"w-full h-2 bg-neutral-100 rounded-md"},Ee={class:"text-xs flex gap-2"},Ue={class:"text-neutral-400"},qe={class:"flex gap-4 justify-center text-2xl"},Ge={class:"flex gap-2"},Je={class:"font-semibold text-sm"},eo=ae({__name:"music",setup(Ke){const{toast:K}=ue(),O=ie(),Q=G(),C=c(()=>we()),f=fe();function S(e){return e.includes("억")?parseFloat(e.replace("억",""))*1e8:e.includes("만")?parseFloat(e.replace("만",""))*1e4:e.includes("천")?parseFloat(e.replace("천",""))*1e3:parseFloat(e)}const R=c(()=>O.value.sort((e,l)=>{const w=S(e.view_count);return S(l.view_count)-w}));function W(e){G().value.unshift(e),be(),K({title:"재생목록 추가",description:`${e.title} 재생목록을 추가했습니다.`})}const Y=me();g(),c(()=>{if(u().value!=null)return`https://img.youtube.com/vi/${u().value.video_id}/default.jpg`});const j=g(),m=g(0),b=g([0]),X=c(()=>b.value[0]/m.value*100),Z=c(()=>{const e=Math.floor(m.value/60),l=Math.floor(m.value-e*60);return`${e.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}),ee=c(()=>{const e=Math.floor(b.value[0]/60),l=Math.floor(b.value[0]-e*60);return`${e.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`});return re(()=>{j.value=setInterval(()=>{Y.value!=null&&(b.value=[Y.value.getCurrentTime()],m.value=Y.value.getDuration())},1e3)}),de(()=>{clearInterval(j.value)}),(e,l)=>{var B,M,V,D,L,x;const w=se,i=pe("font-awesome-icon"),F=te,k=ne,oe=le;return r(),d("div",ge,[s("div",he,[s("div",Te,[a(w,{title:"음악 차트",description:"일별, 월별, 누적 차트를 제공합니다."}),a(k,{class:"grow-[1] overflow-y-scroll rounded-lg border"},{default:h(()=>[(r(!0),d(E,null,U(o(R),t=>{var p;return r(),d("div",null,[s("div",{class:q(["flex gap-2 p-2 justify-between",{"bg-red-50":((p=o(C))==null?void 0:p.video_id)==t.video_id}])},[s("div",_e,[s("img",{class:"w-12 h-12 object-none rounded-md",src:`https://img.youtube.com/vi/${t.video_id}/default.jpg`},null,8,ye),s("div",Ne,[s("div",Ye,n(t.kr)+" "+n(t.op_ed)+" "+n(t.season?`${t.season}기`:"")+" "+n(t.cool?`${t.cool}쿨`:""),1),s("div",ke,n(t.title),1)])]),s("div",$e,[s("div",Ce,n(t.view_count),1),s("div",{class:"flex items-center cursor-pointer",onClick:$=>W(t)},[a(i,{icon:["fas","play"]})],8,Se)])],2),a(F)])}),256))]),_:1}),a(k,{class:"lg:hidden flex shrink-0 bg-neutral-50 w-full p-2 justify-between"},{default:h(()=>{var t,p,$,z,A,H,I,P;return[s("div",je,[s("img",{class:"w-12 h-12 object-none rounded-md",src:`https://img.youtube.com/vi/${(t=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:t.video_id}/default.jpg`},null,8,Fe),s("div",Be,[s("div",Me,n((p=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:p.kr)+" "+n(($=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:$.op_ed)+" "+n((z=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)!=null&&z.season?`${(A=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:A.season}기`:"")+" "+n((H=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)!=null&&H.cool?`${(I=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:I.cool}쿨`:""),1),s("div",Ve,n((P=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:P.title),1)])]),s("div",De,[o(f)!=1?(r(),d("div",{key:0,onClick:l[0]||(l[0]=(...v)=>("play"in e?e.play:o(_))&&("play"in e?e.play:o(_))(...v)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","play"]})])):T("",!0),o(f)==1?(r(),d("div",{key:1,onClick:l[1]||(l[1]=(...v)=>("pause"in e?e.pause:o(y))&&("pause"in e?e.pause:o(y))(...v)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","stop"]})])):T("",!0),s("div",{onClick:l[2]||(l[2]=(...v)=>("next"in e?e.next:o(N))&&("next"in e?e.next:o(N))(...v)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","forward-step"]})])])]}),_:1})])]),s("div",Le,[s("div",xe,[a(w,{title:"플레이어",description:"현재 재생중인 음악을 표시합니다."}),s("div",ze,[s("div",null,[s("img",{src:`https://img.youtube.com/vi/${(B=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:B.video_id}/maxresdefault.jpg`},null,8,Ae),s("div",He,n((M=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:M.title),1),s("div",Ie,n((V=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:V.kr)+" "+n((D=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:D.season)+"기 "+n((L=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:L.cool)+"쿨 "+n((x=("useNowYouTube"in e?e.useNowYouTube:o(u))().value)==null?void 0:x.op_ed),1),s("div",Pe,[s("div",{class:"h-2 bg-red-100 rounded-md",style:ce({width:`${o(X)}%`})},null,4)]),s("div",Ee,[s("div",null,n(o(ee)),1),s("div",Ue,n(o(Z)),1)])]),s("div",qe,[s("div",{onClick:l[3]||(l[3]=(...t)=>("prev"in e?e.prev:o(J))&&("prev"in e?e.prev:o(J))(...t)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","backward-step"]})]),o(f)!=1?(r(),d("div",{key:0,onClick:l[4]||(l[4]=(...t)=>("play"in e?e.play:o(_))&&("play"in e?e.play:o(_))(...t)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","play"]})])):T("",!0),o(f)==1?(r(),d("div",{key:1,onClick:l[5]||(l[5]=(...t)=>("pause"in e?e.pause:o(y))&&("pause"in e?e.pause:o(y))(...t)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","stop"]})])):T("",!0),s("div",{onClick:l[6]||(l[6]=(...t)=>("next"in e?e.next:o(N))&&("next"in e?e.next:o(N))(...t)),class:"cursor-pointer p-2"},[a(i,{icon:["fas","forward-step"]})])])]),a(k,{class:"grow-[1] overflow-y-scroll"},{default:h(()=>[(r(!0),d(E,null,U(o(Q),t=>{var p;return r(),d("div",null,[s("div",{class:q(["flex gap-2 p-2",{"bg-red-50":((p=o(C))==null?void 0:p.video_id)==t.video_id}])},[s("div",Ge,[a(oe,{variant:"outline"},{default:h(()=>[ve(n(t.kr)+" "+n(t.op_ed)+" "+n(t.season)+"기 "+n(t.cool)+"쿨 ",1)]),_:2},1024),s("div",Je,n(t.title),1)])],2),a(F)])}),256))]),_:1})])])])}}});export{eo as default};
