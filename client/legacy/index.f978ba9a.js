import{d as t,b as n,i as r,s as o,e,S as a,F as s,g as f,G as c,j as i,H as u,l,p as g,I as p,J as m,K as $,m as b,t as h,u as d}from"./client.fab3a714.js";import{H as j}from"./Head.9929a3a5.js";import"./index.es.cba4d586.js";import{B as v}from"./BlogList.a1c928c9.js";function y(t){return function(){var n,r=h(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function B(t){var n,r,o=new j({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),e=new v({props:{blogs:t[0]}});return{c:function(){s(o.$$.fragment),n=f(),s(e.$$.fragment)},l:function(t){c(o.$$.fragment,t),n=i(t),c(e.$$.fragment,t)},m:function(t,a){u(o,t,a),l(t,n,a),u(e,t,a),r=!0},p:function(t,n){var r={};1&g(n,1)[0]&&(r.blogs=t[0]),e.$set(r)},i:function(t){r||(p(o.$$.fragment,t),p(e.$$.fragment,t),r=!0)},o:function(t){m(o.$$.fragment,t),m(e.$$.fragment,t),r=!1},d:function(t){$(o,t),t&&b(n),$(e,t)}}}function R(){return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{blogs:t}})}function x(t,n,r){var o=n.blogs;return t.$set=function(t){"blogs"in t&&r(0,o=t.blogs)},[o]}export default(function(s){t(c,a);var f=y(c);function c(t){var a;return n(this,c),a=f.call(this),r(e(a),t,x,B,o,{blogs:0}),a}return c}());export{R as preload};
