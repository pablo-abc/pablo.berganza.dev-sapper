import getBlogs from './_blogs.js'

export function get(req, res) {
  const blogs = getBlogs(req.query.lang)

  const contents = JSON.stringify(blogs.map(blog => {
    return {
      title: blog.attributes.title,
      created: blog.attributes.created,
      slug: blog.slug,
      description: blog.attributes.description,
      ttr: blog.ttr,
    }
  }))

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}
