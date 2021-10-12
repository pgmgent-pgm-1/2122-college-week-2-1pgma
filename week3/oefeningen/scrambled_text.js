function scrambleText(text) {
  // 1. split string to array
  let words = text.split("");
  // 2. re-sort array (shuffle)
  words = words.sort(function (w1, w2) {
    return Math.round(Math.random() * 2) - 1;
  });
  // 3. array to string
  return `The word ${text} scrambled is ${words.join("")}`;
}

console.log(scrambleText("website"));
console.log(scrambleText("webdevelopment"));
console.log(scrambleText("programming"));
