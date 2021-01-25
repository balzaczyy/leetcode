import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
const minimumTeachings = function (n, languages, friendships) {
  const langSet = languages.map((v) =>
    v.reduce((acc, cur) => {
      acc.add(cur);
      return acc;
    }, new Set())
  );
  // console.log(langSet);
  const keyFriendships = friendships.filter((pair) => {
    const p1 = pair[0] - 1,
      p2 = pair[1] - 1;
    return intersection(langSet[p1], langSet[p2]).size === 0;
  });
  // console.log(keyFriendships);

  function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }

  let ans = -1;
  function search(lang, pos = 0, cost = 0) {
    if (pos === keyFriendships.length) {
      if (ans === -1 || cost < ans) {
        ans = cost;
        // console.log(lang, cost);
        // console.log('DEBUG');
        // for (let i = 0; i < keyFriendships.length; i ++) {
        //   const common = intersection(langSet[keyFriendships[i][0]-1], langSet[keyFriendships[i][1]-1]);
        //   console.log(keyFriendships[i], common);
        // }
      }
      return;
    }

    const pair = keyFriendships[pos];
    const p1 = pair[0] - 1,
      p2 = pair[1] - 1;
    const p1HasLang = langSet[p1].has(lang);
    const p2HasLang = langSet[p2].has(lang);
    if (p1HasLang && p2HasLang) {
      search(lang, pos + 1, cost);
    } else if (p2HasLang && !p1HasLang) {
      langSet[p1].add(lang);
      search(lang, pos + 1, cost + 1);
      langSet[p1].delete(lang);
    } else if (p1HasLang && !p2HasLang) {
      langSet[p2].add(lang);
      search(lang, pos + 1, cost + 1);
      langSet[p2].delete(lang);
    } else {
      langSet[p1].add(lang);
      langSet[p2].add(lang);
      search(lang, pos + 1, cost + 2);
      langSet[p1].delete(lang);
      langSet[p2].delete(lang);
    }
  }
  for (let i = 1; i <= n; i++) {
    search(i);
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([n, languages, friendships]) =>
      minimumTeachings(n, languages, friendships)
    )
    .map(String);
}
