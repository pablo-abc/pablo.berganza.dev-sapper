import{S as t,i as s,s as a,c as e,a as o,b as r,d as g,m as n,e as i,t as l,f as $,g as c,h as f}from"./client.ef3b95b2.js";import{H as m}from"./Head.fe88e6b0.js";import"./index.es.0e4d4ac4.js";import{B as b}from"./BlogList.f1c52c77.js";function p(t){let s,a,p,u;return s=new m({props:{title:"Tag: "+t[1]+" | Pablo Berganza",description:"Posts about "+t[1],url:"/blog/tags/"+t[1]}}),p=new b({props:{blogs:t[0],title:t[2]}}),{c(){e(s.$$.fragment),a=o(),e(p.$$.fragment)},l(t){r(s.$$.fragment,t),a=g(t),r(p.$$.fragment,t)},m(t,e){n(s,t,e),i(t,a,e),n(p,t,e),u=!0},p(t,[a]){const e={};2&a&&(e.title="Tag: "+t[1]+" | Pablo Berganza"),2&a&&(e.description="Posts about "+t[1]),2&a&&(e.url="/blog/tags/"+t[1]),s.$set(e);const o={};1&a&&(o.blogs=t[0]),4&a&&(o.title=t[2]),p.$set(o)},i(t){u||(l(s.$$.fragment,t),l(p.$$.fragment,t),u=!0)},o(t){$(s.$$.fragment,t),$(p.$$.fragment,t),u=!1},d(t){c(s,t),t&&f(a),c(p,t)}}}async function u({params:t}){const s=await this.fetch(`blog/tags/${t.tag}.json`),a=await s.json();if(200===s.status)return{blogs:a,tag:t.tag};this.error(s.status,a.message)}function d(t,s,a){let e,{blogs:o}=s,{tag:r}=s;return t.$$set=t=>{"blogs"in t&&a(0,o=t.blogs),"tag"in t&&a(1,r=t.tag)},t.$$.update=()=>{2&t.$$.dirty&&a(2,e=r.charAt(0).toUpperCase()+r.slice(1))},[o,r,e]}export default class extends t{constructor(t){super(),s(this,t,d,p,a,{blogs:0,tag:1})}}export{u as preload};
