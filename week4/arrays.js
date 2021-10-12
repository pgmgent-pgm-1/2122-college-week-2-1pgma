let players = new Array(5);
console.log(players.length); // 5
// [undefined, undefined, undefined, undefined, undefined];
console.log(players[0]);
players[0] = "Messi";
console.log(players);
// [Messi, undefined, undefined, undefined, undefined];
players[3] = "Busquets";
console.log(players);
// [Messi, undefined, undefined, Busquets, undefined];

// add one to end
players.push("Depay");
// [Messi, undefined, undefined, Busquets, undefined, Depay];
console.log(players);

// add one to start
players.unshift("De Jong");
console.log(players);

// combine two arrays
const bench = ["Dembele", "Ter Stegen"];
players = players.concat(bench);
console.log(players);

const deleted = players.splice(0, 2, "Braithwaite", "Picque");
console.log("deleted", deleted);
console.log("remaining", players);

const brands = ["Nike", "New Balance", "Mizuno", "Vans"];
const deletedItem = brands.pop();
// brands.shift() removes the first element
console.log(deletedItem); // "Vans"
console.log(brands); // ["Nike", "New Balance", "Mizuno"];

const brandsString = brands.join(" -- ");
console.log(brandsString);

brands.reverse(); // ["Mizuno", "New Balance", "Nike"]
console.log(brands);

brands.sort();
console.log(brands); // alfabetisch gesorteerd

// slice -> original array is not modified
const newBrands = brands.slice(0, 2);
console.log(newBrands);
console.log(brands);
