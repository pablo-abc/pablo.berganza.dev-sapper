import{d as t,b as n,i as r,s as e,e as o,S as s,F as a,g as f,G as i,j as c,H as u,l,u as g,I as $,J as m,K as p,m as b,w as d,x as h}from"./client.35895485.js";import{H as j}from"./Head.db60c27e.js";import"./index.es.cba4d586.js";import{B as v}from"./BlogList.15fb1798.js";function y(t){return function(){var n,r=d(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=d(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return h(this,n)}}function x(t){var n,r,e,o;return n=new j({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),e=new v({props:{blogs:t[0]}}),{c:function(){a(n.$$.fragment),r=f(),a(e.$$.fragment)},l:function(t){i(n.$$.fragment,t),r=c(t),i(e.$$.fragment,t)},m:function(t,s){u(n,t,s),l(t,r,s),u(e,t,s),o=!0},p:function(t,n){var r={};1&g(n,1)[0]&&(r.blogs=t[0]),e.$set(r)},i:function(t){o||($(n.$$.fragment,t),$(e.$$.fragment,t),o=!0)},o:function(t){m(n.$$.fragment,t),m(e.$$.fragment,t),o=!1},d:function(t){p(n,t),t&&b(r),p(e,t)}}}function B(){return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{blogs:t}})}function R(t,n,r){var e=n.blogs;return t.$$set=function(t){"blogs"in t&&r(0,e=t.blogs)},[e]}export default(function(a){t(i,s);var f=y(i);function i(t){var s;return n(this,i),s=f.call(this),r(o(s),t,R,x,e,{blogs:0}),s}return i}());export{B as preload};
