// string
const name = "Michael";
const result = `Mijn naam is ${name}`;

// METHOD 1: Object initializer
const car = {
  brand: "Volkswagen",
  model: "Golf",
  // model = property met type string
}; // car = object

// log model
console.log(car.model);

// change model
car.model = "Polo";
console.log(car.model);
console.log(car);

// add color
console.log(car.color);
car.color = "black";
console.log(car.color);
console.log(car);

// add construction-year (hyphen) name
car["construction-year"] = "2000";
console.log(car);
// add dynamic property
const property = "horsePower";
const value = 150;
car[property] = value; // car["horsePower"] = 150;
console.log(car);

// delete construction-year
// WRONG
car["construction-year"] = undefined;
console.log(car);
// RIGHT
delete car["construction-year"];
console.log(car);

// METHOD 1: Object initializer
const person = {
  firstName: "Michael",
  lastName: "Vanderpoorten",
  toFullName: function () {
    // domme functie
    return "Michael Vanderpoorten";
  },
};
console.log(person.toFullName());
// enhance function
person.toFullName = function () {
  // return this.firstName + " " + this.lastName;
  console.log(this);
  return `${this.firstName} ${this.lastName}`;
};
console.log(person.toFullName());

// this does not work
person.age = {
  value: 29,
  toString: function () {
    // does not work!
    return `${this.firstName} is ${this.value}`;
  },
};
console.log(person);
console.log(person.age.value); // 29
console.log(person.age.toString()); // undefined is 29

const CustomMath = {
  PI: 3.141592653589793,
  random: function () {
    // todo
  },
  pow: function (base, root) {
    return base ** root;
  },
};
const random = Math.random() * 20;
console.log(Math.PI);
console.log(CustomMath.PI);

// String
let classroom = "B24";
console.log(classroom);
classroom = new String("B24");
console.log(classroom);
// in JS is het datatype String een object met verschillende methods
console.log(classroom.toLowerCase()); // b24
console.log(classroom.toUpperCase()); // B24
console.log(classroom.length); // 3
console.log(classroom.charAt(0)); // B
console.log(classroom.indexOf("B")); // 0
console.log(classroom.indexOf("b")); // -1 (case sensitive)
console.log(classroom.indexOf("C")); // -1
console.log(classroom.replace("B", "A")); // A24
console.log(classroom.replace("B2", "A1")); // A14

const sentence = "Dit is een zin met meerdere woorden";
console.log(sentence.split(" "));

const badString = "    Hoi  ";
console.log(badString.trim()); // Hoi
