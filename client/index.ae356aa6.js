import{S as a,i as e,s,o as n,a as t,p as r,d as o,q as i,j as d,r as f,u as $,v as c,g as m}from"./client.9fdc03ab.js";import"./helpers.30ddd356.js";import{H as p}from"./Home.5c0ba0aa.js";import{H as l}from"./Head.480a47af.js";function g(a){let e,s;const g=new l({props:{title:"Inicio | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/",lang:"es"}}),u=new p({props:{index:a[0]}});return{c(){n(g.$$.fragment),e=t(),n(u.$$.fragment)},l(a){r(g.$$.fragment,a),e=o(a),r(u.$$.fragment,a)},m(a,n){i(g,a,n),d(a,e,n),i(u,a,n),s=!0},p(a,[e]){const s={};1&e&&(s.index=a[0]),u.$set(s)},i(a){s||(f(g.$$.fragment,a),f(u.$$.fragment,a),s=!0)},o(a){$(g.$$.fragment,a),$(u.$$.fragment,a),s=!1},d(a){c(g,a),a&&m(e),c(u,a)}}}async function u(){const a=await this.fetch("es.json");return{index:await a.json()}}function x(a,e,s){let{index:n}=e;return a.$set=(a=>{"index"in a&&s(0,n=a.index)}),[n]}export default class extends a{constructor(a){super(),e(this,a,x,g,s,{index:0})}}export{u as preload};
