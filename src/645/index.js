/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  let dup = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === i + 1) {
      i++;
    } else {
      if (nums[nums[i] - 1] === nums[i]) {
        dup = nums[i];
        i++;
      } else {
        const t = nums[i];
        nums[i] = nums[t - 1];
        nums[t - 1] = t;
      }
    }
  }
  // console.log(nums);
  const sum = nums.reduce((acc, cur) => acc + cur);
  const target = ((nums.length + 1) * nums.length) / 2;
  const x = target - sum + dup;
  return [dup, x];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(findErrorNums)
    .map((v) => JSON.stringify(v));
}
