(function () {
  const $body = document.querySelector("body");

  // alternative to innerHTML
  const $h1 = document.createElement("h1");
  $h1.innerText = "Heading 1";
  $body.appendChild($h1);

  const $btn = document.querySelector("#btn");
  const $color = document.querySelector("#color");

  let clicks = 0;

  $btn.addEventListener(
    "click",
    function (event) {
      console.log($color);
      clicks++;
      $color.style.marginLeft = `${clicks * 50}px`;
    },
    false
  );

  $color.addEventListener(
    "mouseover",
    function (event) {
      $color.classList.add("highlight");
    },
    false
  );

  $color.addEventListener(
    "mouseout",
    function (event) {
      $color.classList.remove("highlight");
    },
    false
  );
})();
