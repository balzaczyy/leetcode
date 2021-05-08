/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  if (nums.length <= 2) {
    return true;
  }

  let count = 0;
  let water = Math.min(nums[0], nums[1]);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (water <= nums[i + 1]) {
        // remove element i
      } else if (i + 1 === nums.length - 1) {
        // remove last element
      } else if (nums[i] <= nums[i + 2]) {
        // remove element i+1
        water = nums[i];
      } else {
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
