const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//5.
const {
  odds: { team1, x, team2 },
} = game;
console.log(team1, x, team2);
//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7.
const { team1: fc1, team2: fc2 } = game;
// console.log(fc1, fc2);
team1 < team2 && console.log(`${fc1} is more likely to win`);
team1 > team2 && console.log(`${fc2} is more likely to win`);
*/
// */
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Today's Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(`Average: ${average}`);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
