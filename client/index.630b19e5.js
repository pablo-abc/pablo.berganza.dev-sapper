import{S as t,i as a,s as n,p as s,a as e,r as o,b as c,u as r,f as i,v as f,w as $,x as m,g as p}from"./client.dd5980e4.js";import{H as g}from"./Head.00396e25.js";import{C as l}from"./Contact.f2205a29.js";function u(t){let a,n;const u=new g({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),d=new l({props:{contact:t[0]}});return{c(){s(u.$$.fragment),a=e(),s(d.$$.fragment)},l(t){o(u.$$.fragment,t),a=c(t),o(d.$$.fragment,t)},m(t,s){r(u,t,s),i(t,a,s),r(d,t,s),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){n||(f(u.$$.fragment,t),f(d.$$.fragment,t),n=!0)},o(t){$(u.$$.fragment,t),$(d.$$.fragment,t),n=!1},d(t){m(u,t),t&&p(a),m(d,t)}}}async function d(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function j(t,a,n){let{contact:s}=a;return t.$set=(t=>{"contact"in t&&n(0,s=t.contact)}),[s]}export default class extends t{constructor(t){super(),a(this,t,j,u,n,{contact:0})}}export{d as preload};
