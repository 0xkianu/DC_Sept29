let myArray = [1,2,3,4,5,6];
function removeElements(valArray) {
    let arrLen = valArray.length;
    for(let x=2; x < arrLen; x++) {
      console.log(valArray.pop());
    }
}

removeElements(myArray);