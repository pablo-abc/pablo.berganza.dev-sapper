import getBlogs from '../../../blog/_blogs.js'

export function get(req, res) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const blogs = getBlogs('es')
  const { tag } = req.params
  const foundBlogs = blogs.filter(blog => {
    return blog.attributes.tags.includes(tag)
  })

  const contents = foundBlogs.map(blog => {
    return {
      title: blog.attributes.title,
      created: blog.attributes.created,
      slug: blog.slug,
      description: blog.attributes.description,
      ttr: blog.ttr,
    }
  })

  if (contents.length > 0) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    res.end(JSON.stringify(contents))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    })

    res.end(JSON.stringify({
      message: 'Not found'
    }))
  }
}
