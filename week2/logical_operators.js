// && = and
console.log(true && false); // false
console.log(false && false); // false
console.log(false && d); // false without error
console.log(true && true); // true

// || = or
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(true || d); // true without error
// console.log(d || true); // true with error

console.log(!true); // false
console.log(!false); // true

const x = 10;
console.log(x > 5 && x > 9); // true
console.log(!(x > 5 && x > 9)); // false

console.log(!"PGM"); // false

// ternaire operator
console.log(x > 3 ? "Groter" : "Kleiner"); // Groter
console.log(x > 3 && x < 20 ? "Groter" : "Kleiner");
console.log(true && false ? "Juist" : "Fout");
