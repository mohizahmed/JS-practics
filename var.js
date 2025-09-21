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
