(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(3),r=n.n(s),a=(n(9),n(4)),d=n(0);var o=function(){var t=i.a.useState([]),e=Object(a.a)(t,2),n=e[0],c=e[1];return i.a.useEffect((function(){fetch("http://localhost:8000/api/transactions/").then((function(t){return t.json()})).then(c)}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("p",{children:"Transaction list"}),n.map((function(t){return Object(d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(3, 1fr)"},children:[Object(d.jsx)("div",{children:t.id}),Object(d.jsx)("div",{children:t.time}),Object(d.jsx)("div",{children:t.native_amount}),Object(d.jsx)("div",{children:t.native_amount_usd})]})}))]})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(o,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.af2f1c56.chunk.js.map