const pactum = require('pactum');

describe('Dictionary API Tests', () => {
  const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  const words = ['example', 'test', 'automation', 'jest', 'pactum'];

  words.forEach(word => {
    test(`Check usage examples for word: ${word}`, async () => {
      await pactum.spec()
        .get(`${baseUrl}/${word}`)
        .expectStatus(200)
        .expectJsonLike([
          {
            meanings: [
              {
                definitions: [
                  {
                    example: pactum.matchers.string()
                  }
                ]
              }
            ]
          }
        ]);
    });
  });
});
