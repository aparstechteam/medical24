import{Q as u,_ as f,q as m,G as p,Y as _}from"./headlessui.esm.bc74f8c3.js";import{k as h,l as v,s as g,o as b,f as x,w as r,e as i,a,d as e,h as w,t as d}from"./index.3f3fc3c3.js";const y=h("alert",()=>{const t=v({show:!1,title:"",message:""});function o(n,c){t.value={show:!0,title:n,message:c}}function s(n,c){t.value={show:!0,title:`${n} will be available soon`,message:`Please check back after the time ${c}.`}}function l(){t.value={show:!1,title:"",message:""}}return{upcomingAlertData:t,upcomingAlert:s,closeAlert:l,successShow:o}}),k={class:"fixed inset-0 z-10 overflow-y-auto"},A={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},S=a("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),B={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},C={class:"mt-2"},D={class:"text-sm text-gray-500"},V={setup(t){const o=y(),{upcomingAlertData:s}=g(o),l=()=>{o.closeAlert()};return(n,c)=>(b(),x(e(_),{appear:"",show:e(s).show,as:"template"},{default:r(()=>[i(e(p),{as:"div",onClose:l},{default:r(()=>[a("div",k,[a("div",A,[i(e(u),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[i(e(f),{class:"fixed inset-0"})]),_:1}),S,i(e(u),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[a("div",B,[i(e(m),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:r(()=>[w(d(e(s).title),1)]),_:1}),a("div",C,[a("p",D,d(e(s).message),1)]),a("div",{class:"mt-4"},[a("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:l}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"]))}};var q=(t,o)=>{const s=t.__vccOpts||t;for(const[l,n]of o)s[l]=n;return s};export{q as _,V as a,y as u};
