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

const fileNames = glob.sync(path.resolve('./markdown/blog/**/*.en.md'));
const mds = fileNames.map(fileName => ({
  ...fm(fs.readFileSync(fileName).toString()),
  path: fileName,
}));
const blogs = mds.map(md => ({
  ...md,
  metadata: md.attributes,
  html: marked(md.body, { renderer })
}));

export default blogs.map(blog => {

  const blogDir = path.dirname(blog.path).split(path.sep);
  const slug = blogDir[blogDir.length - 1];
  return {
    ...blog,
    slug,
    ttr: Math.ceil(readingTime(blog.html, {wordsPerMinute: 200}).minutes),
  };
}).sort((a, b) => {
  return (new Date(b.metadata.created)).getTime() - (new Date(a.metadata.created)).getTime();
});
