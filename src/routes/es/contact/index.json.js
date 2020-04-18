import getContact from '../../contact/_contact.js';

export function get(req, res, next) {
  const contact = getContact('es');
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(contact));
}
