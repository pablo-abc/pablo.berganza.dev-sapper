import{S as s,i as t,s as a,o as e,a as o,p as r,d as n,q as g,j as i,r as l,u as c,v as $,g as f}from"./client.c1b4a8f0.js";import{H as p}from"./Head.89e3e9c7.js";import"./index.es.0e4d4ac4.js";import{B as m}from"./BlogList.45f18850.js";function u(s){let t,a;const u=new p({props:{title:"Tag: "+s[1]+" | Pablo Berganza",description:"Publicaciones sobre "+s[1],url:"/es/blog/tags/"+s[1],lang:"es"}}),b=new m({props:{blogs:s[0],title:s[2]}});return{c(){e(u.$$.fragment),t=o(),e(b.$$.fragment)},l(s){r(u.$$.fragment,s),t=n(s),r(b.$$.fragment,s)},m(s,e){g(u,s,e),i(s,t,e),g(b,s,e),a=!0},p(s,[t]){const a={};2&t&&(a.title="Tag: "+s[1]+" | Pablo Berganza"),2&t&&(a.description="Publicaciones sobre "+s[1]),2&t&&(a.url="/es/blog/tags/"+s[1]),u.$set(a);const e={};1&t&&(e.blogs=s[0]),4&t&&(e.title=s[2]),b.$set(e)},i(s){a||(l(u.$$.fragment,s),l(b.$$.fragment,s),a=!0)},o(s){c(u.$$.fragment,s),c(b.$$.fragment,s),a=!1},d(s){$(u,s),s&&f(t),$(b,s)}}}async function b({params:s,query:t}){const a=await this.fetch(`es/blog/tags/${s.tag}.json`),e=await a.json();if(200===a.status)return{blogs:e,tag:s.tag};this.error(a.status,e.message)}function d(s,t,a){let e,{blogs:o}=t,{tag:r}=t;return s.$set=(s=>{"blogs"in s&&a(0,o=s.blogs),"tag"in s&&a(1,r=s.tag)}),s.$$.update=(()=>{2&s.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))}),[o,r,e]}export default class extends s{constructor(s){super(),t(this,s,d,u,a,{blogs:0,tag:1})}}export{b as preload};