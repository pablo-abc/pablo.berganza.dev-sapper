import{d as t,b as n,i as r,s as c,e,S as o,f as s,g as i,v as a,h as u,w as f,j as l,x as h,m as v,k as p,l as m,o as g,y as d,p as y,z as b,r as $,t as R,u as j,A as E,B as w,C as S,D as x,E as D,F as I,G as C,H as T,I as H,J as N,K as O,L as P,M as k}from"./client.fcb551f5.js";import{l as G}from"./Head.02c1ac28.js";function M(t){return function(){var n,r=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var c=R(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return j(this,n)}}function B(t){var n,r,c,e,o,R;return{c:function(){n=s("div"),r=s("img"),c=i(),e=s("h3"),o=a(t[0]),this.h()},l:function(s){n=u(s,"DIV",{id:!0,class:!0});var i=f(n);r=u(i,"IMG",{id:!0,src:!0,alt:!0,class:!0}),c=l(i),e=u(i,"H3",{id:!0,class:!0});var a=f(e);o=h(a,t[0]),a.forEach(v),i.forEach(v),this.h()},h:function(){p(r,"id","profile-pic"),r.src!=="img/profile-pic-placeholder.jpeg"&&p(r,"src","img/profile-pic-placeholder.jpeg"),p(r,"alt","Profile picture"),p(r,"class","svelte-1usi5dm"),p(e,"id","profile-bubble"),p(e,"class","svelte-1usi5dm"),p(n,"id","profile-box"),p(n,"class","svelte-1usi5dm")},m:function(t,s,i){m(t,n,s),g(n,r),g(n,c),g(n,e),g(e,o),i&&R(),R=d(G.call(null,r,{src:"img/profile-pic-400.jpeg"}))},p:function(t,n){1&y(n,1)[0]&&b(o,t[0])},i:$,o:$,d:function(t){t&&v(n),R()}}}function J(t,n,r){var c=n.welcome;return t.$set=function(t){"welcome"in t&&r(0,c=t.welcome)},[c]}var z=function(s){t(a,o);var i=M(a);function a(t){var o;return n(this,a),o=i.call(this),r(e(o),t,J,B,c,{welcome:0}),o}return a}();function A(t){return function(){var n,r=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var c=R(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return j(this,n)}}function F(t){var n,r,c,e;return{c:function(){n=s("section"),r=s("img"),this.h()},l:function(t){n=u(t,"SECTION",{class:!0});var c=f(n);r=u(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(v),this.h()},h:function(){r.src!==(c=t[0])&&p(r,"src",c),p(r,"alt",t[1]),p(r,"class","svelte-1880ucv"),p(n,"class",e="ability color-"+t[2]+" svelte-1880ucv")},m:function(t,c){m(t,n,c),g(n,r)},p:function(t,o){var s=y(o,1)[0];1&s&&r.src!==(c=t[0])&&p(r,"src",c),2&s&&p(r,"alt",t[1]),4&s&&e!==(e="ability color-"+t[2]+" svelte-1880ucv")&&p(n,"class",e)},i:$,o:$,d:function(t){t&&v(n)}}}function K(t,n,r){var c=n.src,e=n.alt,o=n.color;return t.$set=function(t){"src"in t&&r(0,c=t.src),"alt"in t&&r(1,e=t.alt),"color"in t&&r(2,o=t.color)},[c,e,o]}var L=function(s){t(a,o);var i=A(a);function a(t){var o;return n(this,a),o=i.call(this),r(e(o),t,K,F,c,{src:0,alt:1,color:2}),o}return a}();function V(t){return function(){var n,r=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var c=R(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return j(this,n)}}function q(t,n,r){var c=t.slice();return c[1]=n[r],c[3]=r,c}function Q(t){var n,r=new L({props:{color:(t[3]+1)%2||2,src:t[1][0],alt:t[1][1]}});return{c:function(){E(r.$$.fragment)},l:function(t){w(r.$$.fragment,t)},m:function(t,c){S(r,t,c),n=!0},p:$,i:function(t){n||(x(r.$$.fragment,t),n=!0)},o:function(t){D(r.$$.fragment,t),n=!1},d:function(t){I(r,t)}}}function U(t){for(var n,r,c=t[0],e=[],o=0;o<c.length;o+=1)e[o]=Q(q(t,c,o));var i=function(t){return D(e[t],1,1,function(){e[t]=null})};return{c:function(){n=s("section");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=u(t,"SECTION",{class:!0});for(var r=f(n),c=0;c<e.length;c+=1)e[c].l(r);r.forEach(v),this.h()},h:function(){p(n,"class","box-abilities svelte-1ongo5i")},m:function(t,c){m(t,n,c);for(var o=0;o<e.length;o+=1)e[o].m(n,null);r=!0},p:function(t,r){var o=y(r,1)[0];if(1&o){var s;for(c=t[0],s=0;s<c.length;s+=1){var a=q(t,c,s);e[s]?(e[s].p(a,o),x(e[s],1)):(e[s]=Q(a),e[s].c(),x(e[s],1),e[s].m(n,null))}for(C(),s=c.length;s<e.length;s+=1)i(s);T()}},i:function(t){if(!r){for(var n=0;n<c.length;n+=1)x(e[n]);r=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)D(e[n]);r=!1},d:function(t){t&&v(n),H(e,t)}}}function W(t){return[[["https://cdn.svgporn.com/logos/javascript.svg","JavaScript"],["https://cdn.svgporn.com/logos/typescript-icon.svg","TypeScript"],["https://cdn.svgporn.com/logos/clojure.svg","Clojure"],["img/cljs-white.svg","ClojureScript"],["https://cdn.svgporn.com/logos/python.svg","Python"],["https://cdn.svgporn.com/logos/docker.svg","Docker"]]]}var X=function(s){t(a,o);var i=V(a);function a(t){var o;return n(this,a),o=i.call(this),r(e(o),t,W,U,c,{}),o}return a}();function Y(t){return function(){var n,r=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var c=R(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return j(this,n)}}function Z(t){var n,r,c,e,o,d,$,R,j,C,T,H,G,M,B,J=t[0].attributes.aboutme+"",A=t[0].html+"",F=t[0].attributes.myabilities+"",K=new z({props:{welcome:t[0].attributes.welcome}}),L=new X({});return{c:function(){n=s("section"),r=s("section"),E(K.$$.fragment),c=i(),e=s("section"),o=s("h2"),d=a(J),$=i(),j=i(),C=s("section"),T=s("h2"),H=a(F),G=i(),E(L.$$.fragment),this.h()},l:function(t){n=u(t,"SECTION",{class:!0});var s=f(n);r=u(s,"SECTION",{class:!0});var i=f(r);w(K.$$.fragment,i),i.forEach(v),c=l(s),e=u(s,"SECTION",{class:!0});var a=f(e);o=u(a,"H2",{class:!0});var p=f(o);d=h(p,J),p.forEach(v),$=l(a),a.forEach(v),j=l(s),C=u(s,"SECTION",{class:!0});var m=f(C);T=u(m,"H2",{class:!0});var g=f(T);H=h(g,F),g.forEach(v),G=l(m),w(L.$$.fragment,m),m.forEach(v),s.forEach(v),this.h()},h:function(){p(r,"class","main-info svelte-13yfbjg"),p(o,"class","svelte-13yfbjg"),R=new N(A,null),p(e,"class","about-me svelte-13yfbjg"),p(T,"class","svelte-13yfbjg"),p(C,"class","abilities svelte-13yfbjg"),p(n,"class","main svelte-13yfbjg")},m:function(t,s){m(t,n,s),g(n,r),S(K,r,null),g(n,c),g(n,e),g(e,o),g(o,d),g(e,$),R.m(e),g(n,j),g(n,C),g(C,T),g(T,H),g(C,G),S(L,C,null),B=!0},p:function(t,n){var r=y(n,1)[0],c={};1&r&&(c.welcome=t[0].attributes.welcome),K.$set(c),(!B||1&r)&&J!==(J=t[0].attributes.aboutme+"")&&b(d,J),(!B||1&r)&&A!==(A=t[0].html+"")&&R.p(A),(!B||1&r)&&F!==(F=t[0].attributes.myabilities+"")&&b(H,F)},i:function(t){B||(x(K.$$.fragment,t),x(L.$$.fragment,t),O(function(){M||(M=P(n,k,{duration:200},!0)),M.run(1)}),B=!0)},o:function(t){D(K.$$.fragment,t),D(L.$$.fragment,t),M||(M=P(n,k,{duration:200},!1)),M.run(0),B=!1},d:function(t){t&&v(n),I(K),I(L),t&&M&&M.end()}}}function _(t,n,r){var c=n.index;return t.$set=function(t){"index"in t&&r(0,c=t.index)},[c]}var tt=function(s){t(a,o);var i=Y(a);function a(t){var o;return n(this,a),o=i.call(this),r(e(o),t,_,Z,c,{index:0}),o}return a}();export{tt as H};
