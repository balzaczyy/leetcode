/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let ans = 0,
    count = 0;
  nums.forEach((v, i) => {
    if (v === 0) {
      ans = Math.max(ans, count);
      count = 0;
    } else {
      count++;
    }
  });
  return Math.max(ans, count);
};

export default function run(input) {
  return input.map(JSON.parse).map(findMaxConsecutiveOnes).map(String);
}
