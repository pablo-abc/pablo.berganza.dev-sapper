import{S as t,i as a,s as n,c as o,a as s,b as c,d as e,m as r,l as f,o as $,p as i,r as m,j as l}from"./client.1ff3be45.js";import{C as p}from"./Contact.75f13764.js";import{H as g}from"./Head.ccd1f1ca.js";function u(t){let a,n,u,d;return a=new g({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),u=new p({props:{contact:t[0]}}),{c(){o(a.$$.fragment),n=s(),o(u.$$.fragment)},l(t){c(a.$$.fragment,t),n=e(t),c(u.$$.fragment,t)},m(t,o){r(a,t,o),f(t,n,o),r(u,t,o),d=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),u.$set(n)},i(t){d||($(a.$$.fragment,t),$(u.$$.fragment,t),d=!0)},o(t){i(a.$$.fragment,t),i(u.$$.fragment,t),d=!1},d(t){m(a,t),t&&l(n),m(u,t)}}}async function d(){const t=await this.fetch("contact.json");return{contact:await t.json()}}function j(t,a,n){let{contact:o}=a;return t.$$set=t=>{"contact"in t&&n(0,o=t.contact)},[o]}export default class extends t{constructor(t){super(),a(this,t,j,u,n,{contact:0})}}export{d as preload};
