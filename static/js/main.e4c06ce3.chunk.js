(this.webpackJsonpparadas_taxi=this.webpackJsonpparadas_taxi||[]).push([[0],{10:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(4),c=n.n(s),i=(n(10),n(3)),d=n.n(i),o=n(5),u=n(0),p=function(){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{style:{width:"100%"},children:Object(u.jsx)("iframe",{title:"Mapa de paradas de taxi",src:"https://www.google.com/maps/d/u/0/embed?mid=1gKqRjP_LJZ0-9QD8Vk_VUTjamej5vlfF",width:"100%",height:"480"})})})};var j=function(){var t=function(){var t=Object(o.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.bcn.cat/tercerlloc/files/transports/transports-addicionals/opendatabcn_transports_transports-addicionals_parades-taxi-js.json");case 2:return e=t.sent,t.next=5,e.json();case 5:t.sent.map((function(t){var e=t.addresses[0];if("Sant Mart\xed"===e.district_name){var n=e.address_name+", n\xba "+e.street_number_1,a=document.createElement("li"),r=document.createTextNode(n);a.appendChild(r),document.getElementById("root").appendChild(a)}return null}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h1",{children:"Paradas de taxi en el distrito de Sant Mart\xed:"}),Object(u.jsx)(p,{}),Object(u.jsx)("p",{})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),l()}},[[13,1,2]]]);
//# sourceMappingURL=main.e4c06ce3.chunk.js.map