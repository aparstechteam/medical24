import{Q as u,_ as f,q as m,G as p,Y as h}from"./headlessui.esm.b71d6ae3.js";import{k as _,l as g,s as b,o as v,f as x,w as o,e as l,b as t,d as e,h as w,t as d}from"./index.d6703ff5.js";const y=_("alert",()=>{const s=g({show:!1,title:"",message:""});function i(r,c){s.value={show:!0,title:r,message:c}}function a(r,c){s.value={show:!0,title:`${r} will be available soon`,message:`Please check back after the time ${c}.`}}function n(){s.value={show:!1,title:"",message:""}}return{upcomingAlertData:s,upcomingAlert:a,closeAlert:n,successShow:i}}),k={class:"fixed inset-0 z-10 overflow-y-auto"},A={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},S=t("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),B={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},C={class:"mt-2"},D={class:"text-sm text-gray-500"},V={setup(s){const i=y(),{upcomingAlertData:a}=b(i),n=()=>{i.closeAlert()};return(r,c)=>(v(),x(e(h),{appear:"",show:e(a).show,as:"template"},{default:o(()=>[l(e(p),{as:"div",onClose:n},{default:o(()=>[t("div",k,[t("div",A,[l(e(u),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[l(e(f),{class:"fixed inset-0"})]),_:1}),S,l(e(u),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[t("div",B,[l(e(m),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:o(()=>[w(d(e(a).title),1)]),_:1}),t("div",C,[t("p",D,d(e(a).message),1)]),t("div",{class:"mt-4"},[t("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:n}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{V as _,y as u};
