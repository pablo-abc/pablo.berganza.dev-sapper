!function(){"use strict";const e=["client/Head.bab5bf87.js","client/index.ebe93951.js","client/about.598c1ea6.js","client/index.es.0e4d4ac4.js","client/index.51d656eb.js","client/index.9937b91b.js","client/client.8b36ecb5.js","client/[slug].4a7f04fd.js","client/client.3fd4ae55.js"].concat(["service-worker-index.html",".DS_Store","CNAME","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","dracula.css","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","global.css","img/.DS_Store","img/blog-pics/2019-03-18.jpg","img/blog-pics/2019-06-11.jpg","img/cljs-white.svg","img/profile-pic.jpeg","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","overpass.css","site.css"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1587147103195").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1587147103195"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587147103195").then(async n=>{try{const c=await fetch(e.request);return n.put(e.request,c.clone()),c}catch(c){const i=await n.match(e.request);if(i)return i;throw c}}))))})}();
