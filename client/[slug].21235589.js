import{S as t,i as a,s as e,o as s,a as r,p as o,d as n,q as i,j as l,r as m,u as g,v as c,g as d}from"./client.ace561ab.js";import"./helpers.30ddd356.js";import{H as u}from"./Head.bc4e8e76.js";import"./index.es.0e4d4ac4.js";import{B as $}from"./Blog.4a8665e1.js";function p(t){let a,e;const p=new u({props:{title:t[0].metadata.title+" | Pablo Berganza",description:t[0].metadata.introduction,img:t[0].metadata.banner,isArticle:!0,created:t[0].metadata.created,url:"/blog/"+t[0].slug}}),f=new $({props:{blog:t[0]}});return{c(){s(p.$$.fragment),a=r(),s(f.$$.fragment)},l(t){o(p.$$.fragment,t),a=n(t),o(f.$$.fragment,t)},m(t,s){i(p,t,s),l(t,a,s),i(f,t,s),e=!0},p(t,[a]){const e={};1&a&&(e.title=t[0].metadata.title+" | Pablo Berganza"),1&a&&(e.description=t[0].metadata.introduction),1&a&&(e.img=t[0].metadata.banner),1&a&&(e.created=t[0].metadata.created),1&a&&(e.url="/blog/"+t[0].slug),p.$set(e);const s={};1&a&&(s.blog=t[0]),f.$set(s)},i(t){e||(m(p.$$.fragment,t),m(f.$$.fragment,t),e=!0)},o(t){g(p.$$.fragment,t),g(f.$$.fragment,t),e=!1},d(t){c(p,t),t&&d(a),c(f,t)}}}async function f({params:t,query:a}){const e=await this.fetch(`blog/${t.slug}.json`),s=await e.json();if(200===e.status)return{blog:s};this.error(e.status,s.message)}function b(t,a,e){let{blog:s}=a;return t.$set=(t=>{"blog"in t&&e(0,s=t.blog)}),[s]}export default class extends t{constructor(t){super(),a(this,t,b,p,e,{blog:0})}}export{f as preload};
