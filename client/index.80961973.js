import{S as e,i as a,s as n,c as s,a as t,b as r,d as o,m as i,l as f,o as $,p as c,r as m,j as d}from"./client.cb61fa23.js";import{H as l}from"./Head.43b4f7ea.js";import{H as p}from"./Home.d9f8c33c.js";function g(e){let a,n,g,u;return a=new l({props:{title:"Inicio | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/",lang:"es"}}),g=new p({props:{index:e[0]}}),{c(){s(a.$$.fragment),n=t(),s(g.$$.fragment)},l(e){r(a.$$.fragment,e),n=o(e),r(g.$$.fragment,e)},m(e,s){i(a,e,s),f(e,n,s),i(g,e,s),u=!0},p(e,[a]){const n={};1&a&&(n.index=e[0]),g.$set(n)},i(e){u||($(a.$$.fragment,e),$(g.$$.fragment,e),u=!0)},o(e){c(a.$$.fragment,e),c(g.$$.fragment,e),u=!1},d(e){m(a,e),e&&d(n),m(g,e)}}}async function u(){const e=await this.fetch("es.json");return{index:await e.json()}}function x(e,a,n){let{index:s}=a;return e.$$set=e=>{"index"in e&&n(0,s=e.index)},[s]}export default class extends e{constructor(e){super(),a(this,e,x,g,n,{index:0})}}export{u as preload};
