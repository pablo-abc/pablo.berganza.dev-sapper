import{S as e,i as a,s,o as n,a as t,p as r,d as o,q as i,j as d,r as f,u as $,v as m,g as c}from"./client.9ef13554.js";import"./helpers.30ddd356.js";import{H as p}from"./Home.7d7aa3b1.js";import{H as l}from"./Head.45a4cf86.js";function g(e){let a,s;const g=new l({props:{title:"Inicio | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/",lang:"es"}}),u=new p({props:{index:e[0]}});return{c(){n(g.$$.fragment),a=t(),n(u.$$.fragment)},l(e){r(g.$$.fragment,e),a=o(e),r(u.$$.fragment,e)},m(e,n){i(g,e,n),d(e,a,n),i(u,e,n),s=!0},p(e,[a]){const s={};1&a&&(s.index=e[0]),u.$set(s)},i(e){s||(f(g.$$.fragment,e),f(u.$$.fragment,e),s=!0)},o(e){$(g.$$.fragment,e),$(u.$$.fragment,e),s=!1},d(e){m(g,e),e&&c(a),m(u,e)}}}async function u(){const e=await this.fetch("es.json");return{index:await e.json()}}function x(e,a,s){let{index:n}=a;return e.$set=(e=>{"index"in e&&s(0,n=e.index)}),[n]}export default class extends e{constructor(e){super(),a(this,e,x,g,s,{index:0})}}export{u as preload};
