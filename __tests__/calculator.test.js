const calculator = require("../scripts/calculator.js");

describe("calculator", () => {
  test("Should add two number", () => {
    expect(calculator(1, 2, "add")).toBe(3);
  });

  test("Should subtract two number", () => {
    expect(calculator(2, 1, "sub")).toBe(1);
  });

  test("Should Multiply two number", () => {
    expect(calculator(2, 2, "mult")).toBe(4);
  });

  test("Should Divide two number", () => {
    expect(calculator(2, 2, "div")).toBe(1);
  });
});
