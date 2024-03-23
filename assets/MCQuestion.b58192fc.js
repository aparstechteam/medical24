import{_ as G}from"./examloading.f66f2dcc.js";import{o as s,c as a,a as e,t as p,k as P,l as _,s as V,f as q,w,e as f,d as i,G as z,u as F,H as O,g as S,F as T,b as L,I as M,J,K,L as N,j as U}from"./index.3f3fc3c3.js";import{_ as H,u as W,a as X}from"./plugin-vue_export-helper.912d4dfb.js";import{Q as D,_ as Z,G as ee,Y as te}from"./headlessui.esm.bc74f8c3.js";const se={props:{end_time:{type:Number,required:!0}},data(){return{minute:0,second:0}},mounted(){this.startTimer()},methods:{startTimer(){let n=new Date(this.end_time).getTime(),v=setInterval(()=>{let d=new Date().getTime(),t=n-d,r=Math.floor(t%(1e3*60*60)/(1e3*60)),c=Math.floor(t%(1e3*60)/1e3);this.minute=r,this.second=c,t<0&&clearInterval(v)},1e3)},stopTimer(){clearInterval(this.interval)}}},ae={class:"text-2xl btn"};function oe(n,v,d,t,r,c){return s(),a("div",null,[e("div",ae,p(r.minute)+" : "+p(r.second),1)])}var ne=H(se,[["render",oe]]),le="/medi24/assets/retake.3235226f.gif",ie="/medi24/assets/submit.38475667.png";const Q=P("result",()=>{const n=_({type:"",score:0,show:!1});return{result:n,showResult:(t,r)=>{n.value.type=r,n.value.score=t,n.value.show=!0},closeModal:()=>{n.value.show=!1}}}),re={class:"fixed inset-0 z-10 overflow-y-auto"},ce={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},de=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),ue={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},me={class:"mt-2"},_e={key:0,src:le,class:"mx-auto h-36",alt:""},ve={key:1,class:"mx-auto h-36",src:ie,alt:""},he={class:"text-2xl font-semibold text-center"},pe={setup(n){const v=Q(),{result:d}=V(v),t=()=>{v.closeModal()};return(r,c)=>(s(),q(i(te),{appear:"",show:i(d).show,as:"template"},{default:w(()=>[f(i(ee),{as:"div",onClose:t},{default:w(()=>[e("div",re,[e("div",ce,[f(i(D),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:w(()=>[f(i(Z),{class:"fixed inset-0"})]),_:1}),de,f(i(D),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:w(()=>[e("div",ue,[e("div",me,[i(d).type=="retake"?(s(),a("img",_e)):(s(),a("img",ve)),e("p",he," You scored: "+p(i(d).score),1)]),e("div",{class:"mt-4 text-right"},[e("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"]))}};const j=n=>(J("data-v-5bf74ea6"),n=n(),K(),n),fe={key:0,class:"flex items-center justify-center min-h-[80vh]"},xe={class:"max-w-md p-5 m-4 mx-auto space-y-4 text-center border bg-slate-100 rounded-2xl outline-dashed"},be={class:"text-2xl font-bold text-gray-900"},ge={class:"text-lg text-gray-700"},we={key:0},ye={key:1},ke=j(()=>e("p",null,"You can practice this exam now.",-1)),$e={key:2},Se={key:1,class:"container mx-auto"},Te={key:0,class:"pb-10"},Me={class:"py-4 text-center"},Ce=["innerHTML"],Ie={class:"mx-2 md:w-2/3 md:mx-auto"},Le=["innerHTML"],Ne={class:"flex gap-2"},De={class:"btn btn-sm"},He=j(()=>e("button",{class:"btn btn-sm"},"Marks: "+p(1),-1)),Qe={class:"mt-3"},je=["innerHTML","onClick"],Re={class:"mb-10 text-center"},Ye=["disabled"],Be={key:1,class:"fixed__timer"},Ae={key:2,class:"flex flex-col items-center justify-center w-full h-screen"},Ee=U('<img src="'+G+'" alt="" class="h-56" data-v-5bf74ea6><div class="flex items-center justify-center space-x-1 text-sm text-gray-700" data-v-5bf74ea6><svg fill="none" class="w-10 h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-v-5bf74ea6><path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd" data-v-5bf74ea6></path></svg><div class="text-lg" data-v-5bf74ea6>Please wait ...</div></div>',2),Ge=[Ee],Pe={setup(n){const{successShow:v}=W(),{showResult:d}=Q(),t=_([]),r=_(!0),c=_(!1),g=_(!0),C=_(Date.now()),y=_(!1),I=z(),b=_(!1),{getExam:R}=F(),l=R(),k=_(null);(async()=>{g.value=!0;const{data:u}=await N(`/exam/${l._id}/question`);t.value=u.questions,y.value=u.hasParticiapted;let h=l.duration;k.value=Date.now()+h*6e4;let o=localStorage.getItem(`medi24attempt${l.id}`);o?localStorage.setItem(`medi24attempt${l.id}`,Number(o)+1):localStorage.setItem(`medi24attempt${l.id}`,1),C.value=Date.now(),setTimeout(()=>{$()},h*6e4),g.value=!1})();const Y=()=>{b.value=!0,r.value=!0,k.value=Date.now()+l.duration*6e4,setTimeout(()=>{$()},l.duration*6e4)},B=(u,h)=>{t.value[u].selected=h},{token:A}=O();A||I.replace("/register");const $=async()=>{try{c.value=!0;let u=t.value.map(o=>{let m=o.options.indexOf(o.selected);return{id:o.id,s:m}}).filter(o=>o.s>-1);if(b.value){let o=t.value.reduce((m,x)=>(x.answer==x.selected&&(m+=1),m),0);d(o,"retake"),b.value=!1,c.value=!1;return}const{data:h}=await N.post("/exam/submit",{exam:l._id,answers:u,duration:Date.now()-C.value});v("Submitted successfully","Wait for the result to be published."),setTimeout(()=>{I.replace("/")},3e3),c.value=!1}catch(u){console.log(u)}};return(u,h)=>(s(),a(T,null,[!g.value&&!b.value&&(i(l).is_ended||y.value)?(s(),a("div",fe,[e("div",xe,[e("h1",be,p(i(l).title),1),e("p",ge,p(i(l).subject),1),y.value?(s(),a("p",we," You have already participated in this exam. ")):S("",!0),i(l).solution_published?(s(),a("div",ye,[ke,e("button",{onClick:Y,class:"px-4 py-2 mt-3 font-semibold text-white bg-green-500 rounded-md shadow-sm hover:cursor-pointer hover:shadow-lg"},"Practice Now ")])):(s(),a("div",$e," You can practice this exam after the solution is published. "))])])):!g.value||b.value?(s(),a("div",Se,[t.value.length>0?(s(),a("div",Te,[e("div",Me,[e("h1",{class:"text-2xl font-bold text-gray-900",innerHTML:i(l).title},null,8,Ce)]),e("div",Ie,[(s(!0),a(T,null,L(t.value,(o,m)=>(s(),a("div",{key:m,class:M(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.value[m].selected}])},[e("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:o.question},null,8,Le),e("div",Ne,[e("button",De,"Q No: "+p(m+1),1),He]),e("div",Qe,[(s(!0),a(T,null,L(o.options,(x,E)=>(s(),a("div",{key:E,innerHTML:x,onClick:qe=>B(m,x),class:M(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded    ${x==o.selected?"border-2 border-green-500 bg-green-300":" bg-white border"}`)},null,10,je))),128))])],2))),128)),e("div",Re,[e("button",{onClick:h[0]||(h[0]=o=>$()),disabled:c.value,class:M(["shadow-md btn",{loading:c.value}])},p(c.value?"Loading...":"Submit"),11,Ye)])])])):S("",!0),r.value?(s(),a("div",Be,[f(ne,{end_time:k.value},null,8,["end_time"])])):S("",!0)])):(s(),a("div",Ae,Ge)),f(X),f(pe)],64))}};var Ke=H(Pe,[["__scopeId","data-v-5bf74ea6"]]);export{Ke as default};
