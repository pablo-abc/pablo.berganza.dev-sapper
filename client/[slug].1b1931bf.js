import{S as t,i as e,s,p as a,a as r,r as i,b as n,u as o,f as l,v as g,w as u,x as b,g as c}from"./client.60eb118f.js";import{H as m}from"./Head.d281b1d4.js";import"./index.es.0e4d4ac4.js";import{B as $}from"./Blog.101a455a.js";function f(t){let e,s;const f=new m({props:{title:t[0].attributes.title+" | Pablo Berganza",description:t[0].attributes.description,img:t[0].attributes.banner,isArticle:!0,created:t[0].attributes.created,url:"/es/blog/"+t[0].slug,lang:"es",ttr:t[0].ttr}}),p=new $({props:{blog:t[0]}});return{c(){a(f.$$.fragment),e=r(),a(p.$$.fragment)},l(t){i(f.$$.fragment,t),e=n(t),i(p.$$.fragment,t)},m(t,a){o(f,t,a),l(t,e,a),o(p,t,a),s=!0},p(t,[e]){const s={};1&e&&(s.title=t[0].attributes.title+" | Pablo Berganza"),1&e&&(s.description=t[0].attributes.description),1&e&&(s.img=t[0].attributes.banner),1&e&&(s.created=t[0].attributes.created),1&e&&(s.url="/es/blog/"+t[0].slug),1&e&&(s.ttr=t[0].ttr),f.$set(s);const a={};1&e&&(a.blog=t[0]),p.$set(a)},i(t){s||(g(f.$$.fragment,t),g(p.$$.fragment,t),s=!0)},o(t){u(f.$$.fragment,t),u(p.$$.fragment,t),s=!1},d(t){b(f,t),t&&c(e),b(p,t)}}}async function p({params:t,query:e}){const s=await this.fetch(`es/blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{blog:a};this.error(s.status,a.message)}function d(t,e,s){let{blog:a}=e;return t.$set=(t=>{"blog"in t&&s(0,a=t.blog)}),[a]}export default class extends t{constructor(t){super(),e(this,t,d,f,s,{blog:0})}}export{p as preload};
