const nCols = 8;
const nRows = 8;
const character = "🚀";
const separator = " ";

let result = "";
for (let i = 0; i < nRows; i++) {
  for (let j = 0; j < nCols; j++) {
    result += character + separator;
  }
  result += "\n";
}
console.log(result);
