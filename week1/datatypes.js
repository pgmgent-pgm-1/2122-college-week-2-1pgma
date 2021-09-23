let variable; // undefined
console.log(variable); // undefined

if (variable === undefined) {
  // not not undefined
  console.log("Variable is NOT UNDEFINED");
}

variable = "abc"; // string

if (variable) {
  // not undefined (= defined)
  console.log("Variable is DEFINED");
}

let amount = 101; // number
let amount2 = 3.14; // number
let firstName = 10; // number
const isDark = true; // boolean
let abc = null; // null

firstName = "Michael"; // string
firstName = firstName.toLowerCase();
console.log(firstName); // Michael
firstName = null;
console.log(firstName); // null

console.log(amount);

if (amount > 100) {
  console.log("Groter dan 100");
} else if (amount > 50) {
  console.log("Groter aan 50");
} else {
  console.log("Kleiner of gelijk aan 50");
}

// object
const person = {
  name: "Michael", // string
  age: 29, // number
  address: {
    // object
    street: {
      // object
      number: 2, // number
    },
  },
};

console.log(person.address.street.number); // 2

// strings
const lastName = "Vanderpoorten";
const name = "Michael";

// optie 1
const fullName = "Ik ben " + name + " " + lastName;
console.log(fullName);
// optie 2
const fullName2 = `Ik ben ${name} ${lastName}`;
console.log(fullName2);
