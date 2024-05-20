// nestedApiFunction.js
const fetch = require('node-fetch');

async function fetchApiData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

async function callerFunction() {
  const data = await fetchApiData();
  return data;
}

module.exports = { callerFunction, fetchApiData };

// nestedApiFunction.test.js
const { callerFunction } = require('./nestedApiFunction');

test('callerFunction fetches and returns expected JSON object', async () => {
  const expectedData = { userId: 1, id: 1, title: 'delectus aut autem', completed: false };
  
  const mockFetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(expectedData),
  }));
  
  global.fetch = mockFetch;
  
  const data = await callerFunction();
  expect(data).toEqual(expectedData);
});
