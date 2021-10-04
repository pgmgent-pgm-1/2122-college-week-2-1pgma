const nRows = 7;
const nCols = 7;
const separator = " ";
const character = "⛱";

if (nRows === nCols) {
  let message = "";
  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nCols; j++) {
      if (i === 0 || i === nRows - 1) {
        message += character + separator;
      } else if (j === 0 || j === nCols - 1) {
        message += character + separator;
      } else if (i === j || j === nCols - 1 - i) {
        message += character + separator;
      } else {
        message += separator + separator;
      }
    }
    message += "\n";
  }
  console.log(message);
} else {
  console.log("Columns en rows moet gelijk zijn");
}
