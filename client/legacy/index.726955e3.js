import{_ as t,r as n,a as r,b as a,i as c,c as e,S as o,d as s,e as f,s as u,f as i,g as p,j as l,k as $,u as m,v as g,x as h,y as v,z as d,A as y,o as b}from"./client.cc30cb4f.js";import{H as x}from"./Head.444a5c03.js";import{C as j}from"./Contact.6800acb4.js";function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){var n,r,a,c;return n=new x({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),a=new j({props:{contact:t[0]}}),{c:function(){i(n.$$.fragment),r=p(),i(a.$$.fragment)},l:function(t){l(n.$$.fragment,t),r=$(t),l(a.$$.fragment,t)},m:function(t,e){m(n,t,e),g(t,r,e),m(a,t,e),c=!0},p:function(t,n){var r={};1&h(n,1)[0]&&(r.contact=t[0]),a.$set(r)},i:function(t){c||(v(n.$$.fragment,t),v(a.$$.fragment,t),c=!0)},o:function(t){d(n.$$.fragment,t),d(a.$$.fragment,t),c=!1},d:function(t){y(n,t),t&&b(r),y(a,t)}}}function P(){return z.apply(this,arguments)}function z(){return(z=t(n.mark((function t(){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("contact.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.abrupt("return",{contact:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,n,r){var a=n.contact;return t.$$set=function(t){"contact"in t&&r(0,a=t.contact)},[a]}var k=function(t){r(p,o);var n,i=(n=p,function(){var t,r=s(n);if(R()){var a=s(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return f(this,t)});function p(t){var n;return a(this,p),n=i.call(this),c(e(n),t,C,w,u,{contact:0}),n}return p}();export default k;export{P as preload};