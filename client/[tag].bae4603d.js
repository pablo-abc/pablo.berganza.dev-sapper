import{S as t,i as s,s as a,o as e,a as o,p as r,d as n,q as g,j as i,r as l,u as $,v as c,g as f}from"./client.9ef13554.js";import{H as p}from"./Head.45a4cf86.js";import"./index.es.0e4d4ac4.js";import{B as m}from"./BlogList.19ae1826.js";function u(t){let s,a;const u=new p({props:{title:"Tag: "+t[1]+" | Pablo Berganza",description:"Posts about "+t[1],url:"/blog/tags/"+t[1]}}),b=new m({props:{blogs:t[0],title:t[2]}});return{c(){e(u.$$.fragment),s=o(),e(b.$$.fragment)},l(t){r(u.$$.fragment,t),s=n(t),r(b.$$.fragment,t)},m(t,e){g(u,t,e),i(t,s,e),g(b,t,e),a=!0},p(t,[s]){const a={};2&s&&(a.title="Tag: "+t[1]+" | Pablo Berganza"),2&s&&(a.description="Posts about "+t[1]),2&s&&(a.url="/blog/tags/"+t[1]),u.$set(a);const e={};1&s&&(e.blogs=t[0]),4&s&&(e.title=t[2]),b.$set(e)},i(t){a||(l(u.$$.fragment,t),l(b.$$.fragment,t),a=!0)},o(t){$(u.$$.fragment,t),$(b.$$.fragment,t),a=!1},d(t){c(u,t),t&&f(s),c(b,t)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/tags/${t.tag}.json`),e=await a.json();if(200===a.status)return{blogs:e,tag:t.tag};this.error(a.status,e.message)}function d(t,s,a){let e,{blogs:o}=s,{tag:r}=s;return t.$set=(t=>{"blogs"in t&&a(0,o=t.blogs),"tag"in t&&a(1,r=t.tag)}),t.$$.update=(()=>{2&t.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))}),[o,r,e]}export default class extends t{constructor(t){super(),s(this,t,d,u,a,{blogs:0,tag:1})}}export{b as preload};
