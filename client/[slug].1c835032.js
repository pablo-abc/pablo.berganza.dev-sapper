import{S as t,i as a,s as e,o as s,a as r,p as o,d as n,q as i,j as d,r as l,u as g,v as m,g as c}from"./client.e8b9dac7.js";import"./helpers.30ddd356.js";import{H as u}from"./Head.603d7d8d.js";import"./index.es.0e4d4ac4.js";import{B as $}from"./Blog.b35d170b.js";function p(t){let a,e;const p=new u({props:{title:t[0].metadata.title+" | Pablo Berganza",description:t[0].metadata.introduction,img:t[0].metadata.banner,isArticle:!0,created:t[0].metadata.created,url:"/es/blog/"+t[0].slug,lang:"es"}}),b=new $({props:{blog:t[0]}});return{c(){s(p.$$.fragment),a=r(),s(b.$$.fragment)},l(t){o(p.$$.fragment,t),a=n(t),o(b.$$.fragment,t)},m(t,s){i(p,t,s),d(t,a,s),i(b,t,s),e=!0},p(t,[a]){const e={};1&a&&(e.title=t[0].metadata.title+" | Pablo Berganza"),1&a&&(e.description=t[0].metadata.introduction),1&a&&(e.img=t[0].metadata.banner),1&a&&(e.created=t[0].metadata.created),1&a&&(e.url="/es/blog/"+t[0].slug),p.$set(e);const s={};1&a&&(s.blog=t[0]),b.$set(s)},i(t){e||(l(p.$$.fragment,t),l(b.$$.fragment,t),e=!0)},o(t){g(p.$$.fragment,t),g(b.$$.fragment,t),e=!1},d(t){m(p,t),t&&c(a),m(b,t)}}}async function b({params:t,query:a}){const e=await this.fetch(`es/blog/${t.slug}.json`),s=await e.json();if(200===e.status)return{blog:s};this.error(e.status,s.message)}function f(t,a,e){let{blog:s}=a;return t.$set=(t=>{"blog"in t&&e(0,s=t.blog)}),[s]}export default class extends t{constructor(t){super(),a(this,t,f,p,e,{blog:0})}}export{b as preload};
