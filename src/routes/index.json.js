import index from './_index.js';

export function get(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  }).end(JSON.stringify(index));
}
