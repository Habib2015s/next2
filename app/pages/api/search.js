export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required.' });
  }

  const deezerURL = `https://api.deezer.com/search?q=${encodeURIComponent(q)}`;
  const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(deezerURL)}`;

  try {
    const response = await fetch(proxyURL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Deezer data.' });
  }
}
