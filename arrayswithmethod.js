// // // Objects and arrays together
// const data = {
//   users: [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//   ],
// };
// console.log(data.users[1].name);
// Alice

/*
//unshift: Adds one or more elements to the beginning of an array and returns the new length.

let arr = [1, 2];
let unshiftArray = arr.unshift(3, 4);
console.log(arr); //  [ 3, 4, 1, 2 ]
console.log(unshiftArray); //  4 length
.............................................................
//shift(): Removes the first element from an array and returns that element
let arr1 = [1, 2, 3];
let shiftArray = arr1.shift();
console.log(shiftArray);
.............................................................

// splice(start, deleteCount, ...items): A versatile method that can add, remove,
//  or replace elements at a specific position.

let arr2 = [1, 2, 3, 4, 5];
//arr2.splice(2, 2); // start form index 2 and delete 2 values forward

arr2.splice(1, 1, 23, 34); //[ 1, 23, 34, 3, 4, 5 ]
console.log(arr2);
........................................................
 */

//map()
let num = [1, 2, 3, 4, 5];
let doubled = num.map((n) => n * 2);
console.log("Doubled: ", doubled);

//filter()
let evens = num.filter((n) => n % 2 === 0);
console.log("evens: ", evens);

// find()
let firstEven = num.find((n) => n % 2 === 0);
console.log("firstEven: ", firstEven);

// some()
let anyoneEven = num.some((n) => n % 2 === 0);
console.log("someEven: ", anyoneEven); // true

// every()
let everyPositive = num.every((n) => n > 0);
console.log("everyPositive: ", everyPositive); // true
