const Calculator = require("../src/calculator");

describe("Calculator Unit Tests", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("adds two numbers", () => {
    expect(calc.add(5, 3)).toBe(8);
  });

  test("subtracts two numbers", () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(calc.multiply(6, 7)).toBe(42);
  });

  test("divides two numbers", () => {
    expect(calc.divide(8, 2)).toBe(4);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calc.divide(5, 0)).toThrow();
  });

  test("handles negative numbers", () => {
    expect(calc.add(-5, 3)).toBe(-2);
  });

  test("handles decimal numbers", () => {
    expect(calc.add(2.5, 0.5)).toBe(3);
  });

  test("handles large numbers", () => {
    expect(calc.multiply(1000000, 2)).toBe(2000000);
  });
});