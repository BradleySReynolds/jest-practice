const caesar = require("../scripts/caesar");

describe("caesar", () => {
  test("Should return accurate shift", () => {
    expect(caesar("abc", 2)).toBe("cde");
  });

  test("Should return accurate shift", () => {
    expect(caesar("xyz", 3)).toBe("abc");
  });

  test("Should return accurate shift", () => {
    expect(caesar("bradley", 1)).toBe("csbemfz");
  });
});
