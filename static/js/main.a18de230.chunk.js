(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,o){e.exports=o(13)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(4),i=o.n(r),c=(o(11),o(1)),l=o(2);o(12);function s(e){var t=e.todo,o=e.index,n=e.toggleCompleteTodo,r=e.deleteTodo;return a.a.createElement("div",{className:"todo"},a.a.createElement("p",{onClick:function(){return n(o)},style:{textDecoration:t.isCompleted?"line-through":""}},t.text),a.a.createElement("div",null,a.a.createElement("button",{className:"delete",onClick:function(){return r(o)}}," ","\ud83d\uddd1\ufe0f"," ")))}function d(e){var t=e.addTodo,o=Object(n.useState)(""),r=Object(l.a)(o,2),i=r[0],c=r[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&(t(i),c(""))}},a.a.createElement("input",{type:"text",className:"input",placeholder:"Add Todos ..",value:i,onChange:function(e){return c(e.target.value)}}))}var u=function(){var e=localStorage.getItem("_todos")?JSON.parse(localStorage.getItem("_todos")):[{text:"Learn React Hooks",isCompleted:!1},{text:"Make Coffe",isCompleted:!1},{text:"Make a ToDo App",isCompleted:!1}],t=Object(n.useState)(e),o=Object(l.a)(t,2),r=o[0],i=o[1];Object(n.useEffect)(function(){localStorage.setItem("_todos",JSON.stringify(r))},[r]);var u=function(e){var t=Object(c.a)(r);t[e].isCompleted=!t[e].isCompleted,i(t)},f=function(e){var t=Object(c.a)(r);t.splice(e,1),i(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null," todo: "),a.a.createElement("div",{className:"todo-list"},r.map(function(e,t){return a.a.createElement(s,{key:t,index:t,todo:e,toggleCompleteTodo:u,deleteTodo:f})}),a.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(c.a)(r),[{text:e}]);i(t)}})))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todos",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todos","/service-worker.js");f?(function(e,t){fetch(e).then(function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):m(t,e)})}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.a18de230.chunk.js.map