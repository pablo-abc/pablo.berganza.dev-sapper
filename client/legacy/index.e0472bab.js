import{_ as t,r as n,a as r,b as a,c as e,d as c,i as o,e as s,S as f,s as u,f as i,g as l,j as p,k as $,u as m,v as d,x as h,y as v,z as g,A as y,o as b}from"./client.dc8adf10.js";import{C as x}from"./Contact.dc1c95bf.js";import{H as j}from"./Head.7d1bdb0d.js";function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=a(t);if(n){var o=a(this).constructor;r=Reflect.construct(c,arguments,o)}else r=c.apply(this,arguments);return e(this,r)}}function w(t){var n,r,a,e;return n=new j({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),a=new x({props:{contact:t[0]}}),{c:function(){i(n.$$.fragment),r=l(),i(a.$$.fragment)},l:function(t){p(n.$$.fragment,t),r=$(t),p(a.$$.fragment,t)},m:function(t,c){m(n,t,c),d(t,r,c),m(a,t,c),e=!0},p:function(t,n){var r={};1&h(n,1)[0]&&(r.contact=t[0]),a.$set(r)},i:function(t){e||(v(n.$$.fragment,t),v(a.$$.fragment,t),e=!0)},o:function(t){g(n.$$.fragment,t),g(a.$$.fragment,t),e=!1},d:function(t){y(n,t),t&&b(r),y(a,t)}}}function B(){return P.apply(this,arguments)}function P(){return(P=t(n.mark((function t(){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("contact.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.abrupt("return",{contact:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(t,n,r){var a=n.contact;return t.$$set=function(t){"contact"in t&&r(0,a=t.contact)},[a]}var C=function(t){r(a,f);var n=R(a);function a(t){var r;return c(this,a),r=n.call(this),o(s(r),t,z,w,u,{contact:0}),r}return a}();export default C;export{B as preload};
