import{n as r,bd as m,a$ as b,be as g,s as t,o as n,c as d,R as x,x as u,M as i,H as v}from"./entry.n_lNpqZE.js";const _=r({__name:"Textarea",props:{defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(s,{emit:a}){const e=s,o=m(e,"modelValue",a,{passive:!0,defaultValue:e.defaultValue});return(p,l)=>b((n(),d("textarea",{"onUpdate:modelValue":l[0]||(l[0]=f=>x(o)?o.value=f:null),class:u(t(i)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",p.$attrs.class??""))},null,2)),[[g,t(o)]])}}),h=r({__name:"Card",props:{class:{type:String,default:""}},setup(s){const a=s;return(e,c)=>(n(),d("div",{class:u(t(i)("rounded-lg border bg-card text-card-foreground shadow-sm",a.class))},[v(e.$slots,"default")],2))}});export{h as _,_ as a};