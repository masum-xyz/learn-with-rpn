function numberSum(num) {
  if(num == 1) {
    return 1;
  }
  else {
    return num + numberSum(num - 1);
  }
}
console.log(numberSum(5)); // 5 + 4 + 3 + 2 + 1 = 15

// Perpangkatan
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
console.log(power(3, 3)); // 3 ** 3 = 27