import{S as t,i as s,s as e,p as a,a as r,r as i,b as n,u as o,f as l,v as g,w as c,x as u,g as b}from"./client.577593dc.js";import{H as m}from"./Head.5d18f07c.js";import"./index.es.0e4d4ac4.js";import{B as $}from"./Blog.9d3a25e3.js";function f(t){let s,e;const f=new m({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/es/blog/"+t[0].slug,lang:"es",ttr:t[0].ttr}}),p=new $({props:{blog:t[0]}});return{c(){a(f.$$.fragment),s=r(),a(p.$$.fragment)},l(t){i(f.$$.fragment,t),s=n(t),i(p.$$.fragment,t)},m(t,a){o(f,t,a),l(t,s,a),o(p,t,a),e=!0},p(t,[s]){const e={};1&s&&(e.title=t[0].attributes.title+" | Pablo Berganza"),1&s&&(e.description=t[0].attributes.description),1&s&&(e.img=t[0].attributes.banner),1&s&&(e.created=t[0].attributes.created),1&s&&(e.url="/es/blog/"+t[0].slug),1&s&&(e.ttr=t[0].ttr),f.$set(e);const a={};1&s&&(a.blog=t[0]),p.$set(a)},i(t){e||(g(f.$$.fragment,t),g(p.$$.fragment,t),e=!0)},o(t){c(f.$$.fragment,t),c(p.$$.fragment,t),e=!1},d(t){u(f,t),t&&b(s),u(p,t)}}}async function p({params:t}){const s=await this.fetch(`es/blog/${t.slug}.json`),e=await s.json();if(200===s.status)return{blog:e};this.error(s.status,e.message)}function d(t,s,e){let{blog:a}=s;return t.$set=(t=>{"blog"in t&&e(0,a=t.blog)}),[a]}export default class extends t{constructor(t){super(),s(this,t,d,f,e,{blog:0})}}export{p as preload};
