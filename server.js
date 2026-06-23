const express = require('express');
const app = express();
const PORT = parseInt(process.env.PORT || '8000');
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.json({ message: 'Arxentra Demo Node.js App', status: 'running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'arxentra-demo-nodejs' });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
