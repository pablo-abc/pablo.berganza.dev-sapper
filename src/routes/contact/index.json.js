import getContact from './_contact.js'

export async function get(req, res) {
  const contact = await getContact(req.query.lang)
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify(contact))
}
