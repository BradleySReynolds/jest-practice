const isCap = require("../scripts/isCap");

describe("isCap", () => {
  test("first letter of string should be capitalized", () => {
    expect(isCap("hello")).toBe("Hello");
  });
});
