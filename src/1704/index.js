/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  const half = s.length / 2;
  // console.log(s.substring(0, half).replace(/[aeiou]/ig, ''));
  // console.log(s.substring(half).replace(/[aeiou]/ig, ''));
  return (
    s.substring(0, half).replace(/[aeiou]/gi, "").length ===
    s.substring(half).replace(/[aeiou]/gi, "").length
  );
};

export default function run(input) {
  return input.map(JSON.parse).map(halvesAreAlike).map(String);
}
