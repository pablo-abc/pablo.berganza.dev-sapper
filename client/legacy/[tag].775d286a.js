import{_ as t,r as e,a as n,b as r,i as a,c as s,S as o,d as c,e as i,s as u,f,g as l,j as g,k as p,u as $,v as b,x as m,y as h,z as d,A as v,o as y}from"./client.b242008c.js";import{H as x}from"./Head.988ae6c4.js";import"./index.es.cba4d586.js";import{B as j}from"./BlogList.bcfa030e.js";function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function R(t){var e,n,r,a;return e=new x({props:{title:"Tag: "+t[1]+" | Pablo Berganza",description:"Publicaciones sobre "+t[1],url:"/es/blog/tags/"+t[1],lang:"es"}}),r=new j({props:{blogs:t[0],title:t[2]}}),{c:function(){f(e.$$.fragment),n=l(),f(r.$$.fragment)},l:function(t){g(e.$$.fragment,t),n=p(t),g(r.$$.fragment,t)},m:function(t,s){$(e,t,s),b(t,n,s),$(r,t,s),a=!0},p:function(t,n){var a=m(n,1)[0],s={};2&a&&(s.title="Tag: "+t[1]+" | Pablo Berganza"),2&a&&(s.description="Publicaciones sobre "+t[1]),2&a&&(s.url="/es/blog/tags/"+t[1]),e.$set(s);var o={};1&a&&(o.blogs=t[0]),4&a&&(o.title=t[2]),r.$set(o)},i:function(t){a||(h(e.$$.fragment,t),h(r.$$.fragment,t),a=!0)},o:function(t){d(e.$$.fragment,t),d(r.$$.fragment,t),a=!1},d:function(t){v(e,t),t&&y(n),v(r,t)}}}function w(t){return B.apply(this,arguments)}function B(){return(B=t(e.mark((function t(n){var r,a,s;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,t.next=3,this.fetch("es/blog/tags/".concat(r.tag,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{blogs:s,tag:r.tag});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function k(t,e,n){var r,a=e.blogs,s=e.tag;return t.$$set=function(t){"blogs"in t&&n(0,a=t.blogs),"tag"in t&&n(1,s=t.tag)},t.$$.update=function(){2&t.$$.dirty&&n(2,r=s.charAt(0).toUpperCase()+s.slice(1))},[a,s,r]}var z=function(t){n(l,o);var e,f=(e=l,function(){var t,n=c(e);if(P()){var r=c(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function l(t){var e;return r(this,l),e=f.call(this),a(s(e),t,k,R,u,{blogs:0,tag:1}),e}return l}();export default z;export{w as preload};
