const strReverse = require("../scripts/reverseString");

describe("strReverse", () => {
  test("String should be reverse", () => {
    expect(strReverse("hello")).toBe("olleh");
  });

  test("String should be reverse", () => {
    expect(strReverse("hello world")).toBe("dlrow olleh");
  });

  test("String should be reverse", () => {
    expect(strReverse("hello!# ,...world")).toBe("dlrow..., #!olleh");
  });
});
