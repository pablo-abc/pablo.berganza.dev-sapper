import{S as s,i as t,s as e,e as l,a,t as r,f as i,g as c,d as o,h as n,j as f,k as m,l as h,n as g,y as u,z as p,A as d,B as v,C as b,D as $,E as y,v as j,c as E,b as w,m as S,o as k,p as x,r as I,F as C,G as N,H as T,I as H,J as O,K as z}from"./client.f21294b7.js";import{l as D}from"./Head.0b03b459.js";function G(s){let t,e,j,E,w,S,k,x,I,C,N,T,H,O;return{c(){t=l("div"),e=l("img"),k=a(),x=l("h3"),I=r(s[0]),this.h()},l(l){t=i(l,"DIV",{id:!0,class:!0});var a=c(t);e=i(a,"IMG",{id:!0,src:!0,alt:!0,class:!0}),k=o(a),x=i(a,"H3",{id:!0,class:!0});var r=c(x);I=n(r,s[0]),r.forEach(f),a.forEach(f),this.h()},h(){m(e,"id","profile-pic"),e.src!==(j="img/profile-pic-placeholder.jpeg")&&m(e,"src","img/profile-pic-placeholder.jpeg"),m(e,"alt","Me"),m(e,"class","svelte-1usi5dm"),m(x,"id","profile-bubble"),m(x,"class","svelte-1usi5dm"),m(t,"id","profile-box"),m(t,"class","svelte-1usi5dm")},m(s,l){h(s,t,l),g(t,e),g(t,k),g(t,x),g(x,I),T=!0,H||(O=u(E=D.call(null,e,{src:"img/profile-pic-400.jpeg"})),H=!0)},p(s,[t]){(!T||1&t)&&p(I,s[0])},i(s){T||(d((()=>{S&&S.end(1),w||(w=v(e,b,{key:"profile-pic"})),w.start()})),d((()=>{N&&N.end(1),C||(C=v(x,b,{key:"profile-bubble"})),C.start()})),T=!0)},o(s){w&&w.invalidate(),S=$(e,y,{key:"profile-pic"}),C&&C.invalidate(),N=$(x,y,{key:"profile-bubble"}),T=!1},d(s){s&&f(t),s&&S&&S.end(),s&&N&&N.end(),H=!1,O()}}}function J(s,t,e){let{welcome:l}=t;return s.$$set=s=>{"welcome"in s&&e(0,l=s.welcome)},[l]}class M extends s{constructor(s){super(),t(this,s,J,G,e,{welcome:0})}}function B(s){let t,e,a,r;return{c(){t=l("section"),e=l("img"),this.h()},l(s){t=i(s,"SECTION",{class:!0});var l=c(t);e=i(l,"IMG",{src:!0,alt:!0,title:!0,class:!0}),l.forEach(f),this.h()},h(){e.src!==(a=s[0])&&m(e,"src",a),m(e,"alt",s[1]),m(e,"title",s[3]),m(e,"class","svelte-mf41wz"),m(t,"class",r="ability color-"+s[2]+" svelte-mf41wz")},m(s,l){h(s,t,l),g(t,e)},p(s,[l]){1&l&&e.src!==(a=s[0])&&m(e,"src",a),2&l&&m(e,"alt",s[1]),8&l&&m(e,"title",s[3]),4&l&&r!==(r="ability color-"+s[2]+" svelte-mf41wz")&&m(t,"class",r)},i:j,o:j,d(s){s&&f(t)}}}function A(s,t,e){let{src:l}=t,{alt:a}=t,{color:r}=t,{title:i}=t;return s.$$set=s=>{"src"in s&&e(0,l=s.src),"alt"in s&&e(1,a=s.alt),"color"in s&&e(2,r=s.color),"title"in s&&e(3,i=s.title)},[l,a,r,i]}class F extends s{constructor(s){super(),t(this,s,A,B,e,{src:0,alt:1,color:2,title:3})}}function K(s,t,e){const l=s.slice();return l[1]=t[e],l[3]=e,l}function P(s){let t,e;return t=new F({props:{color:(s[3]+1)%2||2,src:s[1][0],alt:s[1][1],title:s[1][1]}}),{c(){E(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,l){S(t,s,l),e=!0},p:j,i(s){e||(k(t.$$.fragment,s),e=!0)},o(s){x(t.$$.fragment,s),e=!1},d(s){I(t,s)}}}function R(s){let t,e,a=s[0],r=[];for(let t=0;t<a.length;t+=1)r[t]=P(K(s,a,t));const o=s=>x(r[s],1,1,(()=>{r[s]=null}));return{c(){t=l("section");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=i(s,"SECTION",{class:!0});var e=c(t);for(let s=0;s<r.length;s+=1)r[s].l(e);e.forEach(f),this.h()},h(){m(t,"class","box-abilities svelte-rhyfye")},m(s,l){h(s,t,l);for(let s=0;s<r.length;s+=1)r[s].m(t,null);e=!0},p(s,[e]){if(1&e){let l;for(a=s[0],l=0;l<a.length;l+=1){const i=K(s,a,l);r[l]?(r[l].p(i,e),k(r[l],1)):(r[l]=P(i),r[l].c(),k(r[l],1),r[l].m(t,null))}for(C(),l=a.length;l<r.length;l+=1)o(l);N()}},i(s){if(!e){for(let s=0;s<a.length;s+=1)k(r[s]);e=!0}},o(s){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)x(r[s]);e=!1},d(s){s&&f(t),T(r,s)}}}function V(s){return[[["https://cdn.svgporn.com/logos/javascript.svg","JavaScript"],["https://cdn.svgporn.com/logos/typescript-icon.svg","TypeScript"],["https://cdn.svgporn.com/logos/clojure.svg","Clojure"],["img/cljs-white.svg","ClojureScript"],["https://cdn.svgporn.com/logos/python.svg","Python"],["https://cdn.svgporn.com/logos/docker.svg","Docker"],["img/nestjs.svg","NestJS"],["img/react.svg","React"],["img/svelte.svg","Svelte"]]]}class q extends s{constructor(s){super(),t(this,s,V,R,e,{})}}function L(s){let t,e,u,j,C,N,T,D,G,J,B,A,F,K,P,R,V,L,Q,U,W,X=s[0].attributes.aboutme+"",Y=s[0].html+"",Z=s[0].attributes.myabilities+"";return u=new M({props:{welcome:s[0].attributes.welcome}}),V=new q({}),{c(){t=l("section"),e=l("section"),E(u.$$.fragment),j=a(),C=l("section"),N=l("h2"),T=r(X),D=a(),A=a(),F=l("section"),K=l("h2"),P=r(Z),R=a(),E(V.$$.fragment),this.h()},l(s){t=i(s,"SECTION",{class:!0});var l=c(t);e=i(l,"SECTION",{class:!0});var a=c(e);w(u.$$.fragment,a),a.forEach(f),j=o(l),C=i(l,"SECTION",{class:!0});var r=c(C);N=i(r,"H2",{class:!0});var m=c(N);T=n(m,X),m.forEach(f),D=o(r),r.forEach(f),A=o(l),F=i(l,"SECTION",{class:!0});var h=c(F);K=i(h,"H2",{class:!0});var g=c(K);P=n(g,Z),g.forEach(f),R=o(h),w(V.$$.fragment,h),h.forEach(f),l.forEach(f),this.h()},h(){m(e,"class","main-info svelte-13yfbjg"),m(N,"class","svelte-13yfbjg"),G=new O(null),m(C,"class","about-me svelte-13yfbjg"),m(K,"class","svelte-13yfbjg"),m(F,"class","abilities svelte-13yfbjg"),m(t,"class","main svelte-13yfbjg")},m(s,l){h(s,t,l),g(t,e),S(u,e,null),g(t,j),g(t,C),g(C,N),g(N,T),g(C,D),G.m(Y,C),g(t,A),g(t,F),g(F,K),g(K,P),g(F,R),S(V,F,null),W=!0},p(s,[t]){const e={};1&t&&(e.welcome=s[0].attributes.welcome),u.$set(e),(!W||1&t)&&X!==(X=s[0].attributes.aboutme+"")&&p(T,X),(!W||1&t)&&Y!==(Y=s[0].html+"")&&G.p(Y),(!W||1&t)&&Z!==(Z=s[0].attributes.myabilities+"")&&p(P,Z)},i(s){W||(k(u.$$.fragment,s),d((()=>{B&&B.end(1),J||(J=v(C,b,{key:"about-me"})),J.start()})),k(V.$$.fragment,s),d((()=>{Q&&Q.end(1),L||(L=v(F,b,{key:"abilities"})),L.start()})),d((()=>{U||(U=H(t,z,{duration:400},!0)),U.run(1)})),W=!0)},o(s){x(u.$$.fragment,s),J&&J.invalidate(),B=$(C,y,{key:"about-me"}),x(V.$$.fragment,s),L&&L.invalidate(),Q=$(F,y,{key:"abilities"}),U||(U=H(t,z,{duration:400},!1)),U.run(0),W=!1},d(s){s&&f(t),I(u),s&&B&&B.end(),I(V),s&&Q&&Q.end(),s&&U&&U.end()}}}function Q(s,t,e){let{index:l}=t;return s.$$set=s=>{"index"in s&&e(0,l=s.index)},[l]}class U extends s{constructor(s){super(),t(this,s,Q,L,e,{index:0})}}export{U as H};