(this["webpackJsonptyping-speed"]=this["webpackJsonptyping-speed"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),a=c.n(r),i=(c(12),c(13),c(6)),o=(c(14),s.a.createContext({activeKey:new Set,setActiveKey:function(){},currentPosition:1,setCurrentPosition:function(){},bagsOfKeys:{},setbagsOfKeys:function(){}})),j=c(0);function d(){var e=Object(n.useContext)(o),t=e.activeKey,c=e.setActiveKey,s=e.currentPosition,r=e.setCurrentPosition,a=e.bagsOfKeys,d=e.setbagsOfKeys,l=Object(n.useCallback)((function(e){var n=e.code,o=e.key;a["".concat(s).concat(o.toLowerCase())]=o,d(Object.assign({},a)),r(s+1),t.add(n.toLowerCase()),c(new Set(Object(i.a)(t)))}),[t,c,s,r,a,d]),u=Object(n.useCallback)((function(e){var n=e.code;t.delete(n.toLowerCase()),c(new Set(Object(i.a)(t)))}),[t,c]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",l),window.addEventListener("keyup",u),function(){window.removeEventListener("keydown",l),window.removeEventListener("keyup",u)}}),[l,u]),Object(j.jsxs)("div",{className:"keyboard-wrapper",children:[["qwertyuiop","asdfghjkl","zxcvbnm"].map((function(e,c){return Object(j.jsx)("div",{className:"row",children:Array.from(e).map((function(e){return Object(j.jsx)("div",{className:t.has("key".concat(e))?"letter active-letter":"letter",children:Object(j.jsx)("span",{children:e})},e)}))},"row-".concat(c+1))})),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:t.has("space")?"letter active-letter space-bar":"letter space-bar",children:Object(j.jsx)("span",{children:"space"})})})]})}c(16);function l(){return Object(j.jsx)("div",{className:"indicators"})}c(17);function u(){var e=Object(n.useContext)(o),t=e.currentPosition,c=e.bagsOfKeys;return console.log(t),Object(j.jsx)("div",{className:"text-wrapper",children:Array.from("The noise is too much in the hall").map((function(e,n){return Object(j.jsx)("span",{className:n+1===t?"display-text current-letter":"display-text","data-keycode":"key".concat(e),style:{color:n+1<t?c["".concat(n+1).concat(e.toLowerCase())]===e.toLowerCase()?"green":"red":"white"},children:e},"".concat(n+1).concat(e))}))})}c(18);function b(){return Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)(l,{})}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("div",{className:"top",children:Object(j.jsx)(u,{})}),Object(j.jsx)("div",{className:"bottom",children:Object(j.jsx)(d,{})})]}),Object(j.jsx)("div",{className:"right",children:"are you right"})]})}var O=c(4);var v=function(e){var t=e.children,c=Object(n.useState)(new Set),s=Object(O.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)(1),d=Object(O.a)(i,2),l=d[0],u=d[1],b=Object(n.useState)({}),v=Object(O.a)(b,2),f={activeKey:r,setActiveKey:a,currentPosition:l,setCurrentPosition:u,bagsOfKeys:v[0],setbagsOfKeys:v[1]};return Object(j.jsx)(o.Provider,{value:f,children:t})};var f=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(v,{children:Object(j.jsx)(b,{})})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.9daaf2b8.chunk.js.map