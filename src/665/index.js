/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let count = 0,
    water = Math.min(nums[0], nums[1]);
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i] - nums[i + 1];
    if (diff > 0) {
      if (nums[i + 1] < water) {
        return false;
      }
      count++;
      if (count > 1) {
        return false;
      }
    } else {
      water = nums[i];
    }
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(checkPossibility).map(String);
}
