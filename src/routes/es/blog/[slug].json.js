import getBlogs from '../../blog/_blogs.js'

export function get(req, res) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const blogs = getBlogs('es')
  const { slug } = req.params
  const blog = blogs.find(blog => blog.slug === slug)

  if (blog) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(JSON.stringify(blog))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(JSON.stringify({
      message: 'Not found',
    }))
  }
}
