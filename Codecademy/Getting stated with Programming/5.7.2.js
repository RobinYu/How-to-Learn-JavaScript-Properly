function selectFrom(lowerValue, upperValue) {
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2, 10);
console.log(num);

var colors = ['red', 'green', 'yellow', 'black', 'purple', 'brown'];
var color = colors[selectFrom(0, colors.length-1)];
console.log(color);
