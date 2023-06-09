# The Basic of Jest

### Bradley Reynolds

### Naming Conventions

Jest will move through your file directory looking for files with a specific extension. By default, Jest looks for files with the end of `[random-name].test.js` or `[random-name].spec.js`, but this can be changed by creating a `jest.config.js` file.

Furthmore, testing in Jest is a great opportunity to practice 'modulizing' your code, so you can keep general scripts in one folder and your testing scripts in another folder name `__tests__` if you'd like Jest to pick it up by defualt.

### Basic Usage of Jest

- `describe('name of variable', callback)` - This method allows you to group tests for a specific function

- `test('message', callback)` - This method calls a test that contains a message that describe the test being done and the callback, which will be a function that contains one or more assertions.

- `expect(function)` - creates an assertion that contains a value that will be tested.

`toBe(value)` - this method is compared to the `expect(function)`'s return and gives either a red or green return based on whether or not the assertion is true/false.

### examples

This example tests that a function that turns the first letter of a string to a capital letter works.

```
// isCap.js
function isCap(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

module.exports = isCap;

// isCap.test.js
const isCap = require("../scripts/isCap");

describe("isCap", () => {
  test("first letter of string should be capitalized", () => {
    expect(isCap("hello")).toBe("Hello");
  });
});
```

More than likely you will want to do more than one test so you can nest tests in the `describe()` method. Here is an example doing that for a simple calculator script:

```
// calculator.js
function calculator(num1, num2, operator) {
  if (operator === "add") return num1 + num2;
  if (operator === "sub") return num1 - num2;
  if (operator === "mult") return num1 * num2;
  if (operator === "div") return num1 / num2;
}

module.exports = calculator;

// calculator.test.js
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
```
