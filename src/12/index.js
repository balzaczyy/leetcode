/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const ans = [];
  for (let i = 0; i < Math.floor(num / 1000); i++) {
    ans.push("M");
  }
  num %= 1000;
  function decode(n, u, h, next) {
    switch (n) {
      case 0:
        return "";
      case 1:
      case 2:
      case 3:
        return Array(n).fill(u).join("");
      case 4:
        return u + h;
      case 5:
        return h;
      case 6:
      case 7:
      case 8:
        return (
          h +
          Array(n - 5)
            .fill(u)
            .join("")
        );
      case 9:
        return u + next;
    }
  }
  ans.push(decode(Math.floor(num / 100), "C", "D", "M"));
  num %= 100;
  ans.push(decode(Math.floor(num / 10), "X", "L", "C"));
  num %= 10;
  ans.push(decode(num, "I", "V", "X"));
  return ans.join("");
};

export default function run(input) {
  return input.map(Number).map(intToRoman);
}
