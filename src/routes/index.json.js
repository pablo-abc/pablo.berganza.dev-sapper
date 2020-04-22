import getIndex from './_index.js'

export async function get(req, res) {
  const index = await getIndex(req.query.lang)
  res.writeHead(200, {
    'Content-Type': 'application/json',
  }).end(JSON.stringify(index))
}
