import{S as s,i as t,s as a,x as e,a as o,y as n,b as r,z as g,f as l,A as f,B as i,C as $,g as m}from"./client.4a0af43a.js";import{H as b}from"./Head.28282297.js";import"./index.es.0e4d4ac4.js";import{B as c}from"./BlogList.26be6fca.js";function p(s){let t,a;const p=new b({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),u=new c({props:{blogs:s[0]}});return{c(){e(p.$$.fragment),t=o(),e(u.$$.fragment)},l(s){n(p.$$.fragment,s),t=r(s),n(u.$$.fragment,s)},m(s,e){g(p,s,e),l(s,t,e),g(u,s,e),a=!0},p(s,[t]){const a={};1&t&&(a.blogs=s[0]),u.$set(a)},i(s){a||(f(p.$$.fragment,s),f(u.$$.fragment,s),a=!0)},o(s){i(p.$$.fragment,s),i(u.$$.fragment,s),a=!1},d(s){$(p,s),s&&m(t),$(u,s)}}}function u(){return this.fetch("blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,t,a){let{blogs:e}=t;return s.$set=(s=>{"blogs"in s&&a(0,e=s.blogs)}),[e]}export default class extends s{constructor(s){super(),t(this,s,d,p,a,{blogs:0})}}export{u as preload};
