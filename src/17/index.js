/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const dict = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const ans = [];
  function fill(combo, pos) {
    if (pos === digits.length) {
      if (combo.length > 0) {
        ans.push(combo.join(""));
      }
      return;
    }
    for (const ch of dict[Number(digits[pos])]) {
      combo.push(ch);
      fill(combo, pos + 1);
      combo.pop();
    }
  }
  fill([], 0);
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(letterCombinations)
    .map((v) => JSON.stringify(v));
}
