const students = [
  {
    firstName: "Dion",
    lastName: "Van Hecke",
    thumbnail: "images/dion.jpg",
    email: "dion@vanhecke.be",
  },
  {
    firstName: "Stef",
    lastName: "De Boeck",
    thumbnail: "images/stef.jpg",
    email: "stef@deboeck.be",
  },
  {
    firstName: "Sahin",
    lastName: "Cinar",
    thumbnail: "images/sahin.jpg",
    email: "sahin@fenerbahce.tr",
  },
];

function convertStudentToHTMLString(student) {
  return `
    <li>
        <h2>${student.firstName} ${student.lastName}</h2>
        <img src="${student.thumbnail}" />
        <a href="mailto:${student.email}">${student.email}</a>
    </li>`;
}

// const $students = document.getElementById("students");
const $container = document.querySelector("#students");

let content = "<ul>";
/* for (const student of students) {
  content += `<li>${student.firstName}</li>`;
} */
content += students
  .map((student) => {
    return convertStudentToHTMLString(student);
  })
  .join("");
content += "</ul>";

console.log(content);

$container.innerHTML = content;
