let stringArray = ["1", "2", "3"]; // declaring the variable
function convertArray() {
    let numberArray = stringArray.map(str => Number(str)); // Convert each string to a number
    console.log(numberArray);
}
convertArray();
