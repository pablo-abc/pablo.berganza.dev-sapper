import getBlogs from '../../../blog/_blogs.js';

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const blogs = getBlogs('es');
  const { tag } = req.params;
  const foundBlogs = blogs.filter(blog => {
    return blog.metadata.tags.includes(tag)
  });

  const contents = foundBlogs.map(blog => {
    return {
      title: blog.metadata.title,
      created: blog.metadata.created,
      slug: blog.slug,
      description: blog.metadata.description,
      ttr: blog.ttr,
    };
  });

  if (contents.length > 0) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(contents));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
