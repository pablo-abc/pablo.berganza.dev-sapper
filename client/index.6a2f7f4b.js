import{S as t,i as a,s as n,x as s,a as o,y as e,b as c,z as r,f,A as i,B as $,C as m,g}from"./client.4a0af43a.js";import{H as l}from"./Head.28282297.js";import{C as p}from"./Contact.bf1d6ce0.js";function u(t){let a,n;const u=new l({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),d=new p({props:{contact:t[0]}});return{c(){s(u.$$.fragment),a=o(),s(d.$$.fragment)},l(t){e(u.$$.fragment,t),a=c(t),e(d.$$.fragment,t)},m(t,s){r(u,t,s),f(t,a,s),r(d,t,s),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){n||(i(u.$$.fragment,t),i(d.$$.fragment,t),n=!0)},o(t){$(u.$$.fragment,t),$(d.$$.fragment,t),n=!1},d(t){m(u,t),t&&g(a),m(d,t)}}}async function d(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:s}=a;return t.$set=(t=>{"contact"in t&&n(0,s=t.contact)}),[s]}export default class extends t{constructor(t){super(),a(this,t,b,u,n,{contact:0})}}export{d as preload};
