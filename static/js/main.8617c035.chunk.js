(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(9),n(3)),o=n(0),d="7b69a8c0ae232af4ca0e1cacf81ef173",h="https://api.openweathermap.org/data/2.5/";var j=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),i=Object(r.a)(s,2),j=i[0],l=i[1];return Object(o.jsx)("div",{className:"undefined"!=typeof j.main&&j.main.temp>20?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),c(""),console.log(e)}))}})}),"undefined"!=typeof j.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[" ",j.name,", ",j.sys.country,"   "]}),Object(o.jsx)("div",{className:"date",children:(new Date).toDateString()})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(j.main.temp),"\xb0C "]}),Object(o.jsxs)("div",{className:"weather",children:[" ",j.weather[0].main," "]})]})]}):""]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.8617c035.chunk.js.map