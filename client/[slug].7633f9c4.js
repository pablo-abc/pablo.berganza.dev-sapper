import{S as t,i as e,s,c as a,a as r,b as i,d as o,m as n,l,o as g,p as c,r as b,j as u}from"./client.cb61fa23.js";import{H as f}from"./Head.43b4f7ea.js";import"./index.es.0e4d4ac4.js";import{B as m}from"./Blog.f326fc36.js";function $(t){let e,s,$,p;return e=new f({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/blog/"+t[0].slug,ttr:t[0].ttr}}),$=new m({props:{blog:t[0]}}),{c(){a(e.$$.fragment),s=r(),a($.$$.fragment)},l(t){i(e.$$.fragment,t),s=o(t),i($.$$.fragment,t)},m(t,a){n(e,t,a),l(t,s,a),n($,t,a),p=!0},p(t,[s]){const a={};1&s&&(a.title=t[0].attributes.title+" | Pablo Berganza"),1&s&&(a.description=t[0].attributes.description),1&s&&(a.img=t[0].attributes.banner),1&s&&(a.created=t[0].attributes.created),1&s&&(a.url="/blog/"+t[0].slug),1&s&&(a.ttr=t[0].ttr),e.$set(a);const r={};1&s&&(r.blog=t[0]),$.$set(r)},i(t){p||(g(e.$$.fragment,t),g($.$$.fragment,t),p=!0)},o(t){c(e.$$.fragment,t),c($.$$.fragment,t),p=!1},d(t){b(e,t),t&&u(s),b($,t)}}}async function p({params:t}){const e=await this.fetch(`blog/${t.slug}.json`),s=await e.json();if(200===e.status)return{blog:s};this.error(e.status,s.message)}function d(t,e,s){let{blog:a}=e;return t.$$set=t=>{"blog"in t&&s(0,a=t.blog)},[a]}export default class extends t{constructor(t){super(),e(this,t,d,$,s,{blog:0})}}export{p as preload};
