import{S as t,i as a,s as n,c as s,a as o,b as c,d as e,m as r,e as f,t as $,f as i,g as m,h as g}from"./client.2335be66.js";import{H as l}from"./Head.1c24ef0f.js";import{C as p}from"./Contact.af2fcb54.js";function u(t){let a,n,u,d;return a=new l({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),u=new p({props:{contact:t[0]}}),{c(){s(a.$$.fragment),n=o(),s(u.$$.fragment)},l(t){c(a.$$.fragment,t),n=e(t),c(u.$$.fragment,t)},m(t,s){r(a,t,s),f(t,n,s),r(u,t,s),d=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),u.$set(n)},i(t){d||($(a.$$.fragment,t),$(u.$$.fragment,t),d=!0)},o(t){i(a.$$.fragment,t),i(u.$$.fragment,t),d=!1},d(t){m(a,t),t&&g(n),m(u,t)}}}async function d(){const t=await this.fetch("contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:s}=a;return t.$$set=t=>{"contact"in t&&n(0,s=t.contact)},[s]}export default class extends t{constructor(t){super(),a(this,t,b,u,n,{contact:0})}}export{d as preload};
