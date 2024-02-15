import{f as n,aw as g,o as l,J as i,w as o,G as r,H as b,I as h,i as e,bN as x,c as y,P as B,a4 as p,K as f,b7 as w,aS as C,aC as $,b as c,bO as D,bP as k,bQ as P,bR as z,bS as O,a as v}from"./entry.0rB_JXnC.js";const N=n({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:s}){const u=g(a,s);return(m,_)=>(l(),i(e(x),b(h(e(u))),{default:o(()=>[r(m.$slots,"default")]),_:3},16))}}),S=n({__name:"DialogHeader",props:{class:{}},setup(a){const s=a;return(t,d)=>(l(),y("div",{class:B(e(p)("flex flex-col space-y-2 text-center sm:text-left",s.class))},[r(t.$slots,"default")],2))}}),V=n({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a;return(t,d)=>(l(),i(e(w),f(s,{class:e(p)("text-lg text-foreground font-semibold leading-none tracking-tight",s.class)}),{default:o(()=>[r(t.$slots,"default")]),_:3},16,["class"]))}}),E=n({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a;return(t,d)=>(l(),i(e(C),f(s,{class:e(p)("text-muted-foreground text-sm",s.class)}),{default:o(()=>[r(t.$slots,"default")]),_:3},16,["class"]))}}),A=v("span",{class:"sr-only"},"Close",-1),H=n({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss","openAutoFocus","closeAutoFocus"],setup(a,{emit:s}){const t=a,u=$(s);return(m,_)=>(l(),i(e(O),null,{default:o(()=>[c(e(D),{class:"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),c(e(k),f({class:e(p)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",t.class)},{...t,...e(u)}),{default:o(()=>[r(m.$slots,"default"),c(e(P),{class:"absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary"},{default:o(()=>[c(e(z),{class:"w-4 h-4"}),A]),_:1})]),_:3},16,["class"])]),_:3}))}});export{V as _,E as a,S as b,H as c,N as d};
