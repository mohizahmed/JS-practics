function makeCounter() {
  let count = 0;
  function counter() {
    count++;
    return count;
  }
}
const firstCounter = makeCounter();
console.log(firstCounter);
