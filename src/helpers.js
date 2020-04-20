import path from 'path-browserify';
import marked from 'marked';
import hljs from 'highlight.js';
import hljsDefineGraphQL from 'highlightjs-graphql';

hljsDefineGraphQL(hljs);

const renderer = new marked.Renderer();

renderer.code = (source, lang) => {
  const { value } = hljs.highlight(lang, source);
  return `<pre class="${lang} hljs"><code>${value}</code></pre>`
}

renderer.link = (href, title, text) => {
  const isExternal = /^https?/.test(href);
  const attributes = isExternal
        ? 'target="_blank" rel="noopener noreferrer"'
        : '';
  return `<a
            href="${href}"
            ${attributes}
            title="${title || text}"
          >
            ${text}
          </a>`;
}

renderer.image = (href, title, text) => {
  return `<img
            src="${href}"
            title="${title || text}"
            alt="${text}"
          >`;
}

function lazy(node, data) {
  const loaded = new Map();
  if (loaded.has(data.src)) {
    node.setAttribute('src', data.src);
  } else {
    const img = new Image();
    img.src = data.src;
    img.onload = () => {
      loaded.set(data.src, img);
      node.setAttribute('src', data.src);
    }
  }
  return {
    destroy() {},
  };
}

function srcName(src, extName) {
  const { dir, name, ext } = path.parse(src);
  return path.join(dir, `${name}-${extName}${ext}`);
}

export {
  renderer,
  lazy,
  srcName,
};
