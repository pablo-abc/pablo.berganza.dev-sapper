import posts from './_posts.js';
import blogs from './_blogs.js';

const contents = JSON.stringify(blogs.map(blog => {
  return {
    title: blog.metadata.title,
    created: blog.metadata.created,
    slug: blog.slug,
    introduction: blog.metadata.introduction,
    ttr: blog.ttr,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
