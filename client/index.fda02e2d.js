import{S as e,i as a,s as n,x as s,a as t,y as r,b as i,z as o,f as $,A as f,B as c,C as d,g as m}from"./client.ba6ee5df.js";import{H as g}from"./Head.76879c0d.js";import{H as l}from"./Home.43478cdb.js";function p(e){let a,n,p,x;return a=new g({props:{title:"Inicio | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/",lang:"es"}}),p=new l({props:{index:e[0]}}),{c(){s(a.$$.fragment),n=t(),s(p.$$.fragment)},l(e){r(a.$$.fragment,e),n=i(e),r(p.$$.fragment,e)},m(e,s){o(a,e,s),$(e,n,s),o(p,e,s),x=!0},p(e,[a]){const n={};1&a&&(n.index=e[0]),p.$set(n)},i(e){x||(f(a.$$.fragment,e),f(p.$$.fragment,e),x=!0)},o(e){c(a.$$.fragment,e),c(p.$$.fragment,e),x=!1},d(e){d(a,e),e&&m(n),d(p,e)}}}async function x(){const e=await this.fetch("es.json");return{index:await e.json()}}function u(e,a,n){let{index:s}=a;return e.$$set=(e=>{"index"in e&&n(0,s=e.index)}),[s]}export default class extends e{constructor(e){super(),a(this,e,u,p,n,{index:0})}}export{x as preload};
