import{S as s,i as t,s as a,o as e,a as o,p as r,d as n,q as g,j as i,r as l,u as c,v as $,g as p}from"./client.e8b9dac7.js";import{H as m}from"./Head.603d7d8d.js";import"./index.es.0e4d4ac4.js";import{B as u}from"./BlogList.4e4d8c8c.js";function b(s){let t,a;const b=new m({props:{title:"Tag: "+s[1]+" | Pablo Berganza",description:"Publicaciones sobre "+s[1],url:"/es/blog/tags/"+s[1],lang:"es"}}),f=new u({props:{blogs:s[0],title:s[2]}});return{c(){e(b.$$.fragment),t=o(),e(f.$$.fragment)},l(s){r(b.$$.fragment,s),t=n(s),r(f.$$.fragment,s)},m(s,e){g(b,s,e),i(s,t,e),g(f,s,e),a=!0},p(s,[t]){const a={};2&t&&(a.title="Tag: "+s[1]+" | Pablo Berganza"),2&t&&(a.description="Publicaciones sobre "+s[1]),2&t&&(a.url="/es/blog/tags/"+s[1]),b.$set(a);const e={};1&t&&(e.blogs=s[0]),4&t&&(e.title=s[2]),f.$set(e)},i(s){a||(l(b.$$.fragment,s),l(f.$$.fragment,s),a=!0)},o(s){c(b.$$.fragment,s),c(f.$$.fragment,s),a=!1},d(s){$(b,s),s&&p(t),$(f,s)}}}async function f({params:s,query:t}){const a=await this.fetch(`es/blog/tags/${s.tag}.json`),e=await a.json();if(200===a.status)return{blogs:e,tag:s.tag};this.error(a.status,e.message)}function d(s,t,a){let e,{blogs:o}=t,{tag:r}=t;return s.$set=(s=>{"blogs"in s&&a(0,o=s.blogs),"tag"in s&&a(1,r=s.tag)}),s.$$.update=(()=>{2&s.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))}),[o,r,e]}export default class extends s{constructor(s){super(),t(this,s,d,b,a,{blogs:0,tag:1})}}export{f as preload};
