import path from 'path';
import { readMarkdownFile } from '../server-helpers.js';

export default async function getIndex(lang = 'en') {
  const filePath = path.resolve(`./src/markdown/index.${lang}.md`);
  return readMarkdownFile(filePath);
}
