/*
map() creates a new array from calling a function for every array element,
calls a function once for each element in an array,
does not execute the function for empty elements, and does not change the original array.
*/

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
