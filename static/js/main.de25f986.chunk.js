(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),c=(n(11),n(1)),l=n(2);n(12);function s(e){var t=e.todo,n=e.index,o=e.completeTodo,r=e.deleteTodo;return a.a.createElement("div",{className:"todo"},a.a.createElement("p",{onClick:function(){return o(n)},style:{textDecoration:t.isCompleted?"line-through":""}},t.text),a.a.createElement("div",null,a.a.createElement("button",{className:"delete",onClick:function(){return r(n)}}," \ud83d\uddd1\ufe0f ")))}function d(e){var t=e.addTodo,n=Object(o.useState)(""),r=Object(l.a)(n,2),i=r[0],c=r[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&(t(i),c(""))}},a.a.createElement("input",{type:"text",className:"input",placeholder:"Add Todos ..",value:i,onChange:function(e){return c(e.target.value)}}))}var u=function(){var e=localStorage.getItem("_todos")?JSON.parse(localStorage.getItem("_todos")):[{text:"Learn React Hooks",isCompleted:!1},{text:"Make Coffe",isCompleted:!1},{text:"Make a ToDo App",isCompleted:!1}],t=Object(o.useState)(e),n=Object(l.a)(t,2),r=n[0],i=n[1];Object(o.useEffect)(function(){localStorage.setItem("_todos",JSON.stringify(r))},[r]);var u=function(e){var t=Object(c.a)(r);t[e].isCompleted=!0,i(t)},f=function(e){var t=Object(c.a)(r);t.splice(e,1),i(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null," todo: "),a.a.createElement("div",{className:"todo-list"},r.map(function(e,t){return a.a.createElement(s,{key:t,index:t,todo:e,completeTodo:u,deleteTodo:f})}),a.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(c.a)(r),[{text:e}]);i(t)}})))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todos",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todos","/service-worker.js");f?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):m(t,e)})}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.de25f986.chunk.js.map