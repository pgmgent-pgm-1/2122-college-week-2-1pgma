const players = [
  "Eden Hazard",
  "Kevin De Bruyne",
  "Romelu Lukaku",
  "Thibault Courtois",
  "Dries Mertens",
];
// log elementen van array
console.log(players);

// definieer een variabele tempStr met als waarde een lege string
let tempStr = "";
for (let i = 0; i < players.length; i++) {
  tempStr += `Player ${i + 1}: ${players[i]}\n`;
}
console.log(tempStr);

tempStr = "";
players.forEach(function (player, index) {
  tempStr += `Player ${index + 1}: ${player}\n`;
});
console.log(tempStr);

tempStr = "";
let p = 1;
for (const player of players) {
  tempStr += `Player ${p}: ${player}\n`;
  p++;
}
console.log(tempStr);
