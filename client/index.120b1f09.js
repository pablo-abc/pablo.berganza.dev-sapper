import{S as s,i as e,s as t,o as a,a as o,p as r,d as n,q as g,j as l,r as i,u as $,v as m,g as c}from"./client.e8b9dac7.js";import{H as f}from"./Head.603d7d8d.js";import"./index.es.0e4d4ac4.js";import{B as p}from"./BlogList.4e4d8c8c.js";function d(s){let e,t;const d=new f({props:{title:"Blog | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/blog",lang:"es"}}),b=new p({props:{blogs:s[0]}});return{c(){a(d.$$.fragment),e=o(),a(b.$$.fragment)},l(s){r(d.$$.fragment,s),e=n(s),r(b.$$.fragment,s)},m(s,a){g(d,s,a),l(s,e,a),g(b,s,a),t=!0},p(s,[e]){const t={};1&e&&(t.blogs=s[0]),b.$set(t)},i(s){t||(i(d.$$.fragment,s),i(b.$$.fragment,s),t=!0)},o(s){$(d.$$.fragment,s),$(b.$$.fragment,s),t=!1},d(s){m(d,s),s&&c(e),m(b,s)}}}function b({params:s,query:e}){return this.fetch("es/blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function u(s,e,t){let{blogs:a}=e;return s.$set=(s=>{"blogs"in s&&t(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),e(this,s,u,d,t,{blogs:0})}}export{b as preload};
