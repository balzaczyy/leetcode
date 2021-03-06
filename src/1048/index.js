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
  let res = 0;
  const ans = Array(words.length).fill(1);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pre(words[j], words[i])) {
        ans[i] = Math.max(ans[i], ans[j] + 1);
      }
    }
    res = Math.max(res, ans[i]);
  }
  // console.log(words);
  // console.log(ans);
  return res;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(longestStrChain)
    .map((v) => JSON.stringify(v));
}
