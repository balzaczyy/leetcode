/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function (S) {
  const parts = [];
  let depth = 0,
    from = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      depth++;
    } else {
      depth--;
      if (depth === 0) {
        parts.push(S.substring(from, i + 1));
        from = i + 1;
      }
    }
  }
  const ans = parts.map((v) => v.substring(1, v.length - 1));
  return ans.join("");
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(removeOuterParentheses)
    .map((v) => JSON.stringify(v));
}
