import{S as s,i as e,s as t,x as a,a as o,y as n,b as r,z as g,f as l,A as i,B as f,C as $,g as m}from"./client.d93832aa.js";import{H as b}from"./Head.1141ff51.js";import"./index.es.0e4d4ac4.js";import{B as p}from"./BlogList.1e1b484a.js";function c(s){let e,t;const c=new b({props:{title:"Blog | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/blog",lang:"es"}}),u=new p({props:{blogs:s[0]}});return{c(){a(c.$$.fragment),e=o(),a(u.$$.fragment)},l(s){n(c.$$.fragment,s),e=r(s),n(u.$$.fragment,s)},m(s,a){g(c,s,a),l(s,e,a),g(u,s,a),t=!0},p(s,[e]){const t={};1&e&&(t.blogs=s[0]),u.$set(t)},i(s){t||(i(c.$$.fragment,s),i(u.$$.fragment,s),t=!0)},o(s){f(c.$$.fragment,s),f(u.$$.fragment,s),t=!1},d(s){$(c,s),s&&m(e),$(u,s)}}}function u(){return this.fetch("es/blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,e,t){let{blogs:a}=e;return s.$set=(s=>{"blogs"in s&&t(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),e(this,s,d,c,t,{blogs:0})}}export{u as preload};
