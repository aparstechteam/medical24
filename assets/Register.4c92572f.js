import{G as p,Q as m,l as i,H as _,o as h,c as v,a as e,N as x,O as a,P as d,R as b,I as f,j as S,h as g}from"./index.675684a2.js";const w={class:"container max-w-2xl px-2 py-20 mx-auto"},C={class:"max-w-xl p-5 mx-auto space-y-3 border border-gray-500 rounded-2xl"},y=e("h2",{class:"text-2xl font-bold text-center bangla"}," \u09A4\u09CB\u09AE\u09BE\u09B0 \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF \u09A4\u09A5\u09CD\u09AF \u09A6\u09BE\u0993 ",-1),H=["onSubmit"],k={class:"form-control"},V=e("label",{for:"name"},"\u09A4\u09CB\u09AE\u09BE\u09B0 \u09A8\u09BE\u09AE",-1),q={class:"form-control"},B=e("label",{for:"college"},"\u09A4\u09CB\u09AE\u09BE\u09B0 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8(\u0995\u09B2\u09C7\u099C)",-1),U={class:"form-control"},M=e("label",{for:"batch"},"\u09A4\u09CB\u09AE\u09BE\u09B0 \u09AC\u09CD\u09AF\u09BE\u099A",-1),N=S('<option value="" selected>Select HSC Batch</option><option value="HSC 2023">HSC 2023</option><option value="HSC 2024">HSC 2024</option><option value="HSC 2025">HSC 2025</option><option value="HSC 2026">HSC 2026</option><option value="Others">Others</option>',6),O=[N],R={class:"text-center"},j=g(" \u09B8\u09BE\u09AC\u09AE\u09BF\u099F "),T=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1),z=[j,T],I={setup(D){const l=p(),r=m(),t=i({phone:"",name:"",institute:"",batch:""});r.query.ttrx?t.value.phone=r.query.ttrx:l.replace("/login");const{registerUser:c}=_(),n=i(!1),u=async()=>{n.value=!0,await c(t.value,l),n.value=!1};return(E,o)=>(h(),v("div",w,[e("div",C,[y,e("form",{onSubmit:x(u,["prevent"]),class:"space-y-3 bangla"},[e("div",k,[V,a(e("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=s=>t.value.name=s),placeholder:"\u09A8\u09BE\u09AE",class:"p-3 mt-2 border rounded-md outline-none"},null,512),[[d,t.value.name]])]),e("div",q,[B,a(e("input",{type:"text",required:"","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.institute=s),placeholder:"\u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8",class:"p-3 mt-2 border rounded-md outline-none"},null,512),[[d,t.value.institute]])]),e("div",U,[M,a(e("select",{class:"p-3 mt-2 border rounded-md outline-none",required:"","onUpdate:modelValue":o[2]||(o[2]=s=>t.value.batch=s)},O,512),[[b,t.value.batch]])]),e("div",R,[e("button",{type:"submit",class:f(["gap-3 btn",{loading:n.value}])},z,2)])],40,H)])]))}};export{I as default};
