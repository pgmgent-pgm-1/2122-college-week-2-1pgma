// if
const x = 10;
let color;
if (x > 5) {
  color = "orange";
} else if (x >= 10) {
  color = "red";
} else {
  color = "blauw";
}
console.log(color);

switch (x) {
  case 10:
    color = "red";
    break;
  case 5:
    color = "blue";
    break;
  default:
    color = "orange";
    break;
}

console.log(color); // red
