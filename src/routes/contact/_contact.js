import contact from '../../../markdown/contact.en.md';
import contactEs from '../../../markdown/contact.es.md';

export default function getContact(lang = 'en') {
  switch (lang) {
  case 'en':
    return contact;
  case 'es':
    return contactEs
  }
}
