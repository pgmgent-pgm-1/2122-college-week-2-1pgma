(function () {
  const firstName = "Michael";
  const age = 29;
  const person = {
    name: firstName,
    age: age,
  };
  const persons = [
    person,
    {
      name: "Philippe",
    },
  ];

  // strings aan elkaar willen plakken
  // Mijn naam is Michael en ik ben 29 jaar oud
  let sentence =
    "Mijn naam is " + firstName + " en ik ben " + age + " jaar oud";
  sentence = `Mijn naam is ${firstName} en ik ben ${age} jaar oud`;
  console.log(sentence);

  const date = new Date();
  console.log(date.getTime()); // aantal milliseconden sinds 1970

  const yesterday = 1635069600000;
  const date2 = new Date(yesterday);
  console.log(date2);

  // functions
  function sayName(name) {
    console.log(`My name is ${name}`);
  }
  // alternative
  const sayNameArrow = (name) => {
    console.log(`My name is ${name}`);
  };

  sayName("Michael");
  sayName("Joppe");
  sayName("Lotte");
  sayName("Jef");
  sayName("Stef");
})();
