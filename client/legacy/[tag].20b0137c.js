import{_ as t,r as n,a as e,b as r,i as a,c as s,S as o,d as c,e as i,s as u,f,g as l,h as g,j as p,m as $,k as b,l as m,t as h,n as d,o as v,p as y}from"./client.cf15fd68.js";import{H as x}from"./Head.363a47ea.js";import"./index.es.cba4d586.js";import{B as j}from"./BlogList.4c183b17.js";function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function R(t){var n,e,r,a;return n=new x({props:{title:"Tag: "+t[1]+" | Pablo Berganza",description:"Publicaciones sobre "+t[1],url:"/es/blog/tags/"+t[1],lang:"es"}}),r=new j({props:{blogs:t[0],title:t[2]}}),{c:function(){f(n.$$.fragment),e=l(),f(r.$$.fragment)},l:function(t){g(n.$$.fragment,t),e=p(t),g(r.$$.fragment,t)},m:function(t,s){$(n,t,s),b(t,e,s),$(r,t,s),a=!0},p:function(t,e){var a=m(e,1)[0],s={};2&a&&(s.title="Tag: "+t[1]+" | Pablo Berganza"),2&a&&(s.description="Publicaciones sobre "+t[1]),2&a&&(s.url="/es/blog/tags/"+t[1]),n.$set(s);var o={};1&a&&(o.blogs=t[0]),4&a&&(o.title=t[2]),r.$set(o)},i:function(t){a||(h(n.$$.fragment,t),h(r.$$.fragment,t),a=!0)},o:function(t){d(n.$$.fragment,t),d(r.$$.fragment,t),a=!1},d:function(t){v(n,t),t&&y(e),v(r,t)}}}function w(t){return B.apply(this,arguments)}function B(){return(B=t(n.mark((function t(e){var r,a,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("es/blog/tags/".concat(r.tag,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{blogs:s,tag:r.tag});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function k(t,n,e){var r,a=n.blogs,s=n.tag;return t.$$set=function(t){"blogs"in t&&e(0,a=t.blogs),"tag"in t&&e(1,s=t.tag)},t.$$.update=function(){2&t.$$.dirty&&e(2,r=s.charAt(0).toUpperCase()+s.slice(1))},[a,s,r]}var z=function(t){e(l,o);var n,f=(n=l,function(){var t,e=c(n);if(P()){var r=c(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return i(this,t)});function l(t){var n;return r(this,l),n=f.call(this),a(s(n),t,k,R,u,{blogs:0,tag:1}),n}return l}();export default z;export{w as preload};
