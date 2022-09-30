let person = {
    firstName: "Tom",
    currentDate: "09/29/2022",
    programmingLanguage: "JavaScript",
    random:"420"
};

let fName = "firstName";
person.currentMonth = "September";
person["currentYear"] = "2022";
person["currentDay"] = "29th";

function introduction(newPerson) {
  console.log(`Hello! My name is ${newPerson.firstName}`);
  console.log(`The date is the ${newPerson["currentDay"]} of current month, ${newPerson["currentMonth"]}`);
  console.log(`I am currently learning how to program in ${newPerson.programmingLanguage}`);
}

delete person.random;
introduction(person);