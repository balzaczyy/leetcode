/**
 * @param {number} n
 * @return {number}
 */
const minOperations = function (n) {
  let ans = 0;
  for (let i = 0; i < n / 2; i++) {
    ans += n - 2 * i - 1;
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(minOperations).map(String);
}
