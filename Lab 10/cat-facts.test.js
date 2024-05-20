const pactum = require('pactum');

describe('Cat Facts API Tests', () => {
  const baseUrl = 'https://catfact.ninja';

  test('Check structure of breed response', async () => {
    await pactum.spec()
      .get(`${baseUrl}/breeds`)
      .expectStatus(200)
      .expectJsonLike({
        data: [
          {
            breed: pactum.matchers.string(),
            country: pactum.matchers.string(),
            origin: pactum.matchers.string()
          }
        ]
      });
  });

  test('Check structure of fact response', async () => {
    await pactum.spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)
      .expectJsonLike({
        fact: pactum.matchers.string(),
        length: pactum.matchers.number()
      });
  });

  test('Check structure of facts response', async () => {
    await pactum.spec()
      .get(`${baseUrl}/facts`)
      .expectStatus(200)
      .expectJsonLike({
        data: [
          {
            fact: pactum.matchers.string(),
            length: pactum.matchers.number()
          }
        ]
      });
  });

  test('Check correct working of limit parameter', async () => {
    await pactum.spec()
      .get(`${baseUrl}/facts?limit=5`)
      .expectStatus(200)
      .expectJsonLike({
        data: pactum.matchers.arrayLike(5)
      });
  });

  test('Check correct working of max_length parameter', async () => {
    await pactum.spec()
      .get(`${baseUrl}/facts?max_length=50`)
      .expectStatus(200)
      .returns('data')
      .eachLike('length', length => length <= 50);
  });

  test('Check headers presence and values', async () => {
    await pactum.spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)
      .expectHeader('server', pactum.matchers.string())
      .expectHeader('cache-control', pactum.matchers.string())
      .expectHeader('date', pactum.matchers.string());
  });

  test('Check fact and length field types', async () => {
    const response = await pactum.spec()
      .get(`${baseUrl}/fact`)
      .expectStatus(200)
      .returns();

    expect(typeof response.fact).toBe('string');
    expect(typeof response.length).toBe('number');
  });
});
