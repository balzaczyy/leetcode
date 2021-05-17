/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function (words) {
  function pre(a, b) {
    if (a.length + 1 !== b.length) {
      return false;
    }
    let i = 0,
      j = 0;
    while (i < a.length && j < b.length && j - i <= 1) {
      if (a[i] === b[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }
    return j - i <= 1;
  }
  words.sort((a, b) => a.length - b.length);
  const ans = Array(words.length).fill(1);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pre(words[j], words[i])) {
        ans[i] = Math.max(ans[i], ans[j] + 1);
      } else {
        ans[i] = Math.max(ans[i], ans[j]);
      }
    }
  }
  console.log(words);
  console.log(ans);
  return ans[words.length - 1];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(longestStrChain)
    .map((v) => JSON.stringify(v));
}
