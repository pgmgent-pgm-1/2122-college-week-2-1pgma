function calculateSum(number1, number2) {
  const sum = number1 + number2;
  console.log(sum);
  return sum;
}
const result = calculateSum(10, 20); // 30
console.log(result); // 30

function calcSumRecursive(number1, number2) {
  const sum = number1 + number2;
  console.log(sum);
  if (sum < 50) {
    return calcSumRecursive(sum, sum);
  } else {
    return sum;
  }
}
console.log(calcSumRecursive(2, 2)); // 64

function calculateArraySum(numbers) {}
calculateArraySum([3, 5, 2, 39, 4]);

function calculateTotalSum(name, ...numbers) {
  let i = 0;
  for (const n of numbers) {
    i += n;
  }
  return i;
}
console.log(calculateTotalSum("Michael", 3, 5, 2, 39, 4));
