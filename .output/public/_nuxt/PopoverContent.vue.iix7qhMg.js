import{f as d,ag as u,o as r,y as l,w as n,s as p,v as f,x as m,i as e,aG as y,aH as g,b as B,aI as h,z as P,W as v,aJ as w}from"./entry.gsRA_R3H.js";const O=d({__name:"Popover",props:{defaultOpen:{type:Boolean},open:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(o,{emit:t}){const i=u(o,t);return(s,_)=>(r(),l(e(y),f(m(e(i))),{default:n(()=>[p(s.$slots,"default")]),_:3},16))}}),z=d({__name:"PopoverTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const t=o;return(a,c)=>(r(),l(e(g),f(m(t)),{default:n(()=>[p(a.$slots,"default")]),_:3},16))}}),C=d({__name:"PopoverContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:t}){const a=o,i=u(a,t);return(s,_)=>(r(),l(e(w),null,{default:n(()=>[B(e(h),P({...e(i),...s.$attrs},{class:e(v)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a.class)}),{default:n(()=>[p(s.$slots,"default")]),_:3},16,["class"])]),_:3}))}});export{C as _,O as a,z as b};
