/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function (s) {
  const ps = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    ps[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (j === i - 1) {
        if (s[j] === s[i]) {
          ps[j] = 2;
        }
      } else {
        if (ps[j + 1] + j + 1 === i && s[j] === s[i]) {
          ps[j] = ps[j + 1] + 2;
        }
      }
    }
  }
  // console.log(ps);
  let ans = 0;
  for (let i = 0; i < s.length; i += ps[i]) {
    ans++;
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(removePalindromeSub).map(String);
}
