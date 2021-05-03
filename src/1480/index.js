/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const ans = Array(nums.length);
  ans[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] + nums[i];
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(runningSum)
    .map((v) => JSON.stringify(v));
}
