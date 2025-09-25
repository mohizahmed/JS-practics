function numofFiles(filesize, fileunit, drivesizeGB) {
  let filesizeinbytes;

  switch (fileunit) {
    case "B":
      filesizeinbytes = filesize;
      break;
    case "KB":
      filesizeinbytes = filesize * 1000;
      break;
    case "MB":
      filesizeinbytes = filesize * 1000 * 1000;
      break;
    default:
      console.log("Invalid fileunit");
  }

  let drivesizeinbytes = drivesizeGB * 1000 * 1000 * 1000;
  totalfiles = drivesizeinbytes / filesizeinbytes;
  return totalfiles;
}
console.log(numofFiles(1000, "KB", 1));

/*
give a car fuel storage capacity, current level of fuel and price per litre. return how many rupees it would take to fill the tank completely

fullPrice(storageLimit, currentFlow, fuelPrice){
return totalPrice.
}

*/
