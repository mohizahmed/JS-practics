/*
const person = {
  Name: "yunza",
  age: 22,
  languages: ["French", "Spanish", "Arabian"],
  address: { city: "haripur", zip: 4500 },
};

console.log(person.Name);
console.log(person["Name"]);
person.languages.pop();
console.log(person.languages);
person.address.HouseNumber = 35;
console.log(person.address.HouseNumber); */

// object literals
const person1 = { name1: "zulfi", city: "Islamabad", age: 22 };

// object destructuring
const { name1, city } = person1;
// console.log(name1);

// console.log(city);
// Destructuring with default values and renaming
const { age, houseNumber = 32211, city: country } = person1;

console.log(age);
console.log(houseNumber);
console.log("Country is:", country);
