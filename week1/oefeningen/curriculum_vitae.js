// option 1
const firstName = "Michael";
const lastName = "Vanderpoorten";
const age = 29;
const married = false;

// option 2
const person = {
  firstName: "Michael",
  lastName: "Vanderpoorten",
  age: 29,
  married: false,
};

const result = `
    =======================
    Firstname: ${person.firstName}
    Married: ${person.married ? "Yes" : "No"}
`;

console.log(result);
