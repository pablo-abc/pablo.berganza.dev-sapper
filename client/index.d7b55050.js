import{S as t,i as a,s as n,c as s,a as e,b as o,d as c,m as r,l as i,o as $,p as f,r as m,j as l}from"./client.cb61fa23.js";import{H as p}from"./Head.43b4f7ea.js";import{C as g}from"./Contact.35dadace.js";function u(t){let a,n,u,d;return a=new p({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),u=new g({props:{contact:t[0]}}),{c(){s(a.$$.fragment),n=e(),s(u.$$.fragment)},l(t){o(a.$$.fragment,t),n=c(t),o(u.$$.fragment,t)},m(t,s){r(a,t,s),i(t,n,s),r(u,t,s),d=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),u.$set(n)},i(t){d||($(a.$$.fragment,t),$(u.$$.fragment,t),d=!0)},o(t){f(a.$$.fragment,t),f(u.$$.fragment,t),d=!1},d(t){m(a,t),t&&l(n),m(u,t)}}}async function d(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:s}=a;return t.$$set=t=>{"contact"in t&&n(0,s=t.contact)},[s]}export default class extends t{constructor(t){super(),a(this,t,b,u,n,{contact:0})}}export{d as preload};
