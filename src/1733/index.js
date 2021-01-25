import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
const minimumTeachings = function (n, languages, friendships) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([n, languages, friendships]) =>
      minimumTeachings(n, languages, friendships)
    )
    .map(String);
}
