import{S as s,i as t,s as e,x as a,a as o,y as n,b as r,z as g,f as l,A as f,B as i,C as $,g as b}from"./client.ba6ee5df.js";import{H as m}from"./Head.76879c0d.js";import"./index.es.0e4d4ac4.js";import{B as c}from"./BlogList.5b17fb66.js";function p(s){let t,e,p,d;return t=new m({props:{title:"Blog | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/blog"}}),p=new c({props:{blogs:s[0]}}),{c(){a(t.$$.fragment),e=o(),a(p.$$.fragment)},l(s){n(t.$$.fragment,s),e=r(s),n(p.$$.fragment,s)},m(s,a){g(t,s,a),l(s,e,a),g(p,s,a),d=!0},p(s,[t]){const e={};1&t&&(e.blogs=s[0]),p.$set(e)},i(s){d||(f(t.$$.fragment,s),f(p.$$.fragment,s),d=!0)},o(s){i(t.$$.fragment,s),i(p.$$.fragment,s),d=!1},d(s){$(t,s),s&&b(e),$(p,s)}}}function d(){return this.fetch("blog.json").then(s=>s.json()).then(s=>({blogs:s}))}function u(s,t,e){let{blogs:a}=t;return s.$$set=(s=>{"blogs"in s&&e(0,a=s.blogs)}),[a]}export default class extends s{constructor(s){super(),t(this,s,u,p,e,{blogs:0})}}export{d as preload};
