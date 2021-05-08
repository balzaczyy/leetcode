/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  const len = nums.length;
  const ans = Array(len);
  ans[0] = 0;
  for (let i = 1; i < len; i++) {
    ans[i] = ans[i - 1] + 1;
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        ans[i] = Math.min(ans[i], ans[j] + 1);
      }
    }
  }
  return ans[len - 1];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(jump)
    .map((v) => JSON.stringify(v));
}
