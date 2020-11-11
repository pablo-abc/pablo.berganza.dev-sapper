import path from 'path'
import { readingTime } from 'reading-time-estimator'
import glob from 'globby'
import fs from 'fs'
import fm from 'front-matter'
import marked from 'marked'
import { renderer } from '../../helpers.js'

export default function getBlogs(lang = 'en') {
  const fileNames = glob.sync(
    path.resolve(`./src/markdown/blog/**/*.${lang}.md`),
  )
  const svxFileNames = glob.sync(path.resolve('./src/routes/blog/**/*.svx'))

  let mds = fileNames.map((fileName) => ({
    ...fm(fs.readFileSync(fileName).toString()),
    path: fileName,
  }))
  let svxs = svxFileNames.map((fileName) => ({
    ...fm(fs.readFileSync(fileName).toString()),
    path: fileName,
  }))

  if (process.env.NODE_ENV === 'production') {
    mds = mds.filter((md) => !md.attributes.draft)
    svxs = svxs.filter((svx) => !svx.attributes.draft)
  }

  const blogs = mds.map((md) => {
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
  const svxblogs = svxs.map((svx) => {
    const blogDir = path.dirname(svx.path).split(path.sep)
    const slug = blogDir[blogDir.length - 1]
    return {
      ...svx,
      ttr: Math.ceil(readingTime(svx.body, { wordsPerMinute: 200 }).minutes),
      slug,
    }
  })

  blogs.push(...svxblogs)

  return blogs.sort((a, b) => {
    return (
      new Date(b.attributes.created).getTime() -
      new Date(a.attributes.created).getTime()
    )
  })
}
