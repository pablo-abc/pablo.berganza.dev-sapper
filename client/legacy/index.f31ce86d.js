import{d as t,b as n,i as r,s as e,e as o,S as s,A as a,g as i,B as f,j as c,C as u,l,p as g,D as p,E as m,F as $,m as b,t as d,u as h}from"./client.87e29d8d.js";import{H as j}from"./Head.daef320d.js";import"./index.es.cba4d586.js";import{B as v}from"./BlogList.b6d85271.js";function y(t){return function(){var n,r=d(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=d(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return h(this,n)}}function B(t){var n,r,e=new j({props:{title:"Blog | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/blog",lang:"es"}}),o=new v({props:{blogs:t[0]}});return{c:function(){a(e.$$.fragment),n=i(),a(o.$$.fragment)},l:function(t){f(e.$$.fragment,t),n=c(t),f(o.$$.fragment,t)},m:function(t,s){u(e,t,s),l(t,n,s),u(o,t,s),r=!0},p:function(t,n){var r={};1&g(n,1)[0]&&(r.blogs=t[0]),o.$set(r)},i:function(t){r||(p(e.$$.fragment,t),p(o.$$.fragment,t),r=!0)},o:function(t){m(e.$$.fragment,t),m(o.$$.fragment,t),r=!1},d:function(t){$(e,t),t&&b(n),$(o,t)}}}function R(){return this.fetch("es/blog.json").then(function(t){return t.json()}).then(function(t){return{blogs:t}})}function x(t,n,r){var e=n.blogs;return t.$set=function(t){"blogs"in t&&r(0,e=t.blogs)},[e]}export default(function(a){t(f,s);var i=y(f);function f(t){var s;return n(this,f),s=i.call(this),r(o(s),t,x,B,e,{blogs:0}),s}return f}());export{R as preload};
