/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  if (nums.length < 2) {
    return 0;
  }
  let max, sec;
  if (nums[0] > nums[1]) {
    max = 0;
    sec = 1;
  } else {
    max = 1;
    sec = 0;
  }
  for (let i = 2; i < nums.length; i++) {
    const v = nums[i];
    if (v > nums[max]) {
      sec = max;
      max = i;
    } else if (v > nums[sec]) {
      sec = i;
    }
  }
  return nums[max] >= nums[sec] * 2 ? max : -1;
};

export default function run(input) {
  return input.map(JSON.parse).map(dominantIndex).map(String);
}
