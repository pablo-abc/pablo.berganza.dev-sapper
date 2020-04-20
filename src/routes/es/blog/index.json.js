import getBlogs from '../../blog/_blogs.js';

export function get(req, res) {
  const blogs = getBlogs('es');

  const contents = JSON.stringify(blogs.map(blog => {
    return {
      title: blog.metadata.title,
      created: blog.metadata.created,
      slug: blog.slug,
      description: blog.metadata.description,
      ttr: blog.ttr,
    };
  }));

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
