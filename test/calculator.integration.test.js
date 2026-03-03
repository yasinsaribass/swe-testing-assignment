const Calculator = require("../src/calculator");

describe("Calculator Integration Tests", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("performs multiple operations sequentially", () => {
    const result = calc.subtract(calc.add(5, 3), 2); 
    expect(result).toBe(6);
  });

  test("clear resets value to zero", () => {
    calc.add(10, 5);
    const cleared = calc.clear();
    expect(cleared).toBe(0);
  });
});