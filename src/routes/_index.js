import index from '../markdown/index.en.md';
import indexEs from '../markdown/index.es.md';

export default function getIndex(lang = 'en') {
  switch (lang) {
  case 'en':
    return index;
  case 'es':
    return indexEs;
  }
}
