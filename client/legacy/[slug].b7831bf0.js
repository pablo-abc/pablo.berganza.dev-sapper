import{R as t,T as r,d as e,b as n,i as a,s,e as i,S as o,F as u,g as c,G as f,j as l,H as b,l as p,u as g,I as m,J as $,K as d,m as h,w as v,x}from"./client.465b43b0.js";import{H as y}from"./Head.6bdb3f65.js";import"./index.es.cba4d586.js";import{B as j}from"./Blog.89209aa2.js";function R(t){return function(){var r,e=v(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=v(this).constructor;r=Reflect.construct(e,arguments,n)}else r=e.apply(this,arguments);return x(this,r)}}function w(t){var r,e,n,a;return r=new y({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/blog/"+t[0].slug,ttr:t[0].ttr}}),n=new j({props:{blog:t[0]}}),{c:function(){u(r.$$.fragment),e=c(),u(n.$$.fragment)},l:function(t){f(r.$$.fragment,t),e=l(t),f(n.$$.fragment,t)},m:function(t,s){b(r,t,s),p(t,e,s),b(n,t,s),a=!0},p:function(t,e){var a=g(e,1)[0],s={};1&a&&(s.title=t[0].attributes.title+" | Pablo Berganza"),1&a&&(s.description=t[0].attributes.description),1&a&&(s.img=t[0].attributes.banner),1&a&&(s.created=t[0].attributes.created),1&a&&(s.url="/blog/"+t[0].slug),1&a&&(s.ttr=t[0].ttr),r.$set(s);var i={};1&a&&(i.blog=t[0]),n.$set(i)},i:function(t){a||(m(r.$$.fragment,t),m(n.$$.fragment,t),a=!0)},o:function(t){$(r.$$.fragment,t),$(n.$$.fragment,t),a=!1},d:function(t){d(r,t),t&&h(e),d(n,t)}}}function B(t){return H.apply(this,arguments)}function H(){return(H=t(r.mark(function t(e){var n,a,s;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{blog:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(t,r,e){var n=r.blog;return t.$$set=function(t){"blog"in t&&e(0,n=t.blog)},[n]}export default(function(t){e(u,o);var r=R(u);function u(t){var e;return n(this,u),e=r.call(this),a(i(e),t,P,w,s,{blog:0}),e}return u}());export{B as preload};
