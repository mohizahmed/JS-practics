function getLongestWord(sentence) {
  let strSplit = sentence.split(" ");
  strSplit.sort((a, b) => b.length - a.length);
  let word = strSplit[0];

  // console.log(strSplit);

  // if (strSplit[0].length == strSplit[1].length) {
  //   return strSplit[0];
  // } else return word;

  return word;
}

console.log(getLongestWord("This is temporary place1234."));
