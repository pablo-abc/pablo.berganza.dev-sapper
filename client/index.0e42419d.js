import{S as s,i as e,s as t,p as a,a as o,r,b as n,u as g,f as l,v as i,w as f,x as $,g as m}from"./client.732d9445.js";import{H as p}from"./Head.4e1372d2.js";import"./index.es.0e4d4ac4.js";import{B as b}from"./BlogList.ee14753d.js";function c(s){let e,t;const c=new p({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),u=new b({props:{blogs:s[0]}});return{c(){a(c.$$.fragment),e=o(),a(u.$$.fragment)},l(s){r(c.$$.fragment,s),e=n(s),r(u.$$.fragment,s)},m(s,a){g(c,s,a),l(s,e,a),g(u,s,a),t=!0},p(s,[e]){const t={};1&e&&(t.blogs=s[0]),u.$set(t)},i(s){t||(i(c.$$.fragment,s),i(u.$$.fragment,s),t=!0)},o(s){f(c.$$.fragment,s),f(u.$$.fragment,s),t=!1},d(s){$(c,s),s&&m(e),$(u,s)}}}function u({params:s,query:e}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,e,t){let{blogs:a}=e;return s.$set=(s=>{"blogs"in s&&t(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),e(this,s,d,c,t,{blogs:0})}}export{u as preload};
