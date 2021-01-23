/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const s = Array(nums.length);
  s[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    s[i] = s[i - 1] + nums[i];
  }
  const total = s[s.length - 1];
  // special cases
  if (total - nums[0] === 0) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    if (s[i - 1] * 2 + nums[i] === total) {
      return i;
    }
  }
  return -1;
};

export default function run(input) {
  return input.map(JSON.parse).map(pivotIndex).map(String);
}
