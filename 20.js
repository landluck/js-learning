
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (map[char] !== undefined) {
      stack.push(char);
    } else {
      const endChar = stack.pop();

      if (map[endChar] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"))