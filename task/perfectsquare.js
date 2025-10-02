function isPerfectSquare(n) {
  if (n < 0) {
    return false;
  }

  let sqrt = Math.sqrt(n);
  //   console.log(sqrt);
  return Number.isInteger(sqrt);
}

console.log(isPerfectSquare(9));
