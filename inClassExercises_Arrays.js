let array1 = ["Thomas","Lee","JavaScript"];
let array2 = [9,22,2022];

function introduction(strArray, numArray) {
  console.log(`Hello my name is ${strArray[0]} ${strArray[1]}`);
  console.log(`The date is the ${numArray[1]}nd of the ${numArray[0]}th month`);
  console.log(`I am currently learning how to program in ${strArray[2]}`);
}

introduction(array1,array2);