import{S as t,i as a,s as n,c as s,a as e,b as o,d as c,m as r,e as f,t as i,f as $,g as m,h as g}from"./client.70bcb1a2.js";import{H as l}from"./Head.5961f6ad.js";import{C as p}from"./Contact.d7e0f9fd.js";function d(t){let a,n,d,u;return a=new l({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),d=new p({props:{contact:t[0]}}),{c(){s(a.$$.fragment),n=e(),s(d.$$.fragment)},l(t){o(a.$$.fragment,t),n=c(t),o(d.$$.fragment,t)},m(t,s){r(a,t,s),f(t,n,s),r(d,t,s),u=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){u||(i(a.$$.fragment,t),i(d.$$.fragment,t),u=!0)},o(t){$(a.$$.fragment,t),$(d.$$.fragment,t),u=!1},d(t){m(a,t),t&&g(n),m(d,t)}}}async function u(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:s}=a;return t.$$set=t=>{"contact"in t&&n(0,s=t.contact)},[s]}export default class extends t{constructor(t){super(),a(this,t,b,d,n,{contact:0})}}export{u as preload};
