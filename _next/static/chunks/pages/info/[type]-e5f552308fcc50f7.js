(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{3115:function(e,n,i){"use strict";var t=i(4141),o=i(6311),a=i(7379),r=(i(5025),i(5893)),c=a.ZP.div.withConfig({displayName:"pdf__Center",componentId:"sc-fahwqw-0"})(["width:100%;text-align:center;"]),s=a.ZP.div.withConfig({displayName:"pdf__Container",componentId:"sc-fahwqw-1"})(["height:800px;width:90%;margin:0 auto;@media screen and (max-width:1210px){height:580px;}@media screen and (max-width:1000px){height:400px;}@media screen and (max-width:800px){height:530px;width:100%;}"]);n.Z=function(e){var n=e.file,i=e.choice,a=void 0===i?0:i;return console.log(n),(0,r.jsx)(c,{children:(0,r.jsx)(t.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:(0,r.jsx)(s,{children:0===a?(0,r.jsx)(t.Viewer,{fileUrl:"".concat(o.O,"/").concat(n),defaultScale:t.SpecialZoomLevel.PageFit,theme:"dark"}):(0,r.jsx)(t.Viewer,{fileUrl:n,defaultScale:t.SpecialZoomLevel.PageFit,theme:"dark"})})})})}},2655:function(e,n,i){"use strict";i.r(n);var t=i(7294),o=i(1163),a=i(6311),r=i(1664),c=i.n(r),s=i(7379),d=i(1560),l=i(4353),p=i(9785),m=i(3832),x=i(5951),f=i(3868),u=i(5893),h="".concat(a.O,"/imgs/header/info.png"),g=s.ZP.div.withConfig({displayName:"type__Cont",componentId:"sc-1x36anm-0"})(["padding:0px 30px;@media screen and (max-width:800px){padding:0;}"]),w=s.ZP.div.withConfig({displayName:"type__Selector",componentId:"sc-1x36anm-1"})(["display:flex;position:relative;"]),j=s.ZP.div.withConfig({displayName:"type__SelItem",componentId:"sc-1x36anm-2"})(["margin:.5em 1em;font-weight:bold;font-size:1em;color:",";:hover{cursor:pointer;}@media screen and (max-width:510px){font-size:.7em;margin:0 5px;}"],(function(e){return e.active?"black":"#999"})),v=s.ZP.div.withConfig({displayName:"type__SelBar",componentId:"sc-1x36anm-3"})(["position:absolute;background:#172BEF;height:3px;width:","px;top:","px;left:","px;transition:.3s ease;"],(function(e){return e.w||"60"}),(function(e){return e.y||"0"}),(function(e){return e.x||"0"}));n.default=function(){var e=(0,o.useRouter)().query.type,n=(0,t.useRef)(),i=(0,t.useRef)(),a=(0,t.useState)(),r=a[0],s=a[1],_=(0,t.useState)(),y=_[0],b=_[1],k=(null===y||void 0===y?void 0:y.x)-(null===r||void 0===r?void 0:r.x),C=(null===y||void 0===y?void 0:y.y)-(null===r||void 0===r?void 0:r.y)+(null===y||void 0===y?void 0:y.height)+2,I=null===y||void 0===y?void 0:y.width;return(0,t.useEffect)((function(){var e,t;s(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect()),b(null===i||void 0===i||null===(t=i.current)||void 0===t?void 0:t.getBoundingClientRect())}),[e]),(0,u.jsxs)(d.Z,{pg:"Acerca del juego",children:[(0,u.jsx)(l.Z,{title:"Informaci\xf3n",desc:"Acerca del juego",imgH:h}),(0,u.jsxs)(w,{ref:n,children:[(0,u.jsx)(c(),{href:"/info/about",passHref:!0,children:(0,u.jsx)(j,{active:"about"===e,ref:"about"===e?i:null,children:"ACERCA DE"})}),(0,u.jsx)(c(),{href:"/info/conoceQV",passHref:!0,children:(0,u.jsx)(j,{active:"conoceQV"===e,ref:"conoceQV"===e?i:null,children:"CONOCE QV"})}),(0,u.jsx)(c(),{href:"/info/guide",passHref:!0,children:(0,u.jsx)(j,{active:"guide"===e,ref:"guide"===e?i:null,children:"GU\xcdA DEL JUGADOR"})}),(0,u.jsx)(c(),{href:"/info/faqs",passHref:!0,children:(0,u.jsx)(j,{active:"faqs"===e,ref:"faqs"===e?i:null,children:"FAQS"})}),(0,u.jsx)(v,{x:k,y:C,w:I})]}),(0,u.jsxs)(g,{children:["about"===e&&(0,u.jsx)(p.default,{}),"conoceQV"===e&&(0,u.jsx)(m.default,{}),"guide"===e&&(0,u.jsx)(f.default,{}),"faqs"===e&&(0,u.jsx)(x.default,{})]})]})}},9785:function(e,n,i){"use strict";i.r(n);var t=i(2640),o=i(6311),a=i(3129),r=i(7379),c=i(5607),s=i(5893),d=r.ZP.h3.withConfig({displayName:"about__Title",componentId:"sc-1i0ro1k-0"})(["font-size:20px;font-weight:700;"]),l=r.ZP.h4.withConfig({displayName:"about__Subtitle",componentId:"sc-1i0ro1k-1"})(["font-style:italic;font-weight:bold;font-size:1em;color:#0000BB;"]),p=r.ZP.div.withConfig({displayName:"about__GridInfo",componentId:"sc-1i0ro1k-2"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));margin:0px 0px 40px 0px;p{font-size:1em;text-align:justify;}"]),m=r.ZP.div.withConfig({displayName:"about__GridImg",componentId:"sc-1i0ro1k-3"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));grid-gap:20px;align-items:center;margin-left:20px;margin-bottom:50px;"]),x=r.ZP.img.withConfig({displayName:"about__Img",componentId:"sc-1i0ro1k-4"})(["transition:.3s ease;:hover{transform:scale(1.05);cursor:pointer;}"]),f=r.ZP.div.withConfig({displayName:"about__Parrafo",componentId:"sc-1i0ro1k-5"})(["margin:5px;@media screen and (max-width:800px){font-size:14px;}"]),u=r.ZP.div.withConfig({displayName:"about__Logo",componentId:"sc-1i0ro1k-6"})(["text-align:center;"]),h=r.ZP.img.withConfig({displayName:"about__Logo2",componentId:"sc-1i0ro1k-7"})(["width:200px;@media screen and (max-width:450px){width:150px;}"]);n.default=function(){var e=(0,a.C5)(),n=e.infoA,i=e.infoB,r=(0,c.n)(!1),g=(0,t.Z)(r,3),w=g[0],j=g[1],v=g[2];return(0,s.jsxs)("div",{children:[(0,s.jsx)(d,{children:"_Acerca de Quanticon Valley"}),(0,s.jsxs)(p,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)("p",{children:e.qv[0]}),(0,s.jsx)("p",{children:e.qv[1]})]}),(0,s.jsx)(u,{children:(0,s.jsx)(h,{src:"".concat(o.O,"/imgs/info/QV.png"),alt:"QV"})})]}),(0,s.jsx)(l,{children:"Organiza"}),(0,s.jsx)(m,{children:n.map((function(e){return(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/info/").concat(e,".png"),alt:"Organizador"},e)}))}),(0,s.jsx)(l,{children:"Apoya"}),(0,s.jsxs)(m,{children:[i.map((function(e){return(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/info/").concat(e,".png"),alt:"Apoyador"},e)})),(0,s.jsx)(x,{onClick:j,width:"150px",src:"".concat(o.O,"/imgs/egg.png")})]}),(0,s.jsx)(c.Y,{isOpen:w,closeE:v})]})}},5951:function(e,n,i){"use strict";i.r(n);var t=i(7294),o=i(7379),a=i(3129),r=i(5893),c=o.ZP.div.withConfig({displayName:"faqs__Cont",componentId:"sc-cm3k6x-0"})(["display:flex;transition:.3s ease;flex-direction:column;"]),s=o.ZP.h3.withConfig({displayName:"faqs__Title",componentId:"sc-cm3k6x-1"})(["font-size:20px;font-weight:700;"]),d=o.ZP.div.withConfig({displayName:"faqs__Item",componentId:"sc-cm3k6x-2"})(["cursor:pointer;align-self:center;border:1.5px solid #AEBCD9;box-sizing:border-box;border-radius:7px;padding:10px 10px;margin:15px 25px 15px 20px;width:90%;text-align:justify;transition:all 0.2s ease;box-shadow:",";p{}"],(function(e){return e.active?"0px 6px 8px rgba(0, 0, 0, 0.3)":null})),l=o.ZP.p.withConfig({displayName:"faqs__Parrafo",componentId:"sc-cm3k6x-3"})(["overflow:hidden;max-height:",";font-size:14px;line-height:19px;color:#4F4F4F;padding:",";margin:0px;transition:all 0.2s ease-in-out;@media screen and (max-width:800px){font-size:12px;}"],(function(e){return e.active?"120px":"0px"}),(function(e){return e.active?"5px 10px":"0px"})),p=o.ZP.div.withConfig({displayName:"faqs__ItemTitle",componentId:"sc-cm3k6x-4"})(["font-weight:600;font-size:15px;line-height:22px;color:#172BEF;margin:0px;transition:all 0.2s ease;:hover{transform:scale(1.01);}@media screen and (max-width:800px){font-size:14px;}"]);n.default=function(){var e=(0,a.kI)(),n=(0,t.useState)(""),i=n[0],o=n[1];return(0,r.jsxs)(c,{children:[(0,r.jsx)(s,{children:"_Lo que m\xe1s nos preguntan"}),e.map((function(e){return(0,r.jsxs)(d,{id:e.menu,children:[(0,r.jsx)(p,{onClick:function(){return function(e){if(e===i)return o("");o(e)}(e.menu)},children:e.name}),(0,r.jsx)(l,{active:e.menu===i,children:e.desc})]},e.menu)}))]})}},3868:function(e,n,i){"use strict";i.r(n);var t=i(7379),o=i(3115),a=i(6311),r=i(5893),c=t.ZP.h3.withConfig({displayName:"guide__Title",componentId:"sc-1jljg35-0"})(["font-size:20px;font-weight:700;"]),s=t.ZP.div.withConfig({displayName:"guide__ExtLink",componentId:"sc-1jljg35-1"})(["color:blue;font-weight:500;text-align:right;margin-right:8%;@media screen and (max-width:800px){font-size:14px;}"]);n.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{children:"_Guia de Juego"}),(0,r.jsx)(o.Z,{file:"content/guia.pdf"}),(0,r.jsx)(s,{children:(0,r.jsx)("a",{href:"".concat(a.O,"/content/guia.pdf"),target:"_blank",rel:"noreferrer",children:"\xbfCargar en una pesta\xf1a nueva?"})})]})}},3832:function(e,n,i){"use strict";i.r(n);var t=i(7294),o=i(6311),a=i(1664),r=i.n(a),c=i(7379),s=i(3129),d=i(5893),l=c.ZP.div.withConfig({displayName:"know__Cont",componentId:"sc-ktdc9m-0"})(["display:flex;transition:.3s ease;flex-direction:column;"]),p=c.ZP.h3.withConfig({displayName:"know__Title",componentId:"sc-ktdc9m-1"})(["font-size:20px;font-weight:700;"]),m=c.ZP.div.withConfig({displayName:"know__Selector",componentId:"sc-ktdc9m-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:.8em;justify-content:center;align-items:center;margin-bottom:2em;@media screen and (max-width:800px){grid-template-columns:repeat(2,1fr);}"]),x=c.ZP.div.withConfig({displayName:"know__Box",componentId:"sc-ktdc9m-3"})(["display:flex;justify-content:center;align-items:center;height:65px;padding:1em;font-weight:bold;background:#FFFFFF;border:2px solid ",";box-sizing:border-box;box-shadow:0px 2px 4px rgba(0,0,0,0.075);border-radius:10px;transition:.3s ease;:hover{border:2px solid #172BEF;cursor:pointer;}@media screen and (max-width:800px){font-size:14px;height:45px;}"],(function(e){return e.act?"#172BEF":"#D8DEF3"})),f=c.ZP.h4.withConfig({displayName:"know__SubTitle",componentId:"sc-ktdc9m-4"})(["padding:.5em 0;margin:0 0 .5em 0;border-bottom:2px solid #bbb;max-width:500px;:hover{color:#172BEF;cursor:pointer;}@media screen and (max-width:800px){font-size:14px;}"]),u=c.ZP.p.withConfig({displayName:"know__Text",componentId:"sc-ktdc9m-5"})(["margin:0 0 1em .5em;max-width:500px;text-align:justify;font-size:",";height:",";color:#4F4F4F;transition:.3s ease;@media screen and (max-width:800px){font-size:",";}"],(function(e){return e.act?".9em":"0"}),(function(e){return e.act?"auto":"0"}),(function(e){return e.act?".7em":"0"})),h=c.ZP.img.withConfig({displayName:"know__Image",componentId:"sc-ktdc9m-6"})(["margin-right:1em;"]),g=c.ZP.button.withConfig({displayName:"know__Button",componentId:"sc-ktdc9m-7"})(["width:150px;color:#172BEF;font-weight:bold;padding:.5em 1em;margin:1em auto;border:2px solid #172BEF;border-radius:.5em;transition:.3s ease;:hover{transform:scale(1.05);background:#172BEF;cursor:pointer;color:white;}@media screen and (max-width:800px){font-size:12px;}"]);n.default=function(){var e=(0,s.ar)(),n=(0,t.useState)(e[0]),i=n[0],a=n[1],c=(0,t.useState)(0),w=c[0],j=c[1];return(0,d.jsxs)(l,{children:[(0,d.jsx)(p,{children:"_Conoce Quanticon Valley"}),(0,d.jsx)(m,{children:e.map((function(e){return(0,d.jsxs)(x,{act:e.title===i.title,onClick:function(){return a(e)},children:[(0,d.jsx)(h,{src:"".concat(o.O,"/").concat(e.img)}),e.title]},e.title)}))}),(0,d.jsx)(f,{onClick:function(){return j(0)},children:"1. Objetivo de esta seccion"}),(0,d.jsx)(u,{act:0===w,children:i.obj}),(0,d.jsx)(f,{onClick:function(){return j(1)},children:"2. Que encontraras aqui?"}),(0,d.jsx)(u,{act:1===w,children:i.cont}),(0,d.jsx)(f,{onClick:function(){return j(2)},children:"3. Lo mas relevante"}),(0,d.jsx)(u,{act:2===w,children:i.imp}),(0,d.jsx)(r(),{href:"/".concat(i.link),children:(0,d.jsx)(g,{children:"Visita esta secci\xf3n "})})]})}},872:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/[type]",function(){return i(2655)}])},1163:function(e,n,i){e.exports=i(1587)},3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){}},function(e){e.O(0,[577,735,89,677,774,888,179],(function(){return n=872,e(e.s=n);var n}));var n=e.O();_N_E=n}]);