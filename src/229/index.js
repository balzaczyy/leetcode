/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  if (nums.length > 0) {
    const threshold = Math.floor(nums.length / 3);
    let last = nums[0],
      count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === last) {
        count++;
      } else {
        if (count > threshold) {
          ans.push(last);
        }
        last = nums[i];
        count = 1;
      }
    }
    if (count > threshold) {
      ans.push(last);
    }
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(majorityElement)
    .map((v) => JSON.stringify(v));
}
