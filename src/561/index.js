/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(arrayPairSum).map(String);
}
