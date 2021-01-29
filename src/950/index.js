/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  // console.log(deck);
  const arr = Array(deck.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  // const arr = [2,13,3,11,5,17,7];
  // simulate now
  let len = arr.length;
  while (len > 0) {
    arr.push(arr.shift());
    len--;
    if (len > 1) {
      const t = arr.shift();
      arr.splice(len - 1, 0, t);
    }
  }
  // console.log(arr);
  const ans = Array(deck.length);
  arr.forEach((v, i) => {
    ans[v] = deck[i];
  });
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(deckRevealedIncreasing).map(JSON.stringify);
}
