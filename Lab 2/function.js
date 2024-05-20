// function.js
function function1() {
  function2({ name: 'John', lastname: 'Doe' });
}

function function2(args) {
  // Some implementation
}

module.exports = { function1, function2 };

// function.test.js
const { function1, function2 } = require('./function');
const jest = require('jest-mock');

test('function1 calls function2 with name=John and lastname=Doe', () => {
  const mockFunction2 = jest.fn();
  
  // Replace the original function2 with the mock
  function2 = mockFunction2;
  
  function1();
  
  expect(mockFunction2).toHaveBeenCalledWith({ name: 'John', lastname: 'Doe' });
});
