/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  const area = (i, j) => (j - i) * Math.min(height[i], height[j]);
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, area(i, j));
    }
  }
  return max;
};

export default function run(input) {
  return input.map(JSON.parse).map(maxArea).map(String);
}
