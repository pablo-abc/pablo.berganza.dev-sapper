import{K as t,L as n,d as r,b as a,i as e,s as c,e as o,S as s,A as u,g as f,B as i,j as p,C as l,l as m,p as $,D as g,E as h,F as d,m as v,t as b,u as y}from"./client.6d3b87db.js";import{H as j}from"./Head.90b70c60.js";import{C as x}from"./Contact.1a96af87.js";function R(t){return function(){var n,r=b(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function w(t){var n,r,a=new j({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),e=new x({props:{contact:t[0]}});return{c:function(){u(a.$$.fragment),n=f(),u(e.$$.fragment)},l:function(t){i(a.$$.fragment,t),n=p(t),i(e.$$.fragment,t)},m:function(t,c){l(a,t,c),m(t,n,c),l(e,t,c),r=!0},p:function(t,n){var r={};1&$(n,1)[0]&&(r.contact=t[0]),e.$set(r)},i:function(t){r||(g(a.$$.fragment,t),g(e.$$.fragment,t),r=!0)},o:function(t){h(a.$$.fragment,t),h(e.$$.fragment,t),r=!1},d:function(t){d(a,t),t&&v(n),d(e,t)}}}function C(){return P.apply(this,arguments)}function P(){return(P=t(n.mark(function t(){var r,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("contact.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.abrupt("return",{contact:a});case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function B(t,n,r){var a=n.contact;return t.$set=function(t){"contact"in t&&r(0,a=t.contact)},[a]}export default(function(t){r(u,s);var n=R(u);function u(t){var r;return a(this,u),r=n.call(this),e(o(r),t,B,w,c,{contact:0}),r}return u}());export{C as preload};
