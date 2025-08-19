const request = require('supertest');
const { app } = require('../server');

describe('Data products API', () => {
  test('create and search', async () => {
    const product = { name: 'orders', description: 'Order events' };
    const resCreate = await request(app).post('/data-products').send(product);
    expect(resCreate.statusCode).toBe(201);
    const resSearch = await request(app).get('/data-products?q=ord');
    expect(resSearch.statusCode).toBe(200);
    expect(resSearch.body.length).toBe(1);
    expect(resSearch.body[0].name).toBe('orders');
  });
});
