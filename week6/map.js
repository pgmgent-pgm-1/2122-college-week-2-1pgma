(function () {
  let lectors = [
    {
      firstName: "Michael",
      lastName: "Vanderpoorten",
    },
    {
      firstName: "Philippe",
      lastName: "De Pauw - Waterschoot",
    },
    {
      firstName: "Evelien",
      lastName: "Rutsaert",
    },
  ];

  lectors = lectors.map(function (lector, index) {
    return `${index + 1}. ${lector.firstName} ${lector.lastName}`;
  });
  lectors = lectors.join("\n");
  console.log(lectors);
})();
