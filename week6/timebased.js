console.log("1. Voor de timeout");

// na 2 seconden
setTimeout(function () {
  console.log("2. 2 seconden gewacht");
}, 2 * 1000);

// elke 2 seconden
setInterval(function () {
  console.log("4. Elke 2 seconden");
}, 2 * 1000);
console.log("3. Na de timeout");
