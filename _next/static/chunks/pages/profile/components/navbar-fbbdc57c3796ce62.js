(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{4995:function(e,t,o){"use strict";o.r(t);var r=o(7379),n=o(1758),i=o(6495),a=o(5893),c=r.ZP.div.withConfig({displayName:"navbar__OutContainer",componentId:"sc-1fnck4c-0"})(["display:flex;flex-direction:column;padding:10px;height:90%;margin-bottom:10px;@media screen and (max-width:1500px){flex-direction:row;height:40%;}"]),s=r.ZP.div.withConfig({displayName:"navbar__Img",componentId:"sc-1fnck4c-1"})(["height:220px;"]),d=r.ZP.div.withConfig({displayName:"navbar__Trop",componentId:"sc-1fnck4c-2"})(["margin-top:30px;text-align:center;background-color:white;height:300px;border-radius:10px;overflow:auto;@media screen and (max-width:1500px){height:150px;margin-top:0px;margin-left:3%;padding:5px;}::-webkit-scrollbar-track{border:none;padding:10px 0;margin:10px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#ccc;border:1px solid rgba(0,0,0,0);}"]),p=r.ZP.div.withConfig({displayName:"navbar__Trofeos",componentId:"sc-1fnck4c-3"})(["display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;@media screen and (max-width:1500px){flex-direction:row;justify-content:center;}"]);t.default=function(e){var t=e.idUsuario,o=e.fotoUsuario,r=e.trofeosUsuario,u=void 0===r?[]:r;return(0,a.jsxs)(c,{children:[(0,a.jsx)(s,{children:(0,a.jsx)(i.default,{idUsuario:t,fotoUsuario:o})}),(0,a.jsxs)(d,{children:[(0,a.jsx)("h5",{children:"Trofeos recientes"}),(0,a.jsx)(p,{children:u.map((function(e){return t=e,(0,a.jsx)(n.default,{num:t},t);var t}))})]})]})}},6495:function(e,t,o){"use strict";o.r(t);var r=o(7379),n=o(7294),i=o(8735),a=o(3531),c=o(5893),s=r.ZP.div.withConfig({displayName:"photo__Imagen",componentId:"sc-d5f455-0"})(["height:200px;width:160px;background-color:#bbbbbb;border-radius:5px;border:2px solid #172bef;"]),d=r.ZP.img.withConfig({displayName:"photo__Photo2",componentId:"sc-d5f455-1"})(["height:220px;width:180px;background-color:#bbbbbb;border-radius:5px;border:2px solid #172bef;@media screen and (max-width:1500px){height:200px;width:160px;}"]),p=r.ZP.form.withConfig({displayName:"photo__ND",componentId:"sc-d5f455-2"})(["background-color:#172bef;color:white;padding:10px;position:absolute;border-radius:10px;display:flex;flex-direction:column;text-align:right;"]);t.default=function(e){var t=e.idUsuario,o=e.fotoUsuario,r=(0,n.useState)(!1),u=r[0],l=r[1];(0,n.useEffect)((function(){l(!0)}),[]);var f=(0,n.useState)(!1),h=f[0],b=f[1];function x(){b(!h)}var g={id:t,foto:""},m=(0,a.Z)(g,(function(){return{}}),(function(){x()})),v=m.valores,w=(m.errores,m.handleSubmit),j=m.handleChange,y=(v.id,v.foto);return(0,c.jsxs)("div",{"data-tip":!0,"data-for":"dscTooltipPhoto",children:[o?(0,c.jsx)(d,{src:o,onClick:x}):(0,c.jsx)(s,{onClick:x}),h?(0,c.jsxs)(p,{onSubmit:w,children:[(0,c.jsx)("input",{type:"file",name:"foto",value:y,accept:"image/png, image/jpeg",onChange:j}),(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{type:"submit",value:"Enviar"}),(0,c.jsx)("button",{onClick:x,children:"Cancelar"})]})]}):null,u&&(0,c.jsx)(i.Z,{id:"dscTooltipPhoto",place:"bottom",type:"info",children:"Click aqui para cambiar tu foto"})]})}},1758:function(e,t,o){"use strict";o.r(t);var r=o(7379),n=o(6311),i=o(5893),a=r.ZP.div.withConfig({displayName:"trophy__Image",componentId:"sc-v1sst9-0"})(["height:60px;width:130px;background-color:#bbbbbb;border-radius:10px;margin:10px;"]),c=r.ZP.img.withConfig({displayName:"trophy__Trofeo",componentId:"sc-v1sst9-1"})(["height:60px;width:130px;border-radius:10px;margin:10px;transition:.3s all;:hover{transform:scale(1.2);}"]);t.default=function(e){var t=e.num;return(0,i.jsx)("div",{children:t?(0,i.jsx)(c,{src:"".concat(n.O,"/imgs/trophy/").concat(t,".png")}):(0,i.jsx)(a,{})})}},3531:function(e,t,o){"use strict";var r=o(9499),n=o(7294);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){(0,r.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.Z=function(e,t,o){var i=(0,n.useState)(e),c=i[0],s=i[1],d=(0,n.useState)({}),p=d[0],u=d[1],l=(0,n.useState)(!1),f=l[0],h=l[1];(0,n.useEffect)((function(){f&&(0===Object.keys(p).length&&o(),h(!1))}),[p]);return{valores:c,errores:p,handleSubmit:function(e){console.log(c),e.preventDefault();var o=t(c);u(o),h(!0)},handleChange:function(e){s(a(a({},c),{},(0,r.Z)({},e.target.name,e.target.value)))}}}},9795:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/components/navbar",function(){return o(4995)}])}},function(e){e.O(0,[735,774,888,179],(function(){return t=9795,e(e.s=t);var t}));var t=e.O();_N_E=t}]);