const e = [10, 3, 5];
console.log(e);
console.log(e[0]);
console.log(e[1]);
console.log("Length", e.length);
console.log(e[e.length - 1]);

// object
const person = {
  name: "Michael",
};

// add number
e.push(6);
console.log(e);

e.push("Test");
console.log(e);

// for-loop
for (let i = 0; i < e.length; i++) {
  // code block
  console.log(i, e[i]);
}

// 10.000 Hallo's
for (let j = 0; j <= 10000; j++) {
  // console.log("Hallo");
}

// for of
const words = ["Hallo,", "Sander", "heeft", "problemen"];
let sentence = "";
for (const word of words) {
  sentence += word + " ";
  console.log(sentence);
}
console.log(sentence);

// for in
const saf = {
  brand: "L&M",
  rolled: true,
  longFilter: false,
};

for (const property in saf) {
  console.log(`${property} is ${saf[property]}`);
}

const car = {
  brand: "Volkswagen",
  model: "Golf GTi",
  color: "matte_black",
  constructionYear: 2017,
  topSpeed: 259,
};

let result = "";
for (const property in car) {
  result += `${property} is ${car[property]}, \n`;
}
console.log(result);

// while -> minimum 0 times
let i = 0;
while (i <= 100) {
  if (i === 20) {
    i += 20;
    continue;
  }
  i += 10;
  console.log(i);
  if (i === 50) {
    break;
  }
}

// do while -> minimum 1 time
i = 0;
do {
  i += 10;
  console.log(i);
} while (i < 100);
