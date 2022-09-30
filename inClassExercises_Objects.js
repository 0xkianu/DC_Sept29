let person = {
    firstName: "Tom",
    currentDay: "29th",
    currentMonth: "September",
    currentYear: "2022",
    programmingLanguage: "JavaScript"
};

function introduction(newPerson) {
  console.log(`Hello! My name is ${newPerson.firstName}`);
  console.log(`The date is the ${newPerson.currentDay} of current Month, ${newPerson.currentMonth}`);
  console.log(`I am currently learning how to program in ${newPerson.programmingLanguage}`);
}

introduction(person);