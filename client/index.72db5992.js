import{S as t,i as a,s as n,c as o,a as s,b as c,d as r,m as e,l as $,o as i,p as f,r as m,j as l}from"./client.70261b08.js";import{H as p}from"./Head.316d6994.js";import{C as g}from"./Contact.bcb77ddc.js";function d(t){let a,n,d,u;return a=new p({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),d=new g({props:{contact:t[0]}}),{c(){o(a.$$.fragment),n=s(),o(d.$$.fragment)},l(t){c(a.$$.fragment,t),n=r(t),c(d.$$.fragment,t)},m(t,o){e(a,t,o),$(t,n,o),e(d,t,o),u=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){u||(i(a.$$.fragment,t),i(d.$$.fragment,t),u=!0)},o(t){f(a.$$.fragment,t),f(d.$$.fragment,t),u=!1},d(t){m(a,t),t&&l(n),m(d,t)}}}async function u(){const t=await this.fetch("contact.json");return{contact:await t.json()}}function b(t,a,n){let{contact:o}=a;return t.$$set=t=>{"contact"in t&&n(0,o=t.contact)},[o]}export default class extends t{constructor(t){super(),a(this,t,b,d,n,{contact:0})}}export{u as preload};
