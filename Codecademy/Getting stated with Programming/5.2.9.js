var values = [1, 2 ,3 ,4 ,5];
var sum = values.reduce(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(sum);
