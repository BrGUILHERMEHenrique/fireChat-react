(this["webpackJsonpfirechat-react"]=this["webpackJsonpfirechat-react"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(8),n=a.n(s),r=a(16),i=a.n(r),o=a(17),u=a(11),d=a(10);a(26),a(27);d.a.initializeApp({apiKey:"AIzaSyBKSp7Ju1iWtciHyyVGcuW09eM7-dzFnEE",authDomain:"firechat-8e180.firebaseapp.com",databaseURL:"https://firechat-8e180.firebaseio.com",projectId:"firechat-8e180",storageBucket:"firechat-8e180.appspot.com",messagingSenderId:"254452523356",appId:"1:254452523356:web:fcf38c4c2d106cd79fa199",measurementId:"G-8T5D7WHWXP"});var l=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1],b=Object(s.useState)(""),f=Object(u.a)(b,2),h=f[0],p=f[1],m=Object(s.useCallback)((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));console.log("snapshot",t),n(t)}),[]);Object(s.useEffect)((function(){var e=d.a.firestore().collection("messages").onSnapshot(m);return function(){return e()}}),[]);var O=Object(s.useCallback)((function(){try{d.a.firestore().collection("messages").add({user:h,message:l})}catch(e){console.log("Algo de errado n\xe3o est\xe1 certo")}finally{j("")}}),[h,l]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"user",children:Object(c.jsx)("input",{className:"user-name",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Nome de usu\xe1rio"})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Mensagens"}),a.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("strong",{children:[e.user,": "]}),e.message]})}))]}),Object(c.jsxs)("div",{className:"dialog",children:[Object(c.jsx)("input",{className:"message-for-seding",value:l,onChange:function(e){return j(e.target.value)},placeholder:"Mensagem"}),Object(c.jsx)("button",{className:"btn-send",onClick:O,children:"Send"})]})]})};a(28);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4a4bffc0.chunk.js.map