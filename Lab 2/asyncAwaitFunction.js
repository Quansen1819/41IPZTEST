// asyncAwaitFunction.js
async function asyncFunction() {
  return Promise.resolve(42);
}

async function callerFunction() {
  const result = await asyncFunction();
  return result;
}

module.exports = { callerFunction };

// asyncAwaitFunction.test.js
const { callerFunction } = require('./asyncAwaitFunction');

test('callerFunction resolves to 42', async () => {
  const result = await callerFunction();
  expect(result).toBe(42);
});
