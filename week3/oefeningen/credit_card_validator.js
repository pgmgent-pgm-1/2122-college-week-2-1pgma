function verifyCreditCardNumber(value) {
  // 16 digits
  if (value.length !== 16) {
    return false;
  }
  // all digits are numbers
  if (isNaN(value)) {
    return false;
  }
  // last digit should be even
  const lastDigit = value.charAt(value.length - 1);
  if (parseInt(lastDigit) % 2 !== 0) {
    return false;
  }
  // sum should be higher than 16
  const parts = value.split("");
  let sum = 0;
  parts.forEach(function (part) {
    sum += parseInt(part);
  });
  if (sum <= 16) {
    return false;
  }
  // at least one digit should be different
  // for the solution for two digits, check solutions
  let different = false;
  parts.forEach(function (part1) {
    parts.forEach(function (part2) {
      if (part2 !== part1) {
        different = true;
      }
    });
  });
  if (!different) {
    return false;
  }
  return true;
}

console.log(verifyCreditCardNumber("4916648438160062"));
console.log(verifyCreditCardNumber("4916648438160063"));
console.log(verifyCreditCardNumber("4444444444444444"));
