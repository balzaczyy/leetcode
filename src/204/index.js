/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const ceil = Math.floor(Math.sqrt(n)) + 1;
  let sift = Array(ceil);
  sift[0] = false;
  sift[1] = false;
  let ans = 0;
  for (let i = 2; i < ceil; i++) {
    if (sift[i] === undefined) {
      sift[i] = true;
      sift[ans++] = i;
      for (let j = i; j < ceil; j += i) {
        sift[j] = false;
      }
    }
  }
  sift = sift.splice(0, ans);
  for (let i = ceil; i < n; i++) {
    if (sift.every((v) => i % v > 0)) {
      ans++;
    }
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(countPrimes).map(String);
}
