import * as blogs from '../../../markdown/blog/**/*.en.md';
import path from 'path';
import { readingTime } from 'reading-time-estimator';

export default blogs.default.map(blog => {

  const blogDir = path.dirname(blog.path).split(path.sep);
  const slug = blogDir[blogDir.length - 1];
  return {
    ...blog,
    slug,
    ttr: Math.ceil(readingTime(blog.html, {wordsPerMinute: 200}).minutes),
  };
});
