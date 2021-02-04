/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
  if (num === 0) {
    return "0";
  } else if (num < 0) {
    return "-" + convertToBase7(-num);
  }
  const ans = [];
  while (num > 0) {
    const d = num % 7;
    ans.push(d);
    num = Math.floor(num / 7);
  }
  ans.reverse();
  return ans.join("");
};

export default function run(input) {
  return input.map(JSON.parse).map(convertToBase7);
}
