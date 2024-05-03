import{u as h,l as u,o as l,c as n,b as e,t as a,d,F as m,a as f,K as v}from"./index.d6703ff5.js";import"./lodash.ce2303f0.js";import{u as g}from"./userStore.92aa8463.js";import{m as y,a as b}from"./formatData.16acd92b.js";const w={class:"text-center"},k=e("h1",{class:"my-4 text-3xl font-bold text-center text-gray-900"},"\u09AB\u09B2\u09BE\u09AB\u09B2",-1),L={class:"max-w-xl mx-auto my-3"},R={class:"form-control"},B={class:"mt-4"},E={key:0},S={class:"flex items-center justify-center w-10 h-10 font-semibold text-white bg-green-500 rounded-full"},j={class:"flex-1 ml-2 text-gray-900 md:ml-4"},C={class:"text-lg font-semibold"},F={class:"text-sm text-gray-500"},K={class:"flex items-center justify-center w-10 h-10 p-2 font-semibold text-center text-gray-900 rounded-full aspect-square"},N={key:1,class:"text-center"},T=e("button",{class:"btn loader btn-primary"},"Loading...",-1),q=[T],G={setup(D){const{getExam:_}=h(),r=_(),o=u([]),i=u([]);u(null),g(),(async()=>{if(!r.result_published)return;let{data:c}=await v.get(`/exam/${r._id}/leaderboard`);o.value=c.map((t,s)=>({position:s+1,duration:y(t.duration,r.duration*6e4),score:t.marks,name:t.user.name,college:t.user.institute,attempt:t.attempt})),i.value=o.value})();const p=c=>{let t=c.target.value;t?i.value=o.value.filter(s=>s.name.toLowerCase().includes(t.toLowerCase())):i.value=o.value};return(c,t)=>(l(),n(m,null,[e("div",w,[k,e("h2",null,a(d(r).title),1)]),e("div",L,[e("div",R,[e("input",{placeholder:"\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0 \u0985\u09A5\u09AC\u09BE \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8\u09C7\u09B0 \u09A8\u09BE\u09AE \u09A6\u09BF\u09DF\u09C7 \u0996\u09C1\u0981\u099C\u09C1\u09A8... ",onKeyup:p,class:"rounded-md input input-bordered"},null,32)]),e("div",B,[o.value.length>0?(l(),n("div",E,[(l(!0),n(m,null,f(i.value,(s,x)=>(l(),n("div",{key:x,class:"flex items-center px-3 py-2 mb-2 border shadow-sm rounded-2xl"},[e("span",S,a(d(b)(s.position)),1),e("div",j,[e("h2",C,a(s.name),1),e("p",null,a(s.college),1),e("p",F," \u09B8\u09AE\u09DF: "+a(s.duration)+" \u09AE\u09BF\u09A8\u09BF\u099F ",1)]),e("div",K,[e("span",null,a(s.score),1)])]))),128))])):(l(),n("div",N,q))])])],64))}};export{G as default};
