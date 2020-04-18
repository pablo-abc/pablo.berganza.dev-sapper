import getIndex from '../_index.js';

export function get(req, res, next) {
  const index = getIndex('es');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  }).end(JSON.stringify(index));
}
