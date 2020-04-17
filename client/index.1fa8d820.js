import{S as s,i as t,s as e,e as a,c,a as n,d as o,b as r,f as l,g as i,n as f,h,j as m,m as u,t as g,k as p,l as d,o as v,p as $,q as b,r as x,u as E,v as w,w as j,H as y,x as S}from"./client.45421c7e.js";import{H as I}from"./Head.419e04ba.js";function C(s){let t,e,h,m;return{c(){t=a("section"),e=a("img"),this.h()},l(s){t=c(s,"SECTION",{class:!0});var a=n(t);e=c(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(o),this.h()},h(){e.src!==(h=s[0])&&r(e,"src",h),r(e,"alt",s[1]),r(e,"class","svelte-weboyh"),r(t,"class",m="ability color-"+s[2]+" svelte-weboyh")},m(s,a){l(s,t,a),i(t,e)},p(s,[a]){1&a&&e.src!==(h=s[0])&&r(e,"src",h),2&a&&r(e,"alt",s[1]),4&a&&m!==(m="ability color-"+s[2]+" svelte-weboyh")&&r(t,"class",m)},i:f,o:f,d(s){s&&o(t)}}}function H(s,t,e){let{src:a}=t,{alt:c}=t,{color:n}=t;return s.$set=(s=>{"src"in s&&e(0,a=s.src),"alt"in s&&e(1,c=s.alt),"color"in s&&e(2,n=s.color)}),[a,c,n]}class T extends s{constructor(s){super(),t(this,s,H,C,e,{src:0,alt:1,color:2})}}function N(s,t,e){const a=s.slice();return a[1]=t[e],a[3]=e,a}function O(s){let t;const e=new T({props:{color:(s[3]+1)%2||2,src:s[1][0],alt:s[1][1]}});return{c(){h(e.$$.fragment)},l(s){m(e.$$.fragment,s)},m(s,a){u(e,s,a),t=!0},p:f,i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){d(e,s)}}}function P(s){let t,e,i=s[0],f=[];for(let t=0;t<i.length;t+=1)f[t]=O(N(s,i,t));const h=s=>p(f[s],1,1,()=>{f[s]=null});return{c(){t=a("section");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){t=c(s,"SECTION",{class:!0});var e=n(t);for(let s=0;s<f.length;s+=1)f[s].l(e);e.forEach(o),this.h()},h(){r(t,"class","box-abilities svelte-1a7fbs4")},m(s,a){l(s,t,a);for(let s=0;s<f.length;s+=1)f[s].m(t,null);e=!0},p(s,[e]){if(1&e){let a;for(i=s[0],a=0;a<i.length;a+=1){const c=N(s,i,a);f[a]?(f[a].p(c,e),g(f[a],1)):(f[a]=O(c),f[a].c(),g(f[a],1),f[a].m(t,null))}for(v(),a=i.length;a<f.length;a+=1)h(a);$()}},i(s){if(!e){for(let s=0;s<i.length;s+=1)g(f[s]);e=!0}},o(s){f=f.filter(Boolean);for(let s=0;s<f.length;s+=1)p(f[s]);e=!1},d(s){s&&o(t),b(f,s)}}}function k(s){return[[["https://cdn.svgporn.com/logos/javascript.svg","JavaScript"],["https://cdn.svgporn.com/logos/typescript-icon.svg","TypeScript"],["https://cdn.svgporn.com/logos/clojure.svg","Clojure"],["img/cljs-white.svg","ClojureScript"],["https://cdn.svgporn.com/logos/python.svg","Python"],["https://cdn.svgporn.com/logos/docker.svg","Docker"]]]}class B extends s{constructor(s){super(),t(this,s,k,P,e,{})}}function z(s){let t,e,f,v,$,b,I,C,H,T,N,O,P,k,z,D,G,M,q,J,V=s[0].metadata.welcome+"",A=s[0].metadata.aboutme+"",F=s[0].html+"",K=s[0].metadata.myabilities+"";const L=new B({});return{c(){t=a("section"),e=a("section"),f=a("div"),v=a("img"),b=x(),I=a("h3"),C=E(V),H=x(),T=a("section"),N=a("h2"),O=E(A),P=x(),z=x(),D=a("section"),G=a("h2"),M=E(K),q=x(),h(L.$$.fragment),this.h()},l(s){t=c(s,"SECTION",{class:!0});var a=n(t);e=c(a,"SECTION",{class:!0});var r=n(e);f=c(r,"DIV",{id:!0,class:!0});var l=n(f);v=c(l,"IMG",{id:!0,src:!0,alt:!0,class:!0}),b=w(l),I=c(l,"H3",{id:!0,class:!0});var i=n(I);C=j(i,V),i.forEach(o),l.forEach(o),r.forEach(o),H=w(a),T=c(a,"SECTION",{class:!0});var h=n(T);N=c(h,"H2",{class:!0});var u=n(N);O=j(u,A),u.forEach(o),P=w(h),h.forEach(o),z=w(a),D=c(a,"SECTION",{class:!0});var g=n(D);G=c(g,"H2",{class:!0});var p=n(G);M=j(p,K),p.forEach(o),q=w(g),m(L.$$.fragment,g),g.forEach(o),a.forEach(o),this.h()},h(){r(v,"id","profile-pic"),v.src!==($="img/profile-pic.jpeg")&&r(v,"src","img/profile-pic.jpeg"),r(v,"alt","Profile picture"),r(v,"class","svelte-1c0cnu"),r(I,"id","profile-bubble"),r(I,"class","svelte-1c0cnu"),r(f,"id","profile-box"),r(f,"class","svelte-1c0cnu"),r(e,"class","main-info svelte-1c0cnu"),r(N,"class","svelte-1c0cnu"),k=new y(F,null),r(T,"class","about-me svelte-1c0cnu"),r(G,"class","svelte-1c0cnu"),r(D,"class","abilities svelte-1c0cnu"),r(t,"class","main")},m(s,a){l(s,t,a),i(t,e),i(e,f),i(f,v),i(f,b),i(f,I),i(I,C),i(t,H),i(t,T),i(T,N),i(N,O),i(T,P),k.m(T),i(t,z),i(t,D),i(D,G),i(G,M),i(D,q),u(L,D,null),J=!0},p(s,[t]){(!J||1&t)&&V!==(V=s[0].metadata.welcome+"")&&S(C,V),(!J||1&t)&&A!==(A=s[0].metadata.aboutme+"")&&S(O,A),(!J||1&t)&&F!==(F=s[0].html+"")&&k.p(F),(!J||1&t)&&K!==(K=s[0].metadata.myabilities+"")&&S(M,K)},i(s){J||(g(L.$$.fragment,s),J=!0)},o(s){p(L.$$.fragment,s),J=!1},d(s){s&&o(t),d(L)}}}function D(s,t,e){let{index:a}=t;return s.$set=(s=>{"index"in s&&e(0,a=s.index)}),[a]}class G extends s{constructor(s){super(),t(this,s,D,z,e,{index:0})}}function M(s){let t,e;const a=new I({props:{title:"Home | Pablo Berganza",description:"Personal site and blog for Pablo Berganza"}}),c=new G({props:{index:s[0]}});return{c(){h(a.$$.fragment),t=x(),h(c.$$.fragment)},l(s){m(a.$$.fragment,s),t=w(s),m(c.$$.fragment,s)},m(s,n){u(a,s,n),l(s,t,n),u(c,s,n),e=!0},p(s,[t]){const e={};1&t&&(e.index=s[0]),c.$set(e)},i(s){e||(g(a.$$.fragment,s),g(c.$$.fragment,s),e=!0)},o(s){p(a.$$.fragment,s),p(c.$$.fragment,s),e=!1},d(s){d(a,s),s&&o(t),d(c,s)}}}async function q(){const s=await this.fetch("index.json");return{index:await s.json()}}function J(s,t,e){let{index:a}=t;return s.$set=(s=>{"index"in s&&e(0,a=s.index)}),[a]}export default class extends s{constructor(s){super(),t(this,s,J,M,e,{index:0})}}export{q as preload};
