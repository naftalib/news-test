(this["webpackJsonpnews-test"]=this["webpackJsonpnews-test"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=n(1),l=(n(9),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("react"),l=Object(i.a)(r,2),u=l[0],s=l[1],h=Object(a.useState)("https://hn.algolia.com/api/v1/search?query=react"),m=Object(i.a)(h,2),f=m[0],p=m[1];Object(a.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){return o(e.hits)})).catch((function(e){return console.log(e)})),console.log(n)}),[f]);var v=function(e){s(e.target.value)},d=function(e){e.preventDefault(),p("https://hn.algolia.com/api/v1/search?query=".concat(u))};return c.a.createElement("div",null,c.a.createElement("div",{id:"title"},c.a.createElement("h2",null,"Hacker News Search")),c.a.createElement("div",{id:"main"},c.a.createElement("form",{onSubmit:d},c.a.createElement("input",{type:"text",value:u,onChange:v}),c.a.createElement("button",null,"Search")),n.map((function(e,t){return c.a.createElement("p",{key:t},e.title)}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.cbebeff8.chunk.js.map