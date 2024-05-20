// rejectFunction.js
async function rejectFunction() {
  return Promise.reject(new Error('Something went wrong'));
}

module.exports = { rejectFunction };

// rejectFunction.test.js
const { rejectFunction } = require('./rejectFunction');

test('rejectFunction rejects with error', () => {
  return expect(rejectFunction()).rejects.toThrow('Something went wrong');
});
