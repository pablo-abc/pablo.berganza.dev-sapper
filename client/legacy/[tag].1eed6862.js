import{R as t,T as n,d as r,b as a,i as e,s,e as o,S as i,F as c,g as u,G as f,j as l,H as g,l as p,u as $,I as m,J as b,K as h,m as d,w as v,x}from"./client.35895485.js";import{H as y}from"./Head.db60c27e.js";import"./index.es.cba4d586.js";import{B as j}from"./BlogList.15fb1798.js";function R(t){return function(){var n,r=v(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return x(this,n)}}function w(t){var n,r,a,e;return n=new y({props:{title:"Tag: "+t[1]+" | Pablo Berganza",description:"Posts about "+t[1],url:"/blog/tags/"+t[1]}}),a=new j({props:{blogs:t[0],title:t[2]}}),{c:function(){c(n.$$.fragment),r=u(),c(a.$$.fragment)},l:function(t){f(n.$$.fragment,t),r=l(t),f(a.$$.fragment,t)},m:function(t,s){g(n,t,s),p(t,r,s),g(a,t,s),e=!0},p:function(t,r){var e=$(r,1)[0],s={};2&e&&(s.title="Tag: "+t[1]+" | Pablo Berganza"),2&e&&(s.description="Posts about "+t[1]),2&e&&(s.url="/blog/tags/"+t[1]),n.$set(s);var o={};1&e&&(o.blogs=t[0]),4&e&&(o.title=t[2]),a.$set(o)},i:function(t){e||(m(n.$$.fragment,t),m(a.$$.fragment,t),e=!0)},o:function(t){b(n.$$.fragment,t),b(a.$$.fragment,t),e=!1},d:function(t){h(n,t),t&&d(r),h(a,t)}}}function P(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark(function t(r){var a,e,s;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.params,t.next=3,this.fetch("blog/tags/".concat(a.tag,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(s=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{blogs:s,tag:a.tag});case 11:this.error(e.status,s.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function H(t,n,r){var a,e=n.blogs,s=n.tag;return t.$$set=function(t){"blogs"in t&&r(0,e=t.blogs),"tag"in t&&r(1,s=t.tag)},t.$$.update=function(){2&t.$$.dirty&&r(2,a=s.charAt(0).toUpperCase()+s.slice(1))},[e,s,a]}export default(function(t){r(c,i);var n=R(c);function c(t){var r;return a(this,c),r=n.call(this),e(o(r),t,H,w,s,{blogs:0,tag:1}),r}return c}());export{P as preload};
