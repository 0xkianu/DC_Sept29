const array1 = ["Thomas","Lee","JavaScript"];
const array2 = [9,22,2022];

function introduction(strArray, numArray) {
  const langArray = ["HTML","CSS","JavaScript","React","Bananas"];
  console.log(`Hello my name is ${strArray[0]} ${strArray[1]}`);
  console.log(`The date is the ${numArray[1]}nd of the ${numArray[0]}th month`);
  console.log(`I am currently learning how to program in ${langArray.join(',')}`);
  console.log(`Wait! I'm not learning in ${langArray.pop()}`);
  langArray.push("Node");
  console.log(`I am learning ${langArray.join(',')}`);
}


introduction(array1,array2);