export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, this is a simple message!' });
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
