//The for..in loop in JavaScript allows you to iterate over all property keys of an object.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
