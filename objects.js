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
console.log(person.address.HouseNumber);
