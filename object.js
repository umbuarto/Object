function duruian(array) {
  var result = {};
  result.name = array[0];
  result.harga = array[1];
  result.enak = array[2];
  return result;
}

console.log(duruian(["durian", 75000, true]));
