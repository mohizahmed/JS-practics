// function that return true if reverse exist else return false

function isMirror(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let reverseStr1 = str1.split("").reverse().join("");
  if (reverseStr1 === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(isMirror("letter", "rettel")); // true

//  check number or letter  greater than other one
function digitLetters(num, str) {
  if (num > str.length) {
    return "letter";
  } else {
    return "digit";
  }
}

console.log(digitLetters(8, "alphabet"));
