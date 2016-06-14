function SuperType(name) {
  this.name = name;
}

function SubType() {
  // 继承了SuperType,同时还传递了参数
  SuperType.call(this, 'Nicholas');

  // 实例属性
  this.age = 29;
}

var instance = new SubType();
console.log(instance.name);
console.log(instance.age);
