const pactum = require('pactum');

describe('Currency API Tests', () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';

  test('Get list of available currencies', async () => {
    await pactum.spec()
      .get(`${baseUrl}/currencies.json`)
      .expectStatus(200)
      .expectJsonLike({
        eur: "Euro",
        usd: "United States Dollar"
      });
  });

  test('Get exchange rates of Euro to other currencies', async () => {
    await pactum.spec()
      .get(`${baseUrl}/currencies/eur.json`)
      .expectStatus(200)
      .expectJsonLike({
        eur: {
          usd: pactum.matchers.like('number')
        }
      });
  });

  test('Get exchange rate of Euro to USD', async () => {
    await pactum.spec()
      .get(`${baseUrl}/currencies/eur/usd.json`)
      .expectStatus(200)
      .expectJson({
        date: pactum.matchers.string(),
        eur: {
          usd: pactum.matchers.number()
        }
      });
  });

  test('Request non-existent currency', async () => {
    await pactum.spec()
      .get(`${baseUrl}/currencies/nonexistent.json`)
      .expectStatus(404);
  });
});
