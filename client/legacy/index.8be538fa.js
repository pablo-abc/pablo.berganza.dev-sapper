import{_ as t,r as n,a as r,b as a,i as e,c,S as o,d as s,e as i,s as u,f,g as p,j as l,k as $,u as m,v as g,x as h,y as v,z as y,A as d,o as x}from"./client.b242008c.js";import{H as b}from"./Head.988ae6c4.js";import{C as j}from"./Contact.7774c0a3.js";function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){var n,r,a,e;return n=new b({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),a=new j({props:{contact:t[0]}}),{c:function(){f(n.$$.fragment),r=p(),f(a.$$.fragment)},l:function(t){l(n.$$.fragment,t),r=$(t),l(a.$$.fragment,t)},m:function(t,c){m(n,t,c),g(t,r,c),m(a,t,c),e=!0},p:function(t,n){var r={};1&h(n,1)[0]&&(r.contact=t[0]),a.$set(r)},i:function(t){e||(v(n.$$.fragment,t),v(a.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),y(a.$$.fragment,t),e=!1},d:function(t){d(n,t),t&&x(r),d(a,t)}}}function z(){return C.apply(this,arguments)}function C(){return(C=t(n.mark((function t(){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("es/contact.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.abrupt("return",{contact:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function P(t,n,r){var a=n.contact;return t.$$set=function(t){"contact"in t&&r(0,a=t.contact)},[a]}var S=function(t){r(p,o);var n,f=(n=p,function(){var t,r=s(n);if(R()){var a=s(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return i(this,t)});function p(t){var n;return a(this,p),n=f.call(this),e(c(n),t,P,w,u,{contact:0}),n}return p}();export default S;export{z as preload};
