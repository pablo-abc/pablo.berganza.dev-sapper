import getBlogs from '../_blogs.js';

const blogs = getBlogs('en');

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { tag } = req.params;
  const foundBlogs = blogs.filter(blog => {
    return blog.metadata.tags.includes(tag)
  });

  const contents = JSON.stringify(foundBlogs.map(blog => {
    return {
      title: blog.metadata.title,
      created: blog.metadata.created,
      slug: blog.slug,
      introduction: blog.metadata.introduction,
      ttr: blog.ttr,
    };
  }));

  if (contents.length > 0) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(contents);
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
