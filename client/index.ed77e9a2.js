import{S as t,i as a,s as n,o as s,a as o,p as e,d as c,q as r,j as i,r as $,u as f,v as m,g as p}from"./client.e8b9dac7.js";import{H as g}from"./Head.603d7d8d.js";import{C as l}from"./Contact.fd428b4c.js";function d(t){let a,n;const d=new g({props:{title:"Contáctame | Pablo Berganza",description:"Sitio y blog personal de Pablo Berganza",url:"/es/contact",lang:"es"}}),u=new l({props:{contact:t[0]}});return{c(){s(d.$$.fragment),a=o(),s(u.$$.fragment)},l(t){e(d.$$.fragment,t),a=c(t),e(u.$$.fragment,t)},m(t,s){r(d,t,s),i(t,a,s),r(u,t,s),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),u.$set(n)},i(t){n||($(d.$$.fragment,t),$(u.$$.fragment,t),n=!0)},o(t){f(d.$$.fragment,t),f(u.$$.fragment,t),n=!1},d(t){m(d,t),t&&p(a),m(u,t)}}}async function u(){const t=await this.fetch("es/contact.json");return{contact:await t.json()}}function j(t,a,n){let{contact:s}=a;return t.$set=(t=>{"contact"in t&&n(0,s=t.contact)}),[s]}export default class extends t{constructor(t){super(),a(this,t,j,d,n,{contact:0})}}export{u as preload};
