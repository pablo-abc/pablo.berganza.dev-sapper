import{S as t,i as a,s as n,p as s,a as o,r as e,b as c,u as r,f,v as i,w as $,x as m,g as p}from"./client.b1d4984b.js";import{H as g}from"./Head.f86bfa6c.js";import{C as l}from"./Contact.2591d72e.js";function u(t){let a,n;const u=new g({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),d=new l({props:{contact:t[0]}});return{c(){s(u.$$.fragment),a=o(),s(d.$$.fragment)},l(t){e(u.$$.fragment,t),a=c(t),e(d.$$.fragment,t)},m(t,s){r(u,t,s),f(t,a,s),r(d,t,s),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){n||(i(u.$$.fragment,t),i(d.$$.fragment,t),n=!0)},o(t){$(u.$$.fragment,t),$(d.$$.fragment,t),n=!1},d(t){m(u,t),t&&p(a),m(d,t)}}}async function d(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:s}=a;return t.$set=(t=>{"contact"in t&&n(0,s=t.contact)}),[s]}export default class extends t{constructor(t){super(),a(this,t,b,u,n,{contact:0})}}export{d as preload};
