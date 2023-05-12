function caesar(str, shift, newStr = "") {
  const translate = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  for (let i = 0; i < str.length; i++) {
    if (!Object.values(translate).includes(str[i])) {
      newStr += str[i];
    } else {
      let index = Object.values(translate).indexOf(str[i]) + 1;
      if (index + shift <= 26) {
        newStr += translate[index + shift];
      } else {
        newStr += translate[Math.abs(26 - (index + shift))];
      }
    }
  }

  return newStr;
}

module.exports = caesar;
