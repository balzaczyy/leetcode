/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = function (words) {
  words.sort((a, b) => a.length - b.length);
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let isUnique = true;
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].endsWith(words[i])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      ans += words[i].length + 1;
    }
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumLengthEncoding).map(String);
}
