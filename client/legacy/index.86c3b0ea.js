import{P as t,Q as n,f as r,e,g as a,s as c,h as o,S as s,D as u,k as f,E as i,m as p,F as l,o as m,u as $,G as g,H as h,I as v,p as y,w as d,x as b}from"./client.78cab249.js";import{H as x}from"./Head.b2905911.js";import{C as j}from"./Contact.4e95b86f.js";function w(t){return function(){var n,r=d(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=d(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return b(this,n)}}function R(t){var n,r,e=new x({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),a=new j({props:{contact:t[0]}});return{c:function(){u(e.$$.fragment),n=f(),u(a.$$.fragment)},l:function(t){i(e.$$.fragment,t),n=p(t),i(a.$$.fragment,t)},m:function(t,c){l(e,t,c),m(t,n,c),l(a,t,c),r=!0},p:function(t,n){var r={};1&$(n,1)[0]&&(r.contact=t[0]),a.$set(r)},i:function(t){r||(g(e.$$.fragment,t),g(a.$$.fragment,t),r=!0)},o:function(t){h(e.$$.fragment,t),h(a.$$.fragment,t),r=!1},d:function(t){v(e,t),t&&y(n),v(a,t)}}}function P(){return C.apply(this,arguments)}function C(){return(C=t(n.mark(function t(){var r,e;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("es/contact.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",{contact:e});case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,n,r){var e=n.contact;return t.$set=function(t){"contact"in t&&r(0,e=t.contact)},[e]}export default(function(t){r(u,s);var n=w(u);function u(t){var r;return e(this,u),r=n.call(this),a(o(r),t,D,R,c,{contact:0}),r}return u}());export{P as preload};
