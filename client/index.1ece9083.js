import{S as t,i as a,s as n,x as s,a as o,y as c,b as e,z as r,f,A as i,B as $,C as m,g}from"./client.a5df5814.js";import{H as l}from"./Head.b4835b85.js";import{C as p}from"./Contact.6fb99b2e.js";function u(t){let a,n;const u=new l({props:{title:"Contact Me | Pablo Berganza",description:"Personal site and blog for Pablo Berganza",url:"/contact"}}),b=new p({props:{contact:t[0]}});return{c(){s(u.$$.fragment),a=o(),s(b.$$.fragment)},l(t){c(u.$$.fragment,t),a=e(t),c(b.$$.fragment,t)},m(t,s){r(u,t,s),f(t,a,s),r(b,t,s),n=!0},p(t,[a]){const n={};1&a&&(n.contact=t[0]),b.$set(n)},i(t){n||(i(u.$$.fragment,t),i(b.$$.fragment,t),n=!0)},o(t){$(u.$$.fragment,t),$(b.$$.fragment,t),n=!1},d(t){m(u,t),t&&g(a),m(b,t)}}}async function b(){const t=await this.fetch("contact.json");return{contact:await t.json()}}function d(t,a,n){let{contact:s}=a;return t.$set=(t=>{"contact"in t&&n(0,s=t.contact)}),[s]}export default class extends t{constructor(t){super(),a(this,t,d,u,n,{contact:0})}}export{b as preload};
