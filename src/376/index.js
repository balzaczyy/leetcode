/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const len = nums.length;
  const ans = Array(len);
  for (let i = 0; i < len; i++) {
    let h = 1,
      l = 1;
    for (let j = 0; j < i; j++) {
      if (j === 0) {
        if (nums[i] > nums[j]) {
          h = Math.max(h, ans[j][0] + 1);
        } else if (nums[i] < nums[j]) {
          l = Math.max(l, ans[j][1] + 1);
        }
      } else {
        if (nums[i] > nums[j] && nums[j] < nums[j - 1]) {
          h = Math.max(h, ans[j][1] + 1);
        } else if (nums[i] < nums[j] && nums[j] > nums[j - 1]) {
          l = Math.max(l, ans[j][0] + 1);
        }
      }
    }
    ans[i] = [h, l];
  }
  return Math.max(ans[len - 1][0], ans[len - 1][1]);
};

export default function run(input) {
  return input.map(JSON.parse).map(wiggleMaxLength).map(String);
}
