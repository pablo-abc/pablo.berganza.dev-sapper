import{P as t,Q as r,f as e,e as n,g as s,s as a,h as i,S as o,D as c,k as u,E as f,m as l,F as p,o as g,u as b,G as m,H as $,I as d,p as h,w as v,x}from"./client.78cab249.js";import{H as y}from"./Head.b2905911.js";import"./index.es.3c05672c.js";import{B as j}from"./Blog.8ecf257c.js";function w(t){return function(){var r,e=v(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=v(this).constructor;r=Reflect.construct(e,arguments,n)}else r=e.apply(this,arguments);return x(this,r)}}function R(t){var r,e,n=new y({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/es/blog/"+t[0].slug,lang:"es",ttr:t[0].ttr}}),s=new j({props:{blog:t[0]}});return{c:function(){c(n.$$.fragment),r=u(),c(s.$$.fragment)},l:function(t){f(n.$$.fragment,t),r=l(t),f(s.$$.fragment,t)},m:function(t,a){p(n,t,a),g(t,r,a),p(s,t,a),e=!0},p:function(t,r){var e=b(r,1)[0],a={};1&e&&(a.title=t[0].attributes.title+" | Pablo Berganza"),1&e&&(a.description=t[0].attributes.description),1&e&&(a.img=t[0].attributes.banner),1&e&&(a.created=t[0].attributes.created),1&e&&(a.url="/es/blog/"+t[0].slug),1&e&&(a.ttr=t[0].ttr),n.$set(a);var i={};1&e&&(i.blog=t[0]),s.$set(i)},i:function(t){e||(m(n.$$.fragment,t),m(s.$$.fragment,t),e=!0)},o:function(t){$(n.$$.fragment,t),$(s.$$.fragment,t),e=!1},d:function(t){d(n,t),t&&h(r),d(s,t)}}}function B(t){return P.apply(this,arguments)}function P(){return(P=t(r.mark(function t(e){var n,s,a;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,this.fetch("es/blog/".concat(n.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{blog:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function k(t,r,e){var n=r.blog;return t.$set=function(t){"blog"in t&&e(0,n=t.blog)},[n]}export default(function(t){e(c,o);var r=w(c);function c(t){var e;return n(this,c),e=r.call(this),s(i(e),t,k,R,a,{blog:0}),e}return c}());export{B as preload};
