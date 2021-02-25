/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
  let from = -1,
    to = -1,
    max = 0,
    asc = true;
  for (let i = 1; i < nums.length; i++) {
    if (asc) {
      if (nums[i] >= nums[max]) {
        max = i;
      } else {
        asc = false;

        let j = i - 1;
        while (j >= 0 && nums[j] > nums[i]) {
          j--;
        }
        from = from >= 0 ? Math.min(from, j + 1) : j + 1;
        to = i;
      }
    } else {
      if (nums[i] >= nums[max]) {
        asc = true;
        max = i;
      } else if (nums[i] >= nums[to]) {
        to = i;
      } else {
        let j = from - 1;
        while (j >= 0 && nums[j] > nums[i]) {
          j--;
        }
        from = Math.min(from, j + 1);
        to = i;
      }
    }
    // console.log(from, to, max);
  }
  // console.log('done')
  return from === to ? 0 : to + 1 - from;
};

export default function run(input) {
  return input.map(JSON.parse).map(findUnsortedSubarray).map(String);
}
