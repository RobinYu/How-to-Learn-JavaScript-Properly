var num_1 = 10;
var arr_1 = ['Tom', 'Peter', 'Smith'];
var setInfo = function (num, arr) {
  num = 20;
  arr[1] = 'Jackson';
  console.log('数值：' + num);
  console.log(' 数组：' + arr[1]);
};
setInfo(num_1, arr_1);
console.log('<br />');
console.log('数值：' + num_1);
console.log(' 数组：' + arr_1[1]);
