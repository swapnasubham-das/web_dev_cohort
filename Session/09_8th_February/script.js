//  let age = 24
//  console.log(age)

 // Finction - A reusable block of code that performs a specific task
 // A block of code that can be called multiple times with different inputs

//  function addTwoNumbers(num1, num2) {
//     const sum = num1 + num2
//     return sum
// } 

// const result = addTwoNumbers(5, 10)
// console.log(result)

// for (let i = 0; i < result; i++) {
//     console.log(`The current number is: ${i}`)
// }


// const cartoon = function() {
//     console.log("This is a cartoon function")
// }

// cartoon()

// Arrow function
// const anime = () => {
//     console.log("This is an anime function")
// }

// anime()


// Data Structure

// const fruits = ["Apple","Orange","Banana","Graps","Tomato"]

// console.log(fruits[3])
// console.log(fruits)

// fruits.push("Dragon Fruits")
// console.log(fruits)

// console.log(fruits.length)
// console.log(fruits.length)
// console.log(fruits.includes("Potato"))
// console.log(fruits.slice(2,5))


// function map(array, fn) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const currentElement = array[i];
//     const num = fn(currentElement);
//     result.push(num)
//   }

//   return result;
// }

// const nums = [3, 10, 24, 90];
// const results = map(nums, e => e * 10 + 1);

// console.log(results);


function map(array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const num = fn(currentElement);
    result.push(num);
  }

  return result;
}

function multiplyAndAddOne(e) {
  return e * 10 + 1;
}

const nums = [3, 10, 24, 90];
const results = map(nums, multiplyAndAddOne);

console.log(results);

