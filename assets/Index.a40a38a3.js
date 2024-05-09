import{o as t,c as s,F as f,a as b,G as y,b as e,t as c,g as v,h as g,e as _,j as w,l as k,i as M,d as u}from"./index.896186cf.js";import{T as j}from"./Timer.9305bba7.js";import"./plugin-vue_export-helper.21dcd24c.js";const B={class:"grid gap-5 md:grid-cols-2"},V={class:"text-xl font-semibold"},O={class:"text-lg font-medium"},H={class:"mt-4 text-right"},P=["href"],C=g(" Play "),D=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-youtube"},[e("path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}),e("path",{d:"m10 15 5-3-5-3z"})],-1),T=[C,D],A=["href"],N=g(" Marked Book "),I=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-book"},[e("path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"})],-1),S=[N,I],$={props:{plans:{type:Object,required:!0},top:{type:Boolean,default:!1}},setup(n){return(r,d)=>(t(),s("div",B,[(t(!0),s(f,null,b(n.plans,a=>(t(),s("div",{key:a.id,class:y(["p-3 border rounded-lg",{"bg-white/30 backdrop-blue-sm":n.top,"bg-white":!n.top}])},[e("h2",V,c(a.subject),1),e("h3",O,c(a.chapter),1),e("p",null,c(a.instructor),1),e("div",H,[a.class_link?(t(),s("a",{key:0,href:a.class_link,type:"button",target:"_blank",class:"inline-flex gap-1 px-3 py-1 font-semibold bg-white border rounded-lg"},T,8,P)):v("",!0),a.marked_book?(t(),s("a",{key:1,href:a.marked_book,type:"button",target:"_blank",class:"inline-flex gap-1 px-3 py-1 ml-2 font-semibold bg-white border rounded-lg"},S,8,A)):v("",!0)])],2))),128))]))}},Y={class:"space-y-3"},z={class:""},E={class:"flex items-center gap-2 text-xl font-medium"},L={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-calendar-clock"},Q=w('<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle>',6),q=[Q],F={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-calendar-check-2"},J=w('<path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path>',5),R=[J],Z={props:{plans:{type:Object,required:!0}},setup(n){return(r,d)=>(t(),s("div",Y,[e("div",z,[e("h2",E,[n.plans.isOngoing?(t(),s("svg",L,q)):(t(),s("svg",F,R)),g(" "+c(n.plans.date),1)])]),e("div",{class:y(["pl-6 ml-2 border-l-2",`${n.plans.isOngoing?"border-blue-400":"border-gray-500"}`])},[_($,{plans:n.plans.plans},null,8,["plans"])],2)]))}},G={key:0},K={class:"pb-5"},X={key:0,class:"max-w-3xl p-4 mx-auto my-5 space-y-5 border-2 border-red-500 rounded-md bg-slate-50"},U={class:"max-w-md mx-auto space-y-5"},W={class:"text-center"},ee=e("h2",{class:"text-2xl font-semibold text-red-500 animate-pulse"}," Ongoing... ",-1),te={class:"flex items-center justify-center gap-2 text-lg font-medium"},se=w('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>',1),oe={class:"max-w-3xl mx-auto space-y-7"},ne=e("h2",{class:"text-2xl font-semibold text-center underline decoration-wavy underline-offset-8"}," Revision Timeline for Second Timers ",-1),ae={key:1,class:"py-10"},le=e("p",{class:"text-center"}," Please wait... ",-1),ie=[le],he={setup(n){const r=k([]),d=k(!0);(()=>{fetch("https://script.google.com/macros/s/AKfycbyv4c8aIYnxtI09M7P3gHzQAcYvZOPid5QEJ89YID7pY9poReQM9mcM2ZL-IhEL4XJH/exec").then(l=>l.json()).then(l=>{let i=l.reduce((o,x)=>{const m=x.end;return o[m]||(o[m]=[]),o[m].push(x),o},{}),p=Object.keys(i).map(o=>({date:o,chapter:i[o][0].chapter,end:i[o][0].end,isOngoing:new Date(i[o][0].end)>new Date,isPast:new Date(o)<new Date,plans:i[o]}));r.value=p,d.value=!1})})();const h=M(()=>r.value.filter(l=>l.isOngoing)[0]);return(l,i)=>d.value?(t(),s("div",ae,ie)):(t(),s("div",G,[e("div",K,[u(h)?(t(),s("div",X,[e("div",U,[e("div",W,[ee,e("h2",te,[se,g(" "+c(u(h).end),1)])]),_(j,{end:new Date(u(h).end).getTime()},null,8,["end"])]),e("div",null,[_($,{plans:u(h).plans,top:!0},null,8,["plans"])])])):v("",!0)]),e("div",oe,[ne,(t(!0),s(f,null,b(r.value,p=>(t(),s("div",{key:p.date,class:"space-y-5"},[_(Z,{plans:p},null,8,["plans"])]))),128))])]))}};export{he as default};
