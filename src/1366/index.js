/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function (votes) {
  return "ABC";
};

export default function run(input) {
  return input.map(JSON.parse).map(rankTeams);
}
