import path from 'path';
import { readingTime } from 'reading-time-estimator';
import glob from 'globby';
import fs from 'fs';
import fm from 'front-matter';
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

export default function getBlogs(lang = 'en') {
  const fileNames = glob.sync(path.resolve(`./src/markdown/blog/**/*.${lang}.md`));
  let mds = fileNames.map(fileName => ({
    ...fm(fs.readFileSync(fileName).toString()),
    path: fileName,
  }));

  if (process.env.NODE_ENV === 'production') {
    mds = mds.filter(md => !md.attributes.draft);
  }

  const blogs = mds.map(md => ({
    ...md,
    metadata: md.attributes,
    html: marked(md.body, { renderer })
  }));

  return blogs.map(blog => {

    const blogDir = path.dirname(blog.path).split(path.sep);
    const slug = blogDir[blogDir.length - 1].slice(11);
    const created = blogDir[blogDir.length - 1].slice(0, 10);
    blog.metadata.created = created;
    return {
      ...blog,
      slug,
      ttr: Math.ceil(readingTime(blog.html, {wordsPerMinute: 200}).minutes),
    };
  }).sort((a, b) => {
    return (new Date(b.metadata.created)).getTime() - (new Date(a.metadata.created)).getTime();
  });
}
