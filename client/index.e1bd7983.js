import{S as s,i as e,s as t,o as a,a as o,p as n,d as r,q as g,j as l,r as i,u as $,v as f,g as m}from"./client.4b42215c.js";import{H as p}from"./Head.a9312701.js";import"./index.es.0e4d4ac4.js";import{B as b}from"./BlogList.872fe3bd.js";function c(s){let e,t;const c=new p({props:{title:"Blog | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/blog",lang:"es"}}),u=new b({props:{blogs:s[0]}});return{c(){a(c.$$.fragment),e=o(),a(u.$$.fragment)},l(s){n(c.$$.fragment,s),e=r(s),n(u.$$.fragment,s)},m(s,a){g(c,s,a),l(s,e,a),g(u,s,a),t=!0},p(s,[e]){const t={};1&e&&(t.blogs=s[0]),u.$set(t)},i(s){t||(i(c.$$.fragment,s),i(u.$$.fragment,s),t=!0)},o(s){$(c.$$.fragment,s),$(u.$$.fragment,s),t=!1},d(s){f(c,s),s&&m(e),f(u,s)}}}function u({params:s,query:e}){return this.fetch("blog.json?lang=es").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,e,t){let{blogs:a}=e;return s.$set=(s=>{"blogs"in s&&t(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),e(this,s,d,c,t,{blogs:0})}}export{u as preload};
