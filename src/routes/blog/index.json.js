import getBlogs from './_blogs.js';

export function get(req, res) {
  const blogs = getBlogs(req.query.lang);

  const contents = JSON.stringify(blogs.map(blog => {
    return {
      title: blog.metadata.title,
      created: blog.metadata.created,
      slug: blog.slug,
      introduction: blog.metadata.introduction,
      ttr: blog.ttr,
    };
  }));

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
