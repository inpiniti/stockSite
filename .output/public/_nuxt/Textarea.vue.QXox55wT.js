import{i as u,W as i,S as d,bh as c,f as l,o as f,c as m,L as p,I as b,Y as g}from"./entry.oc5bmuJu.js";const v=u({__name:"Textarea",props:{defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(o,{emit:t}){const s=o,e=i(s,"modelValue",t,{passive:!0,defaultValue:s.defaultValue});return(n,a)=>d((f(),m("textarea",{"onUpdate:modelValue":a[0]||(a[0]=r=>p(e)?e.value=r:null),class:b(l(g)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.$attrs.class??""))},null,2)),[[c,l(e)]])}});export{v as _};