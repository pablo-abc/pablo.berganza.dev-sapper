import{R as t,T as n,d as e,b as r,i as a,s,e as i,S as o,F as f,g as c,G as u,j as p,H as l,l as d,p as m,I as $,J as x,K as g,m as h,t as v,u as y}from"./client.1d097ec7.js";import{H as j}from"./Head.f5f594d6.js";import{H}from"./Home.f3dff516.js";function R(t){return function(){var n,e=v(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=v(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return y(this,n)}}function b(t){var n,e,r=new j({props:{title:"Home | Pablo Berganza",description:"Personal site and blog for Pablo Berganza"}}),a=new H({props:{index:t[0]}});return{c:function(){f(r.$$.fragment),n=c(),f(a.$$.fragment)},l:function(t){u(r.$$.fragment,t),n=p(t),u(a.$$.fragment,t)},m:function(t,s){l(r,t,s),d(t,n,s),l(a,t,s),e=!0},p:function(t,n){var e={};1&m(n,1)[0]&&(e.index=t[0]),a.$set(e)},i:function(t){e||($(r.$$.fragment,t),$(a.$$.fragment,t),e=!0)},o:function(t){x(r.$$.fragment,t),x(a.$$.fragment,t),e=!1},d:function(t){g(r,t),t&&h(n),g(a,t)}}}function w(){return P.apply(this,arguments)}function P(){return(P=t(n.mark(function t(){var e,r;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("index.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",{index:r});case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function z(t,n,e){var r=n.index;return t.$set=function(t){"index"in t&&e(0,r=t.index)},[r]}export default(function(t){e(f,o);var n=R(f);function f(t){var e;return r(this,f),e=n.call(this),a(i(e),t,z,b,s,{index:0}),e}return f}());export{w as preload};
