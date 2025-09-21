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
