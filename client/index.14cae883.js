import{S as t,i as a,s as n,o,a as s,p as c,d as r,q as e,j as f,r as i,u as $,v as m,g as p}from"./client.2bf4a611.js";import{H as g}from"./Head.84ca3462.js";import{C as l}from"./Contact.811d2dff.js";function u(t){let a,n;const u=new g({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),d=new l({props:{contact:t[0]}});return{c(){o(u.$$.fragment),a=s(),o(d.$$.fragment)},l(t){c(u.$$.fragment,t),a=r(t),c(d.$$.fragment,t)},m(t,o){e(u,t,o),f(t,a,o),e(d,t,o),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),d.$set(n)},i(t){n||(i(u.$$.fragment,t),i(d.$$.fragment,t),n=!0)},o(t){$(u.$$.fragment,t),$(d.$$.fragment,t),n=!1},d(t){m(u,t),t&&p(a),m(d,t)}}}async function d(){const t=await this.fetch("contact.json");return{contact:await t.json()}}function j(t,a,n){let{contact:o}=a;return t.$set=(t=>{"contact"in t&&n(0,o=t.contact)}),[o]}export default class extends t{constructor(t){super(),a(this,t,j,u,n,{contact:0})}}export{d as preload};
