/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function (votes) {
  const persons = {};
  function vote(p, order) {
    let person = persons[p];
    if (!person) {
      person = Array(26).fill(0);
      persons[p] = person;
    }
    person[order] = (person[order] || 0) + 1;
  }
  votes.forEach((ticket) => {
    for (let j = 0; j < ticket.length; j++) {
      vote(ticket[j], j);
    }
  });
  const standings = Object.entries(persons).map(([name, orders]) => ({
    name,
    orders,
    tickets: orders.reduce((acc, cur) => acc + cur),
  }));
  standings.sort((a, b) => {
    const diff = b.tickets - a.tickets;
    if (diff !== 0) {
      return diff;
    }
    for (let i = 0; i < a.orders.length; i++) {
      const d = b.orders[i] - a.orders[i];
      if (d !== 0) {
        return d;
      }
    }
    return a.name.localeCompare(b.name);
  });
  return standings.map((v) => v.name).join("");
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(rankTeams)
    .map((v) => JSON.stringify(v));
}
