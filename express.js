const express = require('express');
const { createClient } = require('@sanity/client');
const app = express();

const client = createClient({
  projectId: 'zve5joln',
  dataset: 'data',
  useCdn: false // true si vous voulez utiliser le CDN
});

app.set('view engine', 'ejs');

app.get('/tva', async (req, res) => {
  const query = `*[_type == "tva"] | order(publishedAt desc)`;
  const tvaPosts = await client.fetch(query);
  res.render('tva', { tvaPosts });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
