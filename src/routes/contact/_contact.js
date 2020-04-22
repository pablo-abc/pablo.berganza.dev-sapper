import path from 'path'
import { readMarkdownFile } from '../../server-helpers.js'

export default async function getContact(lang = 'en') {
  const filePath = path.resolve(`./src/markdown/contact.${lang}.md`)
  return readMarkdownFile(filePath)
}
