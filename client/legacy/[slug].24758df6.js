import{_ as t,r,a as e,b as n,i as a,c as s,S as i,d as o,e as c,s as u,f,g as l,j as g,k as p,u as b,v as m,x as d,y as $,z as h,A as v,o as x}from"./client.cc30cb4f.js";import{H as y}from"./Head.444a5c03.js";import"./index.es.cba4d586.js";import{B as j}from"./Blog.dded4b3b.js";function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){var r,e,n,a;return r=new y({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/es/blog/"+t[0].slug,lang:"es",ttr:t[0].ttr}}),n=new j({props:{blog:t[0]}}),{c:function(){f(r.$$.fragment),e=l(),f(n.$$.fragment)},l:function(t){g(r.$$.fragment,t),e=p(t),g(n.$$.fragment,t)},m:function(t,s){b(r,t,s),m(t,e,s),b(n,t,s),a=!0},p:function(t,e){var a=d(e,1)[0],s={};1&a&&(s.title=t[0].attributes.title+" | Pablo Berganza"),1&a&&(s.description=t[0].attributes.description),1&a&&(s.img=t[0].attributes.banner),1&a&&(s.created=t[0].attributes.created),1&a&&(s.url="/es/blog/"+t[0].slug),1&a&&(s.ttr=t[0].ttr),r.$set(s);var i={};1&a&&(i.blog=t[0]),n.$set(i)},i:function(t){a||($(r.$$.fragment,t),$(n.$$.fragment,t),a=!0)},o:function(t){h(r.$$.fragment,t),h(n.$$.fragment,t),a=!1},d:function(t){v(r,t),t&&x(e),v(n,t)}}}function B(t){return k.apply(this,arguments)}function k(){return(k=t(r.mark((function t(e){var n,a,s;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,this.fetch("es/blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{blog:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(t,r,e){var n=r.blog;return t.$$set=function(t){"blog"in t&&e(0,n=t.blog)},[n]}var P=function(t){e(l,i);var r,f=(r=l,function(){var t,e=o(r);if(R()){var n=o(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function l(t){var r;return n(this,l),r=f.call(this),a(s(r),t,z,w,u,{blog:0}),r}return l}();export default P;export{B as preload};
