function fuelStorage(storageLimit, currentFuel, fuelPrice) {
  let emptySpace = storageLimit - currentFuel; // emptySpace = 20 litre
  let totalPrice = emptySpace * fuelPrice;
  // console.log("Curren Fuel: " + currentFuel + " litre");
  return totalPrice;
}
console.log(fuelStorage(50, 30, 10)); // fuelPrice: 10 Rs

/* user se input lena run time py */
