const express = require('express');
const { randomUUID } = require('crypto');
const { registry } = require('./schemaRegistry');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const dataProducts = [];

app.post('/data-products', (req, res) => {
  const id = randomUUID();
  const product = { id, ...req.body };
  dataProducts.push(product);
  res.status(201).json(product);
});

app.get('/data-products', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = dataProducts.filter(p => !q || p.name.toLowerCase().includes(q));
  res.json(results);
});

app.get('/schemas/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const schema = await registry.getSchema(id);
    res.json({ id, schema });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { app };
