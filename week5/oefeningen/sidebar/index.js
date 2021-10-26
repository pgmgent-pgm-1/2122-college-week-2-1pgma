(function () {
  const $btn = document.querySelector("#btn");
  const $sidebar = document.querySelector("#sidebar");

  $btn.addEventListener(
    "click",
    function (e) {
      if ($sidebar.classList.contains("open")) {
        $sidebar.classList.remove("open");
      } else {
        $sidebar.classList.add("open");
      }
    },
    false
  );
})();
