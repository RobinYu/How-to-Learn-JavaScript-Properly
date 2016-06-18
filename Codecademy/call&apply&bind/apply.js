var obj = {
  x: 81,
};

var foo = {
  getX: function () {
    return this.x;
  },
};

console.log(foo.getX.bind(obj)());  // 81
console.log(foo.getX.call(obj));    // 81
console.log(foo.getX.apply(obj));   // 81
