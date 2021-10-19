(() => {
  const $paragraphs = document.querySelectorAll(".text");

  $paragraphs.forEach(function ($p) {
    console.log("Text", $p);
  });

  for (const $p of $paragraphs) {
    console.log($p);
  }

  // DOES NOT WORK! (NodeList != Array)
  $paragraphs.map(($p) => {
    console.log($p);
  });
})();
