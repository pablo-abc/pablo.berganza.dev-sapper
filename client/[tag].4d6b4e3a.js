import{S as s,i as t,s as a,p as e,a as o,r,b as n,u as g,f as i,v as l,w as c,x as $,g as f}from"./client.7368cfcd.js";import{H as p}from"./Head.90d71bf1.js";import"./index.es.0e4d4ac4.js";import{B as b}from"./BlogList.707c3a2a.js";function m(s){let t,a;const m=new p({props:{title:"Tag: "+s[1]+" | Pablo Berganza",description:"Publicaciones sobre "+s[1],url:"/es/blog/tags/"+s[1],lang:"es"}}),u=new b({props:{blogs:s[0],title:s[2]}});return{c(){e(m.$$.fragment),t=o(),e(u.$$.fragment)},l(s){r(m.$$.fragment,s),t=n(s),r(u.$$.fragment,s)},m(s,e){g(m,s,e),i(s,t,e),g(u,s,e),a=!0},p(s,[t]){const a={};2&t&&(a.title="Tag: "+s[1]+" | Pablo Berganza"),2&t&&(a.description="Publicaciones sobre "+s[1]),2&t&&(a.url="/es/blog/tags/"+s[1]),m.$set(a);const e={};1&t&&(e.blogs=s[0]),4&t&&(e.title=s[2]),u.$set(e)},i(s){a||(l(m.$$.fragment,s),l(u.$$.fragment,s),a=!0)},o(s){c(m.$$.fragment,s),c(u.$$.fragment,s),a=!1},d(s){$(m,s),s&&f(t),$(u,s)}}}async function u({params:s}){const t=await this.fetch(`es/blog/tags/${s.tag}.json`),a=await t.json();if(200===t.status)return{blogs:a,tag:s.tag};this.error(t.status,a.message)}function d(s,t,a){let e,{blogs:o}=t,{tag:r}=t;return s.$set=(s=>{"blogs"in s&&a(0,o=s.blogs),"tag"in s&&a(1,r=s.tag)}),s.$$.update=(()=>{2&s.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))}),[o,r,e]}export default class extends s{constructor(s){super(),t(this,s,d,m,a,{blogs:0,tag:1})}}export{u as preload};
