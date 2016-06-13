function Person(name, age, job) {
  // 创建要返回的对象
  var o = new Object();
  // 可以在这里定义私有变量和函数
  // 添加方法
  o.sayName = function () {
    console.log(name);
  };

  // 返回对象
  return o;
}

var friend = Person('Nicholas', 29, 'Software Engineer');
friend.sayName();
