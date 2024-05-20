const pactum = require('pactum');

describe('Bank Holidays API Tests', () => {
  const url = 'https://www.gov.uk/bank-holidays.json';

  test('Get the number of bank holidays', async () => {
    const response = await pactum.spec()
      .get(url)
      .expectStatus(200)
      .returns('england-and-wales.events');

    expect(response.length).toBeGreaterThan(0);
  });

  test('Check Easter date', async () => {
    const response = await pactum.spec()
      .get(url)
      .expectStatus(200)
      .returns('england-and-wales.events');

    const easter = response.find(event => event.title.includes('Easter'));
    expect(easter).toBeDefined();
    expect(easter.date).toMatch(/\d{4}-\d{2}-\d{2}/);
  });
});
