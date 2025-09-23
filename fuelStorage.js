function fuelStorage(storageLimit, currentFuel, fuelPrice) {
  let emptySpace = storageLimit - currentFuel; // emptySpace = 20 litre
  let totalPrice = emptySpace * fuelPrice;
  return totalPrice;
}
console.log(fuelStorage(50, 30, 10));
