function calculator(num1, num2, operator) {
  if (operator === "add") return num1 + num2;
  if (operator === "sub") return num1 - num2;
  if (operator === "mult") return num1 * num2;
  if (operator === "div") return num1 / num2;
}

module.exports = calculator;
