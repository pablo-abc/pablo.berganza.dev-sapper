import{S as s,i as e,s as t,e as l,a,t as c,c as o,k as r,b as n,l as i,g as h,d as m,f,j as p,m as g,o as u,n as d,p as v,r as $,u as b,v as w,w as E,x,y,z as j,A as k,H as S}from"./client.dd5980e4.js";import{l as I}from"./Head.00396e25.js";function C(s){let e,t,v,$,b,w,E,x;return{c(){e=l("div"),t=l("img"),b=a(),w=l("h3"),E=c(s[0]),this.h()},l(l){e=o(l,"DIV",{id:!0,class:!0});var a=r(e);t=o(a,"IMG",{id:!0,src:!0,alt:!0,class:!0}),b=n(a),w=o(a,"H3",{id:!0,class:!0});var c=r(w);E=i(c,s[0]),c.forEach(h),a.forEach(h),this.h()},h(){m(t,"id","profile-pic"),t.src!==(v="img/profile-pic-placeholder.jpeg")&&m(t,"src","img/profile-pic-placeholder.jpeg"),m(t,"alt","Profile picture"),m(t,"class","svelte-1eakcf3"),m(w,"id","profile-bubble"),m(w,"class","svelte-1eakcf3"),m(e,"id","profile-box"),m(e,"class","svelte-1eakcf3")},m(s,l,a){f(s,e,l),p(e,t),p(e,b),p(e,w),p(w,E),a&&x(),x=g($=I.call(null,t,{src:"img/profile-pic-400.jpeg"}))},p(s,[e]){1&e&&u(E,s[0])},i:d,o:d,d(s){s&&h(e),x()}}}function T(s,e,t){let{welcome:l}=e;return s.$set=(s=>{"welcome"in s&&t(0,l=s.welcome)}),[l]}class H extends s{constructor(s){super(),e(this,s,T,C,t,{welcome:0})}}function N(s){let e,t,a,c;return{c(){e=l("section"),t=l("img"),this.h()},l(s){e=o(s,"SECTION",{class:!0});var l=r(e);t=o(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),this.h()},h(){t.src!==(a=s[0])&&m(t,"src",a),m(t,"alt",s[1]),m(t,"class","svelte-weboyh"),m(e,"class",c="ability color-"+s[2]+" svelte-weboyh")},m(s,l){f(s,e,l),p(e,t)},p(s,[l]){1&l&&t.src!==(a=s[0])&&m(t,"src",a),2&l&&m(t,"alt",s[1]),4&l&&c!==(c="ability color-"+s[2]+" svelte-weboyh")&&m(e,"class",c)},i:d,o:d,d(s){s&&h(e)}}}function O(s,e,t){let{src:l}=e,{alt:a}=e,{color:c}=e;return s.$set=(s=>{"src"in s&&t(0,l=s.src),"alt"in s&&t(1,a=s.alt),"color"in s&&t(2,c=s.color)}),[l,a,c]}class D extends s{constructor(s){super(),e(this,s,O,N,t,{src:0,alt:1,color:2})}}function G(s,e,t){const l=s.slice();return l[1]=e[t],l[3]=t,l}function M(s){let e;const t=new D({props:{color:(s[3]+1)%2||2,src:s[1][0],alt:s[1][1]}});return{c(){v(t.$$.fragment)},l(s){$(t.$$.fragment,s)},m(s,l){b(t,s,l),e=!0},p:d,i(s){e||(w(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function P(s){let e,t,a=s[0],c=[];for(let e=0;e<a.length;e+=1)c[e]=M(G(s,a,e));const n=s=>E(c[s],1,1,()=>{c[s]=null});return{c(){e=l("section");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=o(s,"SECTION",{class:!0});var t=r(e);for(let s=0;s<c.length;s+=1)c[s].l(t);t.forEach(h),this.h()},h(){m(e,"class","box-abilities svelte-1a7fbs4")},m(s,l){f(s,e,l);for(let s=0;s<c.length;s+=1)c[s].m(e,null);t=!0},p(s,[t]){if(1&t){let l;for(a=s[0],l=0;l<a.length;l+=1){const o=G(s,a,l);c[l]?(c[l].p(o,t),w(c[l],1)):(c[l]=M(o),c[l].c(),w(c[l],1),c[l].m(e,null))}for(y(),l=a.length;l<c.length;l+=1)n(l);j()}},i(s){if(!t){for(let s=0;s<a.length;s+=1)w(c[s]);t=!0}},o(s){c=c.filter(Boolean);for(let s=0;s<c.length;s+=1)E(c[s]);t=!1},d(s){s&&h(e),k(c,s)}}}function z(s){return[[["https://cdn.svgporn.com/logos/javascript.svg","JavaScript"],["https://cdn.svgporn.com/logos/typescript-icon.svg","TypeScript"],["https://cdn.svgporn.com/logos/clojure.svg","Clojure"],["img/cljs-white.svg","ClojureScript"],["https://cdn.svgporn.com/logos/python.svg","Python"],["https://cdn.svgporn.com/logos/docker.svg","Docker"]]]}class A extends s{constructor(s){super(),e(this,s,z,P,t,{})}}function B(s){let e,t,g,d,y,j,k,I,C,T,N,O,D,G,M=s[0].metadata.aboutme+"",P=s[0].html+"",z=s[0].metadata.myabilities+"";const B=new H({props:{welcome:s[0].metadata.welcome}}),J=new A({});return{c(){e=l("section"),t=l("section"),v(B.$$.fragment),g=a(),d=l("section"),y=l("h2"),j=c(M),k=a(),C=a(),T=l("section"),N=l("h2"),O=c(z),D=a(),v(J.$$.fragment),this.h()},l(s){e=o(s,"SECTION",{class:!0});var l=r(e);t=o(l,"SECTION",{class:!0});var a=r(t);$(B.$$.fragment,a),a.forEach(h),g=n(l),d=o(l,"SECTION",{class:!0});var c=r(d);y=o(c,"H2",{class:!0});var m=r(y);j=i(m,M),m.forEach(h),k=n(c),c.forEach(h),C=n(l),T=o(l,"SECTION",{class:!0});var f=r(T);N=o(f,"H2",{class:!0});var p=r(N);O=i(p,z),p.forEach(h),D=n(f),$(J.$$.fragment,f),f.forEach(h),l.forEach(h),this.h()},h(){m(t,"class","main-info svelte-12gksh5"),m(y,"class","svelte-12gksh5"),I=new S(P,null),m(d,"class","about-me svelte-12gksh5"),m(N,"class","svelte-12gksh5"),m(T,"class","abilities svelte-12gksh5"),m(e,"class","main")},m(s,l){f(s,e,l),p(e,t),b(B,t,null),p(e,g),p(e,d),p(d,y),p(y,j),p(d,k),I.m(d),p(e,C),p(e,T),p(T,N),p(N,O),p(T,D),b(J,T,null),G=!0},p(s,[e]){const t={};1&e&&(t.welcome=s[0].metadata.welcome),B.$set(t),(!G||1&e)&&M!==(M=s[0].metadata.aboutme+"")&&u(j,M),(!G||1&e)&&P!==(P=s[0].html+"")&&I.p(P),(!G||1&e)&&z!==(z=s[0].metadata.myabilities+"")&&u(O,z)},i(s){G||(w(B.$$.fragment,s),w(J.$$.fragment,s),G=!0)},o(s){E(B.$$.fragment,s),E(J.$$.fragment,s),G=!1},d(s){s&&h(e),x(B),x(J)}}}function J(s,e,t){let{index:l}=e;return s.$set=(s=>{"index"in s&&t(0,l=s.index)}),[l]}class V extends s{constructor(s){super(),e(this,s,J,B,t,{index:0})}}export{V as H};
