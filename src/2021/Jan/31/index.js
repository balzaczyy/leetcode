/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  let found = -1;
  for (let i = nums.length - 2; i >= 0 && found < 0; i--) {
    let next = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && (next < 0 || nums[j] < nums[next])) {
        next = j;
      }
    }
    if (next >= 0) {
      const t = nums[i];
      nums[i] = nums[next];
      nums[next] = t;
      found = i;
    }
  }

  if (found >= 0) {
    if (found < nums.length - 1) {
      nums
        .slice(found + 1)
        .sort((a, b) => a - b)
        .forEach((v, i) => {
          nums[found + 1 + i] = v;
        });
    }
  } else {
    nums.sort((a, b) => a - b);
  }
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map((nums) => {
      nextPermutation(nums);
      return nums;
    })
    .map((v) => JSON.stringify(v));
}
