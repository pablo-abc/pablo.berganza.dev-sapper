import{S as s,i as t,s as a,c as e,a as o,b as r,d as n,m as g,l as i,o as l,p as $,r as c,j as b}from"./client.f21294b7.js";import{H as f}from"./Head.0b03b459.js";import"./index.es.0e4d4ac4.js";import{B as m}from"./BlogList.d5f8ad46.js";function p(s){let t,a,p,u;return t=new f({props:{title:"Tag: "+s[1]+" | Pablo Berganza",description:"Publicaciones sobre "+s[1],url:"/es/blog/tags/"+s[1],lang:"es"}}),p=new m({props:{blogs:s[0],title:s[2]}}),{c(){e(t.$$.fragment),a=o(),e(p.$$.fragment)},l(s){r(t.$$.fragment,s),a=n(s),r(p.$$.fragment,s)},m(s,e){g(t,s,e),i(s,a,e),g(p,s,e),u=!0},p(s,[a]){const e={};2&a&&(e.title="Tag: "+s[1]+" | Pablo Berganza"),2&a&&(e.description="Publicaciones sobre "+s[1]),2&a&&(e.url="/es/blog/tags/"+s[1]),t.$set(e);const o={};1&a&&(o.blogs=s[0]),4&a&&(o.title=s[2]),p.$set(o)},i(s){u||(l(t.$$.fragment,s),l(p.$$.fragment,s),u=!0)},o(s){$(t.$$.fragment,s),$(p.$$.fragment,s),u=!1},d(s){c(t,s),s&&b(a),c(p,s)}}}async function u({params:s}){const t=await this.fetch(`es/blog/tags/${s.tag}.json`),a=await t.json();if(200===t.status)return{blogs:a,tag:s.tag};this.error(t.status,a.message)}function d(s,t,a){let e,{blogs:o}=t,{tag:r}=t;return s.$$set=s=>{"blogs"in s&&a(0,o=s.blogs),"tag"in s&&a(1,r=s.tag)},s.$$.update=()=>{2&s.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))},[o,r,e]}export default class extends s{constructor(s){super(),t(this,s,d,p,a,{blogs:0,tag:1})}}export{u as preload};