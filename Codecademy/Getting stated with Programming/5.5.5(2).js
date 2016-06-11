function sum(num1, num2) {
  return num1 + num2;
}

function callSum1(num1, num2) {
  return sum.apply(this, arguments); // 传入arguments对象
}

function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]); // 传入数组
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));
