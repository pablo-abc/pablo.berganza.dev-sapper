import{S as s,i as e,s as t,p as a,a as o,r,b as n,u as g,f as l,v as f,w as i,x as $,g as m}from"./client.965de6b6.js";import{H as c}from"./Head.c25a5e9d.js";import"./index.es.0e4d4ac4.js";import{B as p}from"./BlogList.c23fe2a5.js";function b(s){let e,t;const b=new c({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),u=new p({props:{blogs:s[0]}});return{c(){a(b.$$.fragment),e=o(),a(u.$$.fragment)},l(s){r(b.$$.fragment,s),e=n(s),r(u.$$.fragment,s)},m(s,a){g(b,s,a),l(s,e,a),g(u,s,a),t=!0},p(s,[e]){const t={};1&e&&(t.blogs=s[0]),u.$set(t)},i(s){t||(f(b.$$.fragment,s),f(u.$$.fragment,s),t=!0)},o(s){i(b.$$.fragment,s),i(u.$$.fragment,s),t=!1},d(s){$(b,s),s&&m(e),$(u,s)}}}function u({params:s,query:e}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,e,t){let{blogs:a}=e;return s.$set=(s=>{"blogs"in s&&t(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),e(this,s,d,b,t,{blogs:0})}}export{u as preload};
