const analyzeArray = require("../scripts/analyzeArray");

describe("analyzeArray", () => {
  test("Should return correct length", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).length).toBe(7);
  });

  test("Should return correct max value", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).max).toBe(7);
  });

  test("Should return correct min value", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).min).toBe(1);
  });

  test("Should return correct average", () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
  });
});
