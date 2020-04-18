import getBlogs from './_blogs.js';

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const blogs = getBlogs(req.query.lang);
  const { slug } = req.params;
  const blog = blogs.find(blog => blog.slug === slug);

  if (blog) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(blog));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
