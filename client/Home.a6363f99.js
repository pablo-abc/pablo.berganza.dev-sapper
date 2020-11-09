import{S as s,i as t,s as e,e as l,a,t as r,c as i,k as c,b as o,l as n,g as f,d as m,f as u,j as g,m as h,o as p,p as d,r as v,u as b,v as $,w as y,n as j,x as w,y as E,z as x,A as S,B as k,C as I,D as C,E as N,F as T,H,G as O,I as z}from"./client.4a0af43a.js";import{l as D}from"./Head.28282297.js";function G(s){let t,e,j,w,E,x,S,k,I,C,N,T,H;return{c(){t=l("div"),e=l("img"),S=a(),k=l("h3"),I=r(s[0]),this.h()},l(l){t=i(l,"DIV",{id:!0,class:!0});var a=c(t);e=i(a,"IMG",{id:!0,src:!0,alt:!0,class:!0}),S=o(a),k=i(a,"H3",{id:!0,class:!0});var r=c(k);I=n(r,s[0]),r.forEach(f),a.forEach(f),this.h()},h(){m(e,"id","profile-pic"),e.src!==(j="img/profile-pic-placeholder.jpeg")&&m(e,"src","img/profile-pic-placeholder.jpeg"),m(e,"alt","Profile picture"),m(e,"class","svelte-1usi5dm"),m(k,"id","profile-bubble"),m(k,"class","svelte-1usi5dm"),m(t,"id","profile-box"),m(t,"class","svelte-1usi5dm")},m(s,l,a){u(s,t,l),g(t,e),g(t,S),g(t,k),g(k,I),T=!0,a&&H(),H=h(w=D.call(null,e,{src:"img/profile-pic-400.jpeg"}))},p(s,[t]){(!T||1&t)&&p(I,s[0])},i(s){T||(d(()=>{x&&x.end(1),E||(E=v(e,b,{key:"profile-pic"})),E.start()}),d(()=>{N&&N.end(1),C||(C=v(k,b,{key:"profile-bubble"})),C.start()}),T=!0)},o(s){E&&E.invalidate(),x=$(e,y,{key:"profile-pic"}),C&&C.invalidate(),N=$(k,y,{key:"profile-bubble"}),T=!1},d(s){s&&f(t),s&&x&&x.end(),s&&N&&N.end(),H()}}}function B(s,t,e){let{welcome:l}=t;return s.$set=(s=>{"welcome"in s&&e(0,l=s.welcome)}),[l]}class J extends s{constructor(s){super(),t(this,s,B,G,e,{welcome:0})}}function M(s){let t,e,a,r;return{c(){t=l("section"),e=l("img"),this.h()},l(s){t=i(s,"SECTION",{class:!0});var l=c(t);e=i(l,"IMG",{src:!0,alt:!0,title:!0,class:!0}),l.forEach(f),this.h()},h(){e.src!==(a=s[0])&&m(e,"src",a),m(e,"alt",s[1]),m(e,"title",s[3]),m(e,"class","svelte-mf41wz"),m(t,"class",r="ability color-"+s[2]+" svelte-mf41wz")},m(s,l){u(s,t,l),g(t,e)},p(s,[l]){1&l&&e.src!==(a=s[0])&&m(e,"src",a),2&l&&m(e,"alt",s[1]),8&l&&m(e,"title",s[3]),4&l&&r!==(r="ability color-"+s[2]+" svelte-mf41wz")&&m(t,"class",r)},i:j,o:j,d(s){s&&f(t)}}}function P(s,t,e){let{src:l}=t,{alt:a}=t,{color:r}=t,{title:i}=t;return s.$set=(s=>{"src"in s&&e(0,l=s.src),"alt"in s&&e(1,a=s.alt),"color"in s&&e(2,r=s.color),"title"in s&&e(3,i=s.title)}),[l,a,r,i]}class A extends s{constructor(s){super(),t(this,s,P,M,e,{src:0,alt:1,color:2,title:3})}}function F(s,t,e){const l=s.slice();return l[1]=t[e],l[3]=e,l}function R(s){let t;const e=new A({props:{color:(s[3]+1)%2||2,src:s[1][0],alt:s[1][1],title:s[1][1]}});return{c(){w(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,l){x(e,s,l),t=!0},p:j,i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function V(s){let t,e,a=s[0],r=[];for(let t=0;t<a.length;t+=1)r[t]=R(F(s,a,t));const o=s=>k(r[s],1,1,()=>{r[s]=null});return{c(){t=l("section");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=i(s,"SECTION",{class:!0});var e=c(t);for(let s=0;s<r.length;s+=1)r[s].l(e);e.forEach(f),this.h()},h(){m(t,"class","box-abilities svelte-rhyfye")},m(s,l){u(s,t,l);for(let s=0;s<r.length;s+=1)r[s].m(t,null);e=!0},p(s,[e]){if(1&e){let l;for(a=s[0],l=0;l<a.length;l+=1){const i=F(s,a,l);r[l]?(r[l].p(i,e),S(r[l],1)):(r[l]=R(i),r[l].c(),S(r[l],1),r[l].m(t,null))}for(C(),l=a.length;l<r.length;l+=1)o(l);N()}},i(s){if(!e){for(let s=0;s<a.length;s+=1)S(r[s]);e=!0}},o(s){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)k(r[s]);e=!1},d(s){s&&f(t),T(r,s)}}}function q(s){return[[["https://cdn.svgporn.com/logos/javascript.svg","JavaScript"],["https://cdn.svgporn.com/logos/typescript-icon.svg","TypeScript"],["https://cdn.svgporn.com/logos/clojure.svg","Clojure"],["img/cljs-white.svg","ClojureScript"],["https://cdn.svgporn.com/logos/python.svg","Python"],["https://cdn.svgporn.com/logos/docker.svg","Docker"],["img/nestjs.svg","NestJS"],["img/react.svg","React"],["img/svelte.svg","Svelte"]]]}class K extends s{constructor(s){super(),t(this,s,q,V,e,{})}}function L(s){let t,e,h,j,C,N,T,D,G,B,M,P,A,F,R,V,q,L,Q,U=s[0].attributes.aboutme+"",W=s[0].html+"",X=s[0].attributes.myabilities+"";const Y=new J({props:{welcome:s[0].attributes.welcome}}),Z=new K({});return{c(){t=l("section"),e=l("section"),w(Y.$$.fragment),h=a(),j=l("section"),C=l("h2"),N=r(U),T=a(),M=a(),P=l("section"),A=l("h2"),F=r(X),R=a(),w(Z.$$.fragment),this.h()},l(s){t=i(s,"SECTION",{class:!0});var l=c(t);e=i(l,"SECTION",{class:!0});var a=c(e);E(Y.$$.fragment,a),a.forEach(f),h=o(l),j=i(l,"SECTION",{class:!0});var r=c(j);C=i(r,"H2",{class:!0});var m=c(C);N=n(m,U),m.forEach(f),T=o(r),r.forEach(f),M=o(l),P=i(l,"SECTION",{class:!0});var u=c(P);A=i(u,"H2",{class:!0});var g=c(A);F=n(g,X),g.forEach(f),R=o(u),E(Z.$$.fragment,u),u.forEach(f),l.forEach(f),this.h()},h(){m(e,"class","main-info svelte-13yfbjg"),m(C,"class","svelte-13yfbjg"),D=new H(W,null),m(j,"class","about-me svelte-13yfbjg"),m(A,"class","svelte-13yfbjg"),m(P,"class","abilities svelte-13yfbjg"),m(t,"class","main svelte-13yfbjg")},m(s,l){u(s,t,l),g(t,e),x(Y,e,null),g(t,h),g(t,j),g(j,C),g(C,N),g(j,T),D.m(j),g(t,M),g(t,P),g(P,A),g(A,F),g(P,R),x(Z,P,null),Q=!0},p(s,[t]){const e={};1&t&&(e.welcome=s[0].attributes.welcome),Y.$set(e),(!Q||1&t)&&U!==(U=s[0].attributes.aboutme+"")&&p(N,U),(!Q||1&t)&&W!==(W=s[0].html+"")&&D.p(W),(!Q||1&t)&&X!==(X=s[0].attributes.myabilities+"")&&p(F,X)},i(s){Q||(S(Y.$$.fragment,s),d(()=>{B&&B.end(1),G||(G=v(j,b,{key:"about-me"})),G.start()}),S(Z.$$.fragment,s),d(()=>{q&&q.end(1),V||(V=v(P,b,{key:"abilities"})),V.start()}),d(()=>{L||(L=O(t,z,{duration:400},!0)),L.run(1)}),Q=!0)},o(s){k(Y.$$.fragment,s),G&&G.invalidate(),B=$(j,y,{key:"about-me"}),k(Z.$$.fragment,s),V&&V.invalidate(),q=$(P,y,{key:"abilities"}),L||(L=O(t,z,{duration:400},!1)),L.run(0),Q=!1},d(s){s&&f(t),I(Y),s&&B&&B.end(),I(Z),s&&q&&q.end(),s&&L&&L.end()}}}function Q(s,t,e){let{index:l}=t;return s.$set=(s=>{"index"in s&&e(0,l=s.index)}),[l]}class U extends s{constructor(s){super(),t(this,s,Q,L,e,{index:0})}}export{U as H};
