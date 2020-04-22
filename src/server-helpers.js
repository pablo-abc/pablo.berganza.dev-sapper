import fs from 'fs'
import { promisify } from 'util'
import fm from 'front-matter'
import { renderer } from './helpers.js'
import marked from 'marked'

export async function readMarkdownFile(filePath) {
  const readFile = promisify(fs.readFile)
  const md = fm((await readFile(filePath)).toString())
  md.path = filePath
  md.html = marked(md.body, { renderer })
  return md
}
