var isPowerOfThree = function (n) {
  n = Math.log(n) / Math.log(3)
  return Math.abs(n - Math.round(n)) < 1e-10 ? true : false
};
let a = isPowerOfThree(0)
console.log(a)