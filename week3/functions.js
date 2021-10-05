let i = 0;

function sayHi(name) {
  console.log(`${name} says ${i++}`);
}
sayHi();
sayHi("Yordi");
sayHi("Travis");
sayHi("Jef");
sayHi("Lotte");

function sayHello() {
  console.log("hello");
}
sayHello();

function add(i) {
  console.log(i + i);
}
add(1);
add(2);
add(3);

sayHiOption1();
function sayHiOption1() {
  console.log("Hello");
}
// alternatief
// sayHiOption2(); -> WERKT NIET!
const sayHiOption2 = function () {
  console.log("Hello 2");
};
sayHiOption2();

// primitives => BY VALUE
// 1
let a = 1;
// 3
function addSelf(i) {
  i = i + i;
  console.log(i);
}
// 2
addSelf(a);
console.log(a);

// non-primitives => BY REFERENCE
let car = {
  doors: 4,
  driving: true,
};

function multiplyVehicleDoors(vehicle) {
  vehicle.doors *= 2;
  console.log(vehicle);
}

multiplyVehicleDoors(car);
console.log(car);

function multiplyDoors(doors) {
  doors *= 2;
  console.log(doors);
}
multiplyDoors(car.doors);
console.log(car);

multiplyDoors(); // NaN = Not a Number (undefined * 2)

// default value
function multiplyDoorsAlt(doors = 2) {
  console.log(doors * 2);
}
multiplyDoorsAlt();
multiplyDoorsAlt(3);

// multiple params
function sum(number1, number2, number3, number4) {
  console.log(number1 + number2 + number3 + number4);
}

const result = sum(1, 5, 3);
console.log(result);

function sumReturn(number1, number2, number3, number4) {
  const result = number1 + number2 + number3 + number4;
  return result;
}

const result2 = sumReturn(1, 5, 3, 10);
console.log(result2);
