import{S as s,i as t,s as o,p as e,a,r as n,b as r,u as g,f as l,v as f,w as i,x as $,g as m}from"./client.577593dc.js";import{H as c}from"./Head.5d18f07c.js";import"./index.es.0e4d4ac4.js";import{B as p}from"./BlogList.0819f596.js";function b(s){let t,o;const b=new c({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),u=new p({props:{blogs:s[0]}});return{c(){e(b.$$.fragment),t=a(),e(u.$$.fragment)},l(s){n(b.$$.fragment,s),t=r(s),n(u.$$.fragment,s)},m(s,e){g(b,s,e),l(s,t,e),g(u,s,e),o=!0},p(s,[t]){const o={};1&t&&(o.blogs=s[0]),u.$set(o)},i(s){o||(f(b.$$.fragment,s),f(u.$$.fragment,s),o=!0)},o(s){i(b.$$.fragment,s),i(u.$$.fragment,s),o=!1},d(s){$(b,s),s&&m(t),$(u,s)}}}function u(){return this.fetch("blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function d(s,t,o){let{blogs:e}=t;return s.$set=(s=>{"blogs"in s&&o(0,e=s.blogs)}),[e]}export default class extends s{constructor(s){super(),t(this,s,d,b,o,{blogs:0})}}export{u as preload};
