// //function declaration: it is supported the hoisted.
// sayHello();
// function sayHello() {
//   console.log("Hello World!");
// }

// //function expression
// // sayHello(); // Error: sayHello is not a function

// let sayHello = function () {
//   console.log("Hello World!");
// };

// sayHello(); // Output: "Hello World!"

// const func1 = (a, b) => {
//   return a + b;
// };

// console.log(func1());

// rest parameter
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

// default parameter
// function greet(fullName, message = "hello") {
//   console.log(`${fullName} ${message} `);
// }

// console.log(greet("ahmed"));
// console.log(greet("daniyal", "is my name."));
