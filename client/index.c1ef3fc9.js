import{S as e,i as n,s,o as a,a as t,p as r,d as o,q as i,j as c,r as d,u as $,v as m,g as f}from"./client.4b42215c.js";import"./helpers.30ddd356.js";import{H as p}from"./Home.4e317ccc.js";import{H as l}from"./Head.a9312701.js";function g(e){let n,s;const g=new l({props:{title:"Inicio | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/",lang:"es"}}),u=new p({props:{index:e[0]}});return{c(){a(g.$$.fragment),n=t(),a(u.$$.fragment)},l(e){r(g.$$.fragment,e),n=o(e),r(u.$$.fragment,e)},m(e,a){i(g,e,a),c(e,n,a),i(u,e,a),s=!0},p(e,[n]){const s={};1&n&&(s.index=e[0]),u.$set(s)},i(e){s||(d(g.$$.fragment,e),d(u.$$.fragment,e),s=!0)},o(e){$(g.$$.fragment,e),$(u.$$.fragment,e),s=!1},d(e){m(g,e),e&&f(n),m(u,e)}}}async function u(){const e=await this.fetch("index.json?lang=es");return{index:await e.json()}}function x(e,n,s){let{index:a}=n;return e.$set=(e=>{"index"in e&&s(0,a=e.index)}),[a]}export default class extends e{constructor(e){super(),n(this,e,x,g,s,{index:0})}}export{u as preload};
