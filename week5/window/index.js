(function () {
  // window
  // window.alert("Dit is een alert");
  const $elements = document.querySelectorAll("header h1");
  console.log($elements); // NodeList
  const $h1 = $elements[0]; // Element Node h1
  console.log($h1);

  console.log($h1.innerText);
  console.log($h1.innerHTML);

  $h1.innerText = "Lectoren";

  // option 1
  // const $ul = document.querySelectorAll(".list")[0];
  // option 2
  // const $ul = document.getElementsByClassName("list")[0];
  // option 3
  const $ul = document.querySelector(".list");
  console.log($ul);

  const $name = document.getElementById("name");
  console.log($name);
  $name.innerHTML = "Michael <b>Vanderpoorten</b>";

  const $content = document.getElementById("content");

  if ($content) {
    const laptops = [
      "Macbook Pro",
      "Microsoft Surface",
      "Dell",
      "Asus Chromebook",
    ];

    let html = "<ul>";
    html += laptops
      .map((laptop) => {
        return `<li>${laptop}</li>`;
      })
      .join("");
    html += "</ul>";

    $content.innerHTML = html;

    $content.style.backgroundColor = "red";
  } else {
    console.log("No div with id content found");
  }
})();
