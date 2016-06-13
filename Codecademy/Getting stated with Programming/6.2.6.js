function SpecialArray() {
  // 创建数组
  var values = new Array();
  // 添加值
  values.push.apply(values, arguments);
  // 添加方法
  values.toPipedString = function () {
    return this.join('|');
  };

  // 返回数组
  return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString());
