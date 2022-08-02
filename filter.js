/*
The filter() method creates a new array filled with elements that pass a test provided by a function,
it does not execute the function for empty elements,
it does not change the original array.
*/
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log ('age')