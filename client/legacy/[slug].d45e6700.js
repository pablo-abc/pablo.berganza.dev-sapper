import{K as t,L as e,d as r,b as n,i as a,s,e as i,S as o,A as u,g as c,B as f,j as l,C as p,l as g,p as b,D as m,E as d,F as $,m as h,t as v,u as x}from"./client.87e29d8d.js";import{H as y}from"./Head.daef320d.js";import"./index.es.cba4d586.js";import{B as j}from"./Blog.a22a5f1c.js";function B(t){return function(){var e,r=v(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=v(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return x(this,e)}}function R(t){var e,r,n=new y({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/es/blog/"+t[0].slug,lang:"es",ttr:t[0].ttr}}),a=new j({props:{blog:t[0]}});return{c:function(){u(n.$$.fragment),e=c(),u(a.$$.fragment)},l:function(t){f(n.$$.fragment,t),e=l(t),f(a.$$.fragment,t)},m:function(t,s){p(n,t,s),g(t,e,s),p(a,t,s),r=!0},p:function(t,e){var r=b(e,1)[0],s={};1&r&&(s.title=t[0].attributes.title+" | Pablo Berganza"),1&r&&(s.description=t[0].attributes.description),1&r&&(s.img=t[0].attributes.banner),1&r&&(s.created=t[0].attributes.created),1&r&&(s.url="/es/blog/"+t[0].slug),1&r&&(s.ttr=t[0].ttr),n.$set(s);var i={};1&r&&(i.blog=t[0]),a.$set(i)},i:function(t){r||(m(n.$$.fragment,t),m(a.$$.fragment,t),r=!0)},o:function(t){d(n.$$.fragment,t),d(a.$$.fragment,t),r=!1},d:function(t){$(n,t),t&&h(e),$(a,t)}}}function w(t){return D.apply(this,arguments)}function D(){return(D=t(e.mark(function t(r){var n,a,s;return e.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params,t.next=3,this.fetch("es/blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{blog:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(t,e,r){var n=e.blog;return t.$set=function(t){"blog"in t&&r(0,n=t.blog)},[n]}export default(function(t){r(u,o);var e=B(u);function u(t){var r;return n(this,u),r=e.call(this),a(i(r),t,P,R,s,{blog:0}),r}return u}());export{w as preload};
