import{S as t,i as e,s,c as r,a,b as i,d as n,m as o,e as l,t as g,f as c,g as u,h as b}from"./client.2de5f059.js";import{H as m}from"./Head.f15c1ed5.js";import"./index.es.0e4d4ac4.js";import{B as $}from"./Blog.6d037c55.js";function f(t){let e,s,f,d;return e=new m({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/blog/"+t[0].slug,ttr:t[0].ttr}}),f=new $({props:{blog:t[0]}}),{c(){r(e.$$.fragment),s=a(),r(f.$$.fragment)},l(t){i(e.$$.fragment,t),s=n(t),i(f.$$.fragment,t)},m(t,r){o(e,t,r),l(t,s,r),o(f,t,r),d=!0},p(t,[s]){const r={};1&s&&(r.title=t[0].attributes.title+" | Pablo Berganza"),1&s&&(r.description=t[0].attributes.description),1&s&&(r.img=t[0].attributes.banner),1&s&&(r.created=t[0].attributes.created),1&s&&(r.url="/blog/"+t[0].slug),1&s&&(r.ttr=t[0].ttr),e.$set(r);const a={};1&s&&(a.blog=t[0]),f.$set(a)},i(t){d||(g(e.$$.fragment,t),g(f.$$.fragment,t),d=!0)},o(t){c(e.$$.fragment,t),c(f.$$.fragment,t),d=!1},d(t){u(e,t),t&&b(s),u(f,t)}}}async function d({params:t}){const e=await this.fetch(`blog/${t.slug}.json`),s=await e.json();if(200===e.status)return{blog:s};this.error(e.status,s.message)}function p(t,e,s){let{blog:r}=e;return t.$$set=t=>{"blog"in t&&s(0,r=t.blog)},[r]}export default class extends t{constructor(t){super(),e(this,t,p,f,s,{blog:0})}}export{d as preload};
