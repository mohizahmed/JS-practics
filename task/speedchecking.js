function checkSpeeding(carSpeeds, speedLimit) {
  const overLimit = carSpeeds.filter((speed) => speed > speedLimit);

  if (overLimit.length > 0) {
    return overLimit;
  } else {
    return [0, 0];
  }
}

let result = checkSpeeding([100, 35, 90, 70, 20], 40);
console.log(result); // Output: [100, 90, 70]
