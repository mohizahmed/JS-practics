// conditionals


// let something = false;

// // somecondition ?

// true && false
//   ? console.log("Something is true")
//   : console.log("Something is false");

let something = false;
true && false;

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     //multiple lines can be executed
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// // Output: "Wednesday"

let scr = 78;

if (scr >= 90) {
  console.log("Grade:A");
} else if (scr >= 80) {
  console.log("Grade:B");
} else scr >= 75;
console.log("Grade:C");

let day = 6;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday ");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid Day");
}


// datatypes
/* let foo = 12;
console.log(foo);
foo = "Thats it";
console.log(foo);
foo = true;

console.log(foo);

console.log(typeof foo); */

/* var name = 123;
name1 = null;
console.log(typeof name1); */

("use strict");
name2 = 123;
console.log(name2);


// loops

for ( let i = 1; i <= 3; i++){
    console.log("dots:",i  )
}

let count = 1;
while (count <= 10) {
    
    console.log("Count:", count)
    count++;
}

// for...of 
let fruits = ["apple", "banana", "mango", "orange"]
for (let fruit of fruits) {
    
    console.log(fruit)
}

//for..in
let student = {

    fullname : "sid",
    age : 21,
    cgpa : 2.8
};
for (let key in student) {
    console.log(key, ":", student[key]);

}

// operators

// // *, +, -, /
// console.log(10 + 5); // 15
// console.log(10 % 3); // 1
// console.log(2 ** 3); // 8
//
// console.log(5 == "5"); // true (loose equality)
// console.log(5 === "5"); // false (strict equality)

// // >, <, <=, !=, !==
// console.log(10 >= 7);
// // true
// // Logical
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);
// // false

// Arithmetic
console.log(10 % 3);
console.log(10 + 12);
console.log(2 * 7);

// Comparison
console.log(5 == "5"); //
console.log(5 === "5");

//primvsref
// Primitive types have separate copies for each reference

// Primitive
let x = 10;
let y = x;
y = 20;
console.log(y);
console.log(x); // 10 (unchanged)
// Reference
// Reference types when copied point to same variable
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]

let myObject = {
  fullname: "Ahad",
  age: 32,
};
newObject = myObject;
newObject.cgpa = 3.1;
console.log(myObject);


// strings

let sentence = "this is our last day"
const word = "lasts";
const isword = sentence.includes(word);
console.log(isword)


// var const let
var accountPassword = "190190";

const accountId = 15912;
let accountCity = "Islamabad";
accountType = "Saving";
console.log(accountType);
accountType = "Current";
let accountState;

console.table([
  accountCity,
  accountId,
  accountPassword,
  accountState,
  accountType,
]);

const name = 123; // Reassign nahi kar sakte
name = 456; // Error!

let name1 = 123;
name1 = 456; //  Valid

var name2 = 123;
name2 = 456; //  Valid






