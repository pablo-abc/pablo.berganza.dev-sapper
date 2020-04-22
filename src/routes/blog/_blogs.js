import path from 'path'
import { readingTime } from 'reading-time-estimator'
import glob from 'globby'
import fs from 'fs'
import fm from 'front-matter'
import marked from 'marked'
import { renderer } from '../../helpers.js'

export default function getBlogs(lang = 'en') {
  const fileNames = glob.sync(path.resolve(`./src/markdown/blog/**/*.${lang}.md`))
  let mds = fileNames.map(fileName => ({
    ...fm(fs.readFileSync(fileName).toString()),
    path: fileName,
  }))

  if (process.env.NODE_ENV === 'production') {
    mds = mds.filter(md => !md.attributes.draft)
  }

  const blogs = mds.map(md => {
    const blogDir = path.dirname(md.path).split(path.sep)
    const slug = blogDir[blogDir.length - 1].slice(11)
    const created = blogDir[blogDir.length - 1].slice(0, 10)
    md.attributes.created = created
    return {
      ...md,
      html: marked(md.body, { renderer }),
      ttr: Math.ceil(readingTime(md.body, { wordsPerMinute: 200 }).minutes),
      slug,
    }
  })

  return blogs.sort((a, b) => {
    return (new Date(b.attributes.created)).getTime() - (new Date(a.attributes.created)).getTime()
  })
}
