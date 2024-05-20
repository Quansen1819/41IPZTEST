//Kozachynskyi_41IPZ
const {
    add,
    subtract,
    multiply,
    divide,
  } = require('./math_operations');
  
  // Тести для функції додавання
  test("додає два додатні числа", () => {
    expect(add(3, 5)).toBe(8);
  });
  
  test("додає від`ємне та додатнє число", () => {
    expect(add(-3, 5)).toBe(2);
  });
  
  // Тести для функції віднімання
  test('віднімає два додатні числа', () => {
    expect(subtract(8, 3)).toBe(5);
  });
  
  test("віднімає від`ємне число з додатнім", () => {
    expect(subtract(5, -3)).toBe(8);
  });
  
  // Тести для функції множення
  test('множить два додатні числа', () => {
    expect(multiply(4, 7)).toBe(28);
  });
  
  test("множить від`ємне та додатнє число", () => {
    expect(multiply(-4, 7)).toBe(-28);
  });
  
  // Тести для функції ділення
  test('ділить одне число на інше', () => {
    expect(divide(10, 2)).toBe(5);
  });
  
  test("ділить від`ємне число на додатнє", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
  
  test('ділить додатне число на відємне', () => {
    expect(divide(10, -2)).toBe(-5);
  });
  
  test('ділить число на 0, очікується помилка', () => {
    expect(() => { divide(5, 0) }).toThrow("Ділення на нуль неможливе.");
  });
  