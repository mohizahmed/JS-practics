// for ( let i = 1; i <= 3; i++){
//     console.log("dots:",i  )
// }

// let count = 1;
// while (count <= 10) {

//     console.log("Count:", count)
//     count++;
// }

// // for...of
// let fruits = ["apple", "banana", "mango", "orange"]
// for (let fruit of fruits) {

//     console.log(fruit)
// }

// //for..in
// let student = {

//     fullname : "sid",
//     age : 21,
//     cgpa : 2.8
// };
// for (let key in student) {
//     console.log(key, ":", student[key]);

// }

let list = ["milk", "breads", "eggs"];
for (let slist of list) {
  console.log(slist);
}
console.log("......");
list.push("choclate");
for (let nlist of list) {
  console.log(nlist);
}
