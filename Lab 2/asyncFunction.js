// asyncFunction.js
async function asyncFunction() {
  return Promise.resolve('hello world');
}

module.exports = { asyncFunction };

// asyncFunction.test.js
const { asyncFunction } = require('./asyncFunction');

test('asyncFunction resolves to "hello world"', () => {
  return expect(asyncFunction()).resolves.toBe('hello world');
});
